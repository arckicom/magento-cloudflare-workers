addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('.jpg') || url.pathname.endsWith('.png')) {
    url.hostname = "locklanproperty.com"; // Your CF Images domain
    return event.respondWith(fetch(url));
  }
  return event.respondWith(fetch(event.request));
});
