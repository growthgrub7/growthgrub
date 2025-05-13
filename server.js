console.log('=== THIS IS THE CORRECT SERVER.JS ===');
import express from 'express';
import cors from 'cors';
import twilio from 'twilio';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { google } from 'googleapis';

// Load environment variables
dotenv.config();

const app = express();
// Enhance CORS configuration
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Initialize Twilio client if credentials are available
let twilioClient = null;
if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
  try {
    twilioClient = new twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    console.log('Twilio client initialized successfully');
  } catch (error) {
    console.error('Error initializing Twilio client:', error);
  }
} else {
  console.warn('Twilio credentials not found in environment variables');
}

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Google Sheets with environment variables
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
    private_key_id: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_SHEETS_CLIENT_EMAIL}`,
    universe_domain: "googleapis.com"
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  try {
    const { name, email, phone, school, message } = req.body;

    // Store lead in Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          school,
          message,
          created_at: new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          })
        }
      ]);

    if (error) throw error;

    console.log('Before Google Sheets block');
    // Add to Google Sheets
    try {
      console.log('Attempting to write to Google Sheets...');
      // First verify we can access the spreadsheet
      const metadata = await sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID
      });
      console.log('Successfully connected to spreadsheet:', metadata.data.properties.title);

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A:F',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [[
            new Date().toLocaleString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true
            }),
            name,
            email,
            phone,
            school,
            message
          ]]
        }
      });
      console.log('Google Sheets update successful:', response.data);
      console.log('After Google Sheets block');
    } catch (sheetsError) {
      console.error('Google Sheets Error Details:', sheetsError);
    }

    // Send WhatsApp notification if Twilio is configured
    if (twilioClient) {
      try {
        const messageContent = message; // Store the message content in a separate variable
        const twilioResponse = await twilioClient.messages.create({
          body: `New lead from Growth Grub website!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchool: ${school}\n\nMessage: ${messageContent}`,
          from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
          to: 'whatsapp:+917036414961'
        });
        console.log('WhatsApp message sent:', twilioResponse.sid);
      } catch (twilioError) {
        console.error('Twilio error:', twilioError);
      }
    } else {
      console.log('Skipping WhatsApp notification - Twilio not configured');
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add endpoint to get all leads
app.get('/api/leads', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
// Listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Server URL: http://localhost:${PORT}`);
}); 