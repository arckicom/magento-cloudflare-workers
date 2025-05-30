const maintenance = true; // Toggle as needed

addEventListener('fetch', event => {
  if (maintenance) {
    return event.respondWith(new Response("Site under maintenance", {
      status: 503,
      headers: { "Retry-After": "3600" }
    }));
  }
  return event.respondWith(fetch(event.request));
});
