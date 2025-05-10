import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvzpootdkurdeqpnepxu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2enBvb3Rka3VyZGVxcG5lcHh1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjU3NzkwMCwiZXhwIjoyMDYyMTUzOTAwfQ.o_figuGKWvLzZgGtDKNacS6PX1HKGK0xk-_YFeprf6g';

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdminUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'growthgrub7@gmail.com',
    password: 'Admin@123',
  });

  if (error) {
    console.error('Error creating admin user:', error);
  } else {
    console.log('Admin user created successfully:', data);
  }
}

createAdminUser(); 