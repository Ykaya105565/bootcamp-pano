/* Cevrimdisi onbellek — pano sinyal olmadan da acilsin.
   SURUM her yayinda degisir, eski onbellek otomatik silinir. */
const SURUM = "bootcamp-adcccbf6f6e6";
const DOSYALAR = ["./", "./index.html", "./veri.js", "./manifest.json", "./icon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(SURUM)
      .then(c => c.addAll(DOSYALAR))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== SURUM).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const istek = e.request;
  if(istek.method !== "GET" || new URL(istek.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(istek).then(onbellek => {
      /* once onbellekten ver, arka planda tazele */
      const agdan = fetch(istek).then(cevap => {
        if(cevap && cevap.ok){
          const kopya = cevap.clone();
          caches.open(SURUM).then(c => c.put(istek, kopya)).catch(() => {});
        }
        return cevap;
      }).catch(() => onbellek);
      return onbellek || agdan;
    })
  );
});
