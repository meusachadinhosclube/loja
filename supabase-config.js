// supabase-config.js
const SUPABASE_URL = 'https://abstptccgexobnxbcqlz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFic3RwdGNjZ2V4b2JueGJjcWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwMDA5NzEsImV4cCI6MjEwNzU3Njk3MX0.80h-3ML3YeMppY1767EQtpZ2tVFfJYzelZbQ_Zt9U2w';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);