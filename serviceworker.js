self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/index.css",
                "./src/app.js", 
                "./images/logo.svg",
                "./images/logo192.png",
                "./images/logo512.png",
                "./images/favicon-32.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})
