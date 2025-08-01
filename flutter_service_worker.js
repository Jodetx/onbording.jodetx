'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "46a923b754ae3fa1c290795539895db0",
"assets/AssetManifest.bin.json": "85dfb193b7abc312a7b99b940094c973",
"assets/AssetManifest.json": "564c001f91e7af231efe2d5ff1c72922",
"assets/assets/Jodetx_Wallpaper.jpg": "b083d0bd9401be2e768e3709c3bd80da",
"assets/assets/Jodetx_WallpaperTransparent.png": "8728789cb179479b01c1ea2f74ab9e9f",
"assets/assets/jode_logo.jpeg": "66450e71de5975cff1982467318ce5ba",
"assets/assets/pdf/AccountantJD.pdf": "5ba1d5bd163e501671dd3bac41d6265e",
"assets/assets/pdf/AreaSalesManagerJD.pdf": "c6c8d3d0a939fe43e143b64aad76cbfe",
"assets/assets/pdf/BankAllianceManagerJD.pdf": "ec29de9ec0f14ccd84891dc73c25ddbb",
"assets/assets/pdf/DataEntryOperatorJD.pdf": "7fcfee802a0939dbfbdb1f506f4d189a",
"assets/assets/pdf/DBAJD.pdf": "104f4824d61c92f6a5b2429e2e723dc1",
"assets/assets/pdf/full_stack_developer_JD.pdf": "cd239dbb9c5ac550bc4069069b0576d4",
"assets/assets/pdf/Graphic_Motion_Designer_JD.pdf": "0da2458c611c42992640312deccbfd6e",
"assets/assets/pdf/JriOSNativeDeveloperSwiftJD.pdf": "59c52184ed229e162825ce2ea7167eb2",
"assets/assets/pdf/MarketingJD.pdf": "db06266d477e64e42093890d44b2801d",
"assets/assets/pdf/NestJSProperJD.pdf": "3ae60fc4d3b6947481a9b5606d28383e",
"assets/assets/pdf/ReceptioncumAdminJD.pdf": "d0976245cac9b95f99fda1080f29e537",
"assets/assets/pdf/SpringBootDeveloperJD.pdf": "6d1ca255bfbfb7e5619eb355e428da23",
"assets/assets/pdf/SrHRJD.pdf": "54e79716dfbfa8647c489347d425cc41",
"assets/assets/pdf/TelesalesJD.pdf": "4e564f939dc9f5a105721fcba826f12e",
"assets/assets/pdf/UI_UX_DesignerJD.pdf": "9cbb9ffa42d83670c9a7384961766120",
"assets/assets/sucess_lottie.json": "7d097e8f07dc9ffcabf43386abd41a5c",
"assets/assets/upload_photo.png": "88033080454ee3892631b42d321db0c3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cd4bb053d05c3e78dda89043b4f8fb92",
"assets/NOTICES": "017a4a49e82df037f93bfdfaa5a7e3c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a5747f16340555b37963d4620c943eb8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "85cdb974aa27a6d69e76191c36116600",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon-16x16.png": "7a2e1a6a53135c3f270effa15f0d0804",
"favicon-32x32.png": "7b7b6ae406037001717bf1e04a7d49ab",
"favicon.ico": "81fa5d4727fc354663b4e00160068512",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "96c02ed477630c5c3aebc3bdab478d2e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/jode_logo.jpeg": "66450e71de5975cff1982467318ce5ba",
"index.html": "671187ee86b7131b11a63df172ea5f2e",
"/": "671187ee86b7131b11a63df172ea5f2e",
"main.dart.js": "8f9719aab2b89a317c99d56e9271840b",
"manifest.json": "31bb1c831fd1e1cdf6252c336d4c3834",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "7351b7ece328a043574a0149fd6774e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
