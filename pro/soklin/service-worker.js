const app = "soklin-v1"
const assets = [
	"/",
	"/index.html",
	"/assets/css/main.css",
	"/assets/js/main.js",
	"/assets/img/favicon.ico",
	"/assets/icon/16x16.png",
	"/assets/icon/32x32.png",
	"/assets/icon/72x72.png",
	"/assets/icon/128x128.png",
	"/assets/icon/144x144.png",
	"/assets/icon/152x152.png",
	"/assets/icon/192x192.png",
	"/assets/icon/256x256.png",
	"/assets/icon/512x512.png",
]

self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(app).then(cache => {
			cache.addAll(assets)
		})
	)
})

self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})