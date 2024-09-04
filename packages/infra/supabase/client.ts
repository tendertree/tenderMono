import { createClient } from "@supabase/supabase-js";
import { log } from "console";
import { v4 as uuidv4 } from 'uuid'


const SUPABASE_URL = "https://uoqktzovrvwgxplkrfaw.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvcWt0em92cnZ3Z3hwbGtyZmF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MTg3MTksImV4cCI6MjA0MDk5NDcxOX0.ik9VwnoFeXl4l6JSya-IUoo0YV-fxgo_o8UID_FrUpo"


// const supabaseUrl = process.env.SUPABASE_URL || "rstarst";
// const supabaseKey = process.env.SUPABASE_ROLE_KEY || "";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    db: {
        schema: "public",
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
    global: {},
});

export default supabase;


const generateUniqueId = () => {
    return uuidv4();
};

