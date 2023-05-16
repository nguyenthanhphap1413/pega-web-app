'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "02683e91867ff9cc53d3fb62669d423f",
"index.html": "b9fced1ef16d771a599688f9e7ec12d6",
"/": "b9fced1ef16d771a599688f9e7ec12d6",
"main.dart.js": "99c9a6ef03eaf933652b914e20ce1fda",
"404.html": "8b812f7e1d484608f2065166868adbce",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/favicon-16x16.png": "6238ffca1f35e625052ea587906c4ad1",
"icons/favicon.ico": "c3201d7048f9c77315d6426fe5887955",
"icons/apple-icon.png": "351812b6026422de6fd46e8971296c33",
"icons/apple-icon-144x144.png": "510278ebfa719a2b5ea0e2044739589c",
"icons/android-icon-192x192.png": "fb4cc82b1788b8940b48c755d568faca",
"icons/apple-icon-precomposed.png": "351812b6026422de6fd46e8971296c33",
"icons/apple-icon-114x114.png": "43a495c07ed41891edd40bac7bfff2d9",
"icons/ms-icon-310x310.png": "72dc6c62da0ec85508f13a0a2b4d37d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ms-icon-144x144.png": "510278ebfa719a2b5ea0e2044739589c",
"icons/apple-icon-57x57.png": "e310ecebbdeaf232f40a1f5167d6e714",
"icons/apple-icon-152x152.png": "ab378ced58a92e078fdb0824766cfde2",
"icons/favicon.png": "3bf27d41893d8d9ea84d97e0a409614f",
"icons/ms-icon-150x150.png": "906cf01b55ca823f9945cb15d34c6b62",
"icons/android-icon-72x72.png": "279f4b59bdabb675139631a52452b540",
"icons/android-icon-96x96.png": "20a10daf6ab0a5abdfbde5ac96f4ebd2",
"icons/android-icon-36x36.png": "db68187c88dc1a242ee108b4dc300fd0",
"icons/apple-icon-180x180.png": "f158ff403ef7fb5a945eb74172c8a0e5",
"icons/favicon-96x96.png": "20a10daf6ab0a5abdfbde5ac96f4ebd2",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "be9b9a971d1299ce01e7eee481f969d5",
"icons/apple-icon-76x76.png": "f36e373b7815387ac4d0efa53eaf0f99",
"icons/apple-icon-60x60.png": "8f0c287677609792ffdcaf7a6a05930b",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "510278ebfa719a2b5ea0e2044739589c",
"icons/apple-icon-72x72.png": "279f4b59bdabb675139631a52452b540",
"icons/apple-icon-120x120.png": "f0077c0f044a303ab9ccb32c149324c2",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "3bba505730dedb46ccf36c78ed8a9841",
"icons/ms-icon-70x70.png": "e38a10294527daea5a826cc0d5c66360",
"manifest.json": "372cb23c7023d918b381dea6dd2f3f8c",
"assets/images/success.gif": "60720df441b1538b0ca1231120677fcb",
"assets/images/404_page.png": "0c36d0f0f6e8772c5282898718f1f69b",
"assets/images/failed.gif": "f96d7eaf4c6d84dcbbf4e16a348d1b85",
"assets/AssetManifest.json": "ff82d48d3c622784d40b67cf841a0cf9",
"assets/NOTICES": "4cf9f955817931204eedd3de028a41f3",
"assets/FontManifest.json": "db157b2e4b4a6dc1507a72a40c04dd14",
"assets/packages/file_icon/fonts/seti.ttf": "2b67c27356467781d7786c59ca58b34f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/mockups/cs_master_data_by_code_response.json": "3726f451fb08534600f7d7df991e15da",
"assets/assets/mockups/profile_info_response.json": "15b58d8021c66b8dd6f606a68a88b4e9",
"assets/assets/fonts/roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"app.js": "7d0495fa1780ad64d91c2950326dda6f",
"splash-icon.png": "145bc1322adb0ae75e61fc2694959540",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
