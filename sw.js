const VERSION = "v1";

self.addEventListener("install", (e) => {
  e.waitUntil(precache());
});

self.addEventListener("fetch", (e) => {
  const request = e.request;
  // get
  if (request.method !== "GET") {
    request;
  }
  // Search in cache
  e.respondWith(cachedResponse(request));
  // Update in cache
  e.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/index.html",
    "/assets/css/index.css",
    "/assets/js/plugins/Autopause.js",
    "/assets/js/plugins/Autoplay.js",
    "/assets/js/utils/MediaPlayer.js",
    "/assets/js/index.js",
    "/assets/video/video.mp4",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);

  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
