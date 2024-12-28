import { createClient } from "@supabase/supabase-js";

//create supabase client
const isProduction = process.env.NODE_ENV === "production";

const auth = {
  //storage: storage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
};

export const supabase = createClient(
  isProduction
    ? process.env.REACT_APP_SUPABASE_URL_PROD ?? ""
    : process.env.REACT_APP_SUPABASE_URL_DEV ?? "",
  isProduction
    ? process.env.REACT_APP_SUPABASE_ANON_KEY_PROD ?? ""
    : process.env.REACT_APP_SUPABASE_ANON_KEY_DEV ?? "",
  { auth }
);
