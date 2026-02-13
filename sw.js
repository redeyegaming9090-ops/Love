const cacheName = 'love-app-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './song.mp3',
  './photo1.jpg',
  './photo2.jpg',
  './photo3.jpg',
  './photo4.jpg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
