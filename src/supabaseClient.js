import { createClient } from '@supabase/supabase-js';

// To be more secure: .env file. 
const supabaseURL = "https://jbdcrjpctkswexdsbgzn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZGNyanBjdGtzd2V4ZHNiZ3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMTE0NDYsImV4cCI6MjAyMjg4NzQ0Nn0.aeqO_3oFRsk6ZgAmmwHn97wl2XwOMwdBRbzCwseQoCY";

export const supabase = createClient(supabaseURL, supabaseAnonKey);