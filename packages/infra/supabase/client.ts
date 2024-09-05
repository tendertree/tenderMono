import { createClient } from "@supabase/supabase-js";
import { log } from "console";
import { v4 as uuidv4 } from 'uuid'

const supabaseUrl = process.env.SUPABASE_URL || "rstarst";
const supabaseKey = process.env.SUPABASE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey, {
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
