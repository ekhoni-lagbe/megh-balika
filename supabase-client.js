(() => {
  const url = window.MEGH_BALIKA_SUPABASE_URL;
  const key = window.MEGH_BALIKA_SUPABASE_ANON_KEY;
  const ready = Boolean(url && key && !url.startsWith('YOUR_') && !key.startsWith('YOUR_'));
  window.mbSupabaseReady = ready;
  window.mbSupabase = ready ? window.supabase.createClient(url, key) : null;
})();
