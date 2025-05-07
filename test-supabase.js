import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uvzpootdkurdeqpnepxu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2enBvb3Rka3VyZGVxcG5lcHh1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjU3NzkwMCwiZXhwIjoyMDYyMTUzOTAwfQ.o_figuGKWvLzZgGtDKNacS6PX1HKGK0xk-_YFeprf6g'
);

async function testInsert() {
  const { data, error } = await supabase
    .from('leads')
    .insert([
      {
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        school: 'Test School',
        message: 'This is a test lead from Node.js script.'
      }
    ]);

  if (error) {
    console.error('Insert error:', error);
  } else {
    console.log('Insert success:', data);
  }
}

testInsert(); 