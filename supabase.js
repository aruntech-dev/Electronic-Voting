// supabase.js
// Student side uses NO LOGIN. Admin side still uses Supabase Auth so
// random visitors cannot change elections/candidates.

const SUPABASE_URL = "https://vnkwylrwnotybxzguolb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_nrRE6i2QcollvLI5bNKluA_jXE2UspR";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
window.db = db;

window.schoolVote = {
  async session() {
    const { data, error } = await db.auth.getSession();
    if (error) throw error;
    return data.session;
  },
  async logout() {
    await db.auth.signOut();
  }
};
