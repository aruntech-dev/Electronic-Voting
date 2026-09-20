const SUPABASE_URL = "https://vnkwylrwnotybxzguolb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_nrRE6i2QcollvLI5bNKluA_jXE2UspR";
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
async function getSession(){const {data,error}=await db.auth.getSession();if(error)throw error;return data.session;}
async function signOut(){await db.auth.signOut();location.href="index.html";}
