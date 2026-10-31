// Service worker: rende l'app disponibile anche senza connessione.
// Cambiare VERSION a ogni aggiornamento del menù per far scaricare la nuova versione.
const VERSION = "pappe-cami-v2";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Pagina: prima la rete (per avere il menù aggiornato), poi la copia salvata.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Font di Google e file dell'app: copia salvata subito, aggiornata in background.
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (isFont || url.origin === self.location.origin) {
    event.respondWith(
      caches.open(VERSION).then((cache) =>
        cache.match(req).then((cached) => {
          const net = fetch(req).then((res) => { if (res.ok || res.type === "opaque") cache.put(req, res.clone()); return res; }).catch(() => cached);
          return cached || net;
        })
      )
    );
  }
});
