import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvzpootdkurdeqpnepxu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2enBvb3Rka3VyZGVxcG5lcHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1Nzc5MDAsImV4cCI6MjA2MjE1MzkwMH0.2PgmreCIAoHz1PTXqMRW530acu9KiPi5Opxyffo1mA0';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
}); 