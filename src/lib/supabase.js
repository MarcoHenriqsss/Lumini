import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://ciehrftlrhdhtuhbhykh.supabase.co"; 
 
const supabasePublishableKey = 
  "sb_publishable_MnqtidqBdm0JPntKEo5S9Q_DTJi6onQ";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);