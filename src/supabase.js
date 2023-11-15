import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bviprkmehznrzpjjvfaj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2aXBya21laHpucnpwamp2ZmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NzAyMzgsImV4cCI6MjAxNTE0NjIzOH0.InpWiSs7bgL70Cf0JRaicVxrPlQ9jlOog4wTe7OHoHk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
