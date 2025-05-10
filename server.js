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

// Initialize Supabase client with explicit URL and key
const supabaseUrl = 'https://uvzpootdkurdeqpnepxu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2enBvb3Rka3VyZGVxcG5lcHh1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjU3NzkwMCwiZXhwIjoyMDYyMTUzOTAwfQ.o_figuGKWvLzZgGtDKNacS6PX1HKGK0xk-_YFeprf6g';

const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Google Sheets with the working configuration
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: "grwoth-grub",
    private_key_id: "231dfc8fdbabd3ef71e0b4dd011c6713d3c806b0",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDq712WXWdGNr69\n9vjZcRh++EHqI29DZPj5lXrLKSXFlr96vni4CV4YDwtJAGv2iOrFL+YKjFxN8TyM\n6VygUg5uSq7de83eYKNiCDI29DBKCHwXm1oC43WiA3+4UkRJhkiUhePRsWk69jql\nJPYcxcA6WyoWnjghislHY7zs77sWcvNvBb8Z3/bUG9aRqByxJIp5VCsXInQTKdo7\nI1MCPxCOTNpha5pX1+KCS83H+xOjU1nZlHUsBp7fHJQJDMi+efedINVuo6bHv2X+\nMN+HKLTdMjZ1UwpVHMc+HkXX0qzpWNWOGeobXBfDbDHykizOD46pnEuBP15AAyb9\nvLh9ei4RAgMBAAECggEAAaOmyjw7LhoZHcMR03FxAVCnkaiF7F2/SLRBTqi8abwb\nHRJIl1pvGBJz8ZAHVWTm5C0Nht0HkrVeEBPt6atSDHT2YEBlnFcv/vHUjZTAmzg1\nXXQ7VPtBm944YceUmYq8LqCMiWXjpjk+dzn0p2HibQ707cvCQV0WsHNCtX9hlYXJ\n0H3zm9pHb2Ro13o68F+a06eo0cS0viQq8XFzhK/2skLMCh9Iox1JIo0B+YR2drEI\nf8dRVhiEny6GqQ5ckdveW5yWcYvepMaG5u3TRQWAykMRvG6Ah/BHpffYikqjpnZR\nIMPUi05c8pAnooG2GLJcV5OV73G8S/uB0gSO133ZkQKBgQD/TWfxD/FrttzfZn7V\nobgr30Q9IRmb41SMIb5601z4fLmjGzcLkLVBMxpm4f+eegrkrGpplqLkW20Yafcp\nzO6mBFUigRzBWPVzOQzb8jCwu3cRydvjlh5NhhgOUX33J/RhojkDXsA25cHZHEec\n+OMxsx+ckiszsZsIce0hHGcEzQKBgQDrk7Y4g+Bi/amuX+eLgDQdb82ayZgdDQOk\nsKVTbVBTH9q0j3D+XCwB7kNsCuz+JuzwhfWEbym+rmOszNFfKPYfvlWf+owl7mnW\nw3QynO8BJO3EvT8cGkV8DykKlPIiJQ9E2arnszlJg7daJW7F08w2IVBpGVRzfc08\n9nIZZAvuVQKBgQCGe2XXS8imLssmOr1xFyEGqzMs6DSvMw6kSlomJRSCKGE5E+rp\nAq8Xyy2LKF0YQ71dO51KRXlExQwwohD6SeMkPIAEDvLwvkV9Dn5BldAkKHvOOQDF\nX5xSxeICGNc7zCYlD+jsZ4rk4B4+mXD3tPsogOyT80MildnOlwSMPoPduQKBgBqo\nRF5wzdtlyOWqhJEMmNkb5bA2T7g52MeyFYMzQ3ukhyMXeDnQREqTo51+PwMjdHxj\nLD0oNxkUssLDCo4yHGfLKfVIbMN+Dwv2Yhe4GnOOsjkpERMlBefb71D7OcsTVn78\nApLlfP4MoZrZ0YchSGJ3spmx/BR1j9vuJ0soPxFhAoGAMH4KW8SVHDo/ek9H+SmC\n6ZhMy3Q2WB/576Ldx0tGE2nTWTieu5PDhvXouCxBhhyteDycInn6JRDojuZZqrrQ\nUoa6JANmLI4s1pq/VoLhvrfLUeYpy+uiRZVcXkG/0ECUn9Ozvf414F/18H8aMqqv\nHFCihUeXssKsEjqYe3aBy00=\n-----END PRIVATE KEY-----\n",
    client_email: "growth-grub-service@grwoth-grub.iam.gserviceaccount.com",
    client_id: "102183284194744389030",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/growth-grub-service%40grwoth-grub.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = '1SQdl4yNYiPbzpeWr8Wa85BDql69GH9tTLL8cW3x5NXo';

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