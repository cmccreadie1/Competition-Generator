const CACHE_NAME = 'zonedraw-v12.04.18';
const ASSETS = ['./', './index.html', './manifest.json', 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'];

self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then(kn => Promise.all(kn.map(k => { if(k!==CACHE_NAME) return caches.delete(k); })))));
self.addEventListener('fetch', (e) => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
