addEventListener('fetch', event => {
  event.respondWith(handleGeoRedirect(event.request));
});

async function handleGeoRedirect(request) {
  const country = request.cf?.country;
  if (country === 'AU') {
    return Response.redirect('https://my.locklanproperty.com', 302);
  }
  return fetch(request);
}
