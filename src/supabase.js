import { createClient } from "@supabase/supabase-js";

//create supabase client
const isProduction = process.env.NODE_ENV === "production";

class SimpleStorage {
  store;

  constructor() {
    this.store = new Map();
  }

  // Get item from storage
  getItem(key) {
    return this.store.has(key) ? this.store.get(key) || null : null;
  }

  // Set item in storage
  setItem(key, value) {
    this.store.set(key, value);
  }

  // Remove item from storage
  removeItem(key) {
    this.store.delete(key);
  }
}

// Usage example
const storage = new SimpleStorage();

const auth = {
  storage: storage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: "implicit",
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
