// ── Visit tracker ────────────────────────────────────────────────────────
// Fire-and-forget pageview logger. Logs to Supabase so admin.html can show
// visit counts (total, your own vs. other visitors, and per job-link ref).
// Never throws, never blocks rendering — a failed/slow request just means
// one missed log entry, nothing else on the page is affected.
(function () {
  var SUPABASE_URL = "https://nsnkcsuqguhkfrpdwfgt.supabase.co";
  var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zbmtjc3VxZ3Voa2ZycGR3Zmd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMzg2ODUsImV4cCI6MjA5MzcxNDY4NX0.SiM0QUikOXLVUuCm4MSsc4ITqPKpgtWKKN0zEatHkrw";

  function getRef() {
    try {
      return new URLSearchParams(window.location.search).get('ref') || null;
    } catch (e) { return null; }
  }

  function logVisit(ip) {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var body = JSON.stringify({
      path: path,
      ref: getRef(),
      ip: ip || null,
      user_agent: navigator.userAgent,
      referrer: document.referrer || null
    });
    fetch(SUPABASE_URL + '/rest/v1/page_views', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
      },
      body: body,
      keepalive: true
    }).catch(function () {});
  }

  fetch('https://api.ipify.org?format=json')
    .then(function (r) { return r.json(); })
    .then(function (d) { logVisit(d && d.ip); })
    .catch(function () { logVisit(null); });
})();
