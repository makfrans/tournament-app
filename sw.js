const CACHE_NAME = "squad-tracker-v1";
const FILES = ["./", "./index.html", "./manifest.json", "./icon.jpeg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});