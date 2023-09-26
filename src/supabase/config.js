import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_API_KEY

export const supabase = createClient(url, key)