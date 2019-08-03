
declare var self: Window;

self.addEventListener("install", () => {
    console.log("SW Installed at", new Date().toLocaleTimeString());
});

self.addEventListener("activate", () => {
    console.log("SW Activated at", new Date().toLocaleTimeString());
});

self.addEventListener("fetch", (event: any) => {
    console.log(event.request.url);
    event.respondWith(fetch(event.request));
});
