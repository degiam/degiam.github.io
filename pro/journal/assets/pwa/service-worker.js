const app = "uad-journal-v1"
const assets = [
	"/",
	"../../index.html",
	"/css/main.css",
	"/js/main.js",
	"/icon/favicon.ico",
	"/icon/icon-16x16.png",
	"/icon/icon-32x32.png",
	"/icon/icon-72x72.png",
	"/icon/icon-128x128.png",
	"/icon/icon-144x144.png",
	"/icon/icon-152x152.png",
	"/icon/icon-192x192.png",
	"/icon/icon-256x256.png",
	"/icon/icon-512x512.png",
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