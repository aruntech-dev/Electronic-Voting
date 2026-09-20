const SUPABASE_URL = "https://figioydpzoefmpowwnqj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE";
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
async function getSession(){const {data,error}=await db.auth.getSession();if(error)throw error;return data.session;}
async function signOut(){await db.auth.signOut();location.href="index.html";}
