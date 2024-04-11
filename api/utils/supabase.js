import { createClient } from "@supabase/supabase-js"
const supabase = createClient(
  "https://mltybpooqccvxltvwyzj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sdHlicG9vcWNjdnhsdHZ3eXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4MDA3NDMsImV4cCI6MjAxNzM3Njc0M30.lTBPDWKOOr895-QRvwxFvlNALR_pBIZBfmURiz6HIPU"
)

export default supabase
