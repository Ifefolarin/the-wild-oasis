import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oyuvswethpoobbbisgng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95dXZzd2V0aHBvb2JiYmlzZ25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMjgxMDUsImV4cCI6MjAzMTgwNDEwNX0.rRLz4vakwlwoAqAazBcmrurukp1t23c937RO24ggTiM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
