const CACHE = "merch-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/cart.html",
  "/checkout.html",
  "/css/style.css",
  "/js/products.js",
  "/js/cart.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

