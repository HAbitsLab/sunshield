'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0cb773cdf68c1c615640c6f9b8ec9d1c",
"favicon.ico": "5fbef172f0beb8c1024882efab175fae",
"index.html": "727051bbc5b561c4d5994ce18ca8aa6f",
"/": "727051bbc5b561c4d5994ce18ca8aa6f",
"main.dart.js": "b1aedbb0ddb087ded55bec562c9a67b7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "03fe73ce9578bfa755fe90980c375710",
"icons/icon-192.png": "6f7a4304767699ef6d8f908c155bc693",
"icons/icon-maskable-192.png": "50ab36883c92ba7c322668f9158c140e",
"icons/icon-maskable-512.png": "3f05e5326d03e0049fc29508aefb0e38",
"icons/icon-512.png": "3f05e5326d03e0049fc29508aefb0e38",
"manifest.json": "896b153e08fb6c3786fa9b06d6cb06ab",
"assets/Slide3.png": "40ee83a7e4193158bb4e3296f9cbb493",
"assets/Slide2.png": "0bddb75bbec5acb3ca8e66b172932c97",
"assets/Slide1.png": "07ea551a9133565320a8dd676c606765",
"assets/Slide5.png": "8f6d31670df6d2e0b7e99402ebbba1d4",
"assets/Slide4.png": "c0375bacb3df750478a899ecbfb2d09c",
"assets/Slide6.png": "d392aa500d5adf2069ee94357d6aead7",
"assets/Slide7.png": "de4779f9b6029bec33abc031c82f5db0",
"assets/Slide16.png": "30f201b6c948e55f892c0c3189d7f7ba",
"assets/Slide17.png": "b9e20eccb6c9eb8bb6fceafe0131b2ce",
"assets/Slide15.png": "6385e1d10323eb4af2176a96f150a2d0",
"assets/Slide14.png": "04bf9463a01af5572cd6fe1e8c4a781b",
"assets/Slide28.png": "5a075102a73459bf94adf1a4dfabf783",
"assets/AssetManifest.json": "9d5346684e72ddeb1608c9c5664c434b",
"assets/Slide10.png": "3f0b9801636662dffd1ad8d41caa243e",
"assets/Slide11.png": "d7da0c6933595a3d7015559b569e6e2e",
"assets/Slide13.png": "07ea551a9133565320a8dd676c606765",
"assets/Slide12.png": "607c74f43d141de11d3e6ea1d77ceca5",
"assets/NOTICES": "495d1c49fc5b3d2acf648cef6670804b",
"assets/Slide23.png": "e5c36f29502660c66a4ea20785ceda09",
"assets/Slide22.png": "e81de57d98020b655f7f435eec872416",
"assets/Slide20.png": "d744b46dd461b5c7e1cf34872653c388",
"assets/Slide21.png": "be880500d7a485f5127833693b42cc9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/Slide25.png": "3ec39b57f7ff31971cf16864c3ba49b5",
"assets/Slide19.png": "91e83b663ecbaeff5745a4e8ed830fe3",
"assets/Slide18.png": "683ad0a3d9df87d6bda896709f0120a7",
"assets/Slide24.png": "233906b6ddbf5b3a618da07e38585e3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/Slide26.png": "b8739802f4ddc29ca1f13a12dd155ca1",
"assets/Slide27.png": "3f0b9801636662dffd1ad8d41caa243e",
"assets/AssetManifest.smcbin": "16a7d320b072860e49544f5b4da16cce",
"assets/Slide9.png": "961f7043d0241a74fdeff3d7eade8aec",
"assets/Slide8.png": "1453f71cd04d01cadbbd7d21bd5a8cee",
"assets/fonts/MaterialIcons-Regular.otf": "909106d4546859f529924a70336b011d",
"assets/assets/Slide3.png": "40ee83a7e4193158bb4e3296f9cbb493",
"assets/assets/Slide2.png": "0bddb75bbec5acb3ca8e66b172932c97",
"assets/assets/Slide1.png": "07ea551a9133565320a8dd676c606765",
"assets/assets/Slide5.png": "8f6d31670df6d2e0b7e99402ebbba1d4",
"assets/assets/Slide4.png": "c0375bacb3df750478a899ecbfb2d09c",
"assets/assets/Slide6.png": "d392aa500d5adf2069ee94357d6aead7",
"assets/assets/Slide7.png": "de4779f9b6029bec33abc031c82f5db0",
"assets/assets/images/icon-192-maskable.png": "50ab36883c92ba7c322668f9158c140e",
"assets/assets/images/ic_launcher.png": "7956859993a9c679ca22d6f1b94b7b10",
"assets/assets/Slide16.png": "30f201b6c948e55f892c0c3189d7f7ba",
"assets/assets/Slide17.png": "b9e20eccb6c9eb8bb6fceafe0131b2ce",
"assets/assets/Slide15.png": "6385e1d10323eb4af2176a96f150a2d0",
"assets/assets/Slide14.png": "04bf9463a01af5572cd6fe1e8c4a781b",
"assets/assets/Slide28.png": "5a075102a73459bf94adf1a4dfabf783",
"assets/assets/Slide10.png": "3f0b9801636662dffd1ad8d41caa243e",
"assets/assets/Slide11.png": "d7da0c6933595a3d7015559b569e6e2e",
"assets/assets/Slide13.png": "07ea551a9133565320a8dd676c606765",
"assets/assets/Slide12.png": "607c74f43d141de11d3e6ea1d77ceca5",
"assets/assets/Slide23.png": "e5c36f29502660c66a4ea20785ceda09",
"assets/assets/Slide22.png": "e81de57d98020b655f7f435eec872416",
"assets/assets/Slide20.png": "d744b46dd461b5c7e1cf34872653c388",
"assets/assets/Slide21.png": "be880500d7a485f5127833693b42cc9a",
"assets/assets/Slide25.png": "3ec39b57f7ff31971cf16864c3ba49b5",
"assets/assets/Slide19.png": "91e83b663ecbaeff5745a4e8ed830fe3",
"assets/assets/Slide18.png": "683ad0a3d9df87d6bda896709f0120a7",
"assets/assets/Slide24.png": "233906b6ddbf5b3a618da07e38585e3c",
"assets/assets/Slide26.png": "b8739802f4ddc29ca1f13a12dd155ca1",
"assets/assets/Slide27.png": "3f0b9801636662dffd1ad8d41caa243e",
"assets/assets/Slide9.png": "961f7043d0241a74fdeff3d7eade8aec",
"assets/assets/Slide8.png": "1453f71cd04d01cadbbd7d21bd5a8cee",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
