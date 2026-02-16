import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and Anon Key
const supabaseUrl = 'https://ztuaagcwczjaqjldfzrl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0dWFhZ2N3Y3pqYXFqbGRmenJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MDM3NjEsImV4cCI6MjA4NjQ3OTc2MX0.pq-5pS8rcA-Z__r7goyj3hjvpVYFpAnTTMblOzMNClI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
