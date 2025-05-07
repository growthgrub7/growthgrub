import express from 'express';
import cors from 'cors';
import twilio from 'twilio';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Twilio client
const twilioClient = twilio(
  'AC782617ed15ef2d4592d065043c62ea6d',
  'c0b59a05e8e42fdc67adbbf16d89071b'
);

// Initialize Supabase client
const supabase = createClient(
  'https://uvzpootdkurdeqpnepxu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2enBvb3Rka3VyZGVxcG5lcHh1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjU3NzkwMCwiZXhwIjoyMDYyMTUzOTAwfQ.o_figuGKWvLzZgGtDKNacS6PX1HKGK0xk-_YFeprf6g'
);

app.post('/api/contact', async (req, res) => {
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
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;

    // Send WhatsApp notification
    await twilioClient.messages.create({
      body: `New lead from Growth Grub website!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSchool: ${school}\n\nMessage: ${message}`,
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+917036414961'
    });

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
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 