'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2b7f4b5ebfa7835dfbf6f4ca93b74005",
"assets/assets/activity_icons/bedroom.png": "6178795c6d2d2a670b8bc7dfa5dd557a",
"assets/assets/activity_icons/beverage.png": "df82212d6aa3cd868318671b0d6c81b5",
"assets/assets/activity_icons/cell_signals.png": "caab57c5df4668001457196686d498eb",
"assets/assets/activity_icons/commute.png": "3cdd25783ad3e04ec62eb0bd3cfd2fc4",
"assets/assets/activity_icons/construction.png": "d7103e27623f97495577cfb7fa59a01d",
"assets/assets/activity_icons/construction_one.png": "0a067d20788b1586c207aefd44b89dca",
"assets/assets/activity_icons/coronavirus.png": "2e57658882daba78cc30fbec721d5087",
"assets/assets/activity_icons/covid_test.png": "52e14620e66f6de1bf6d388436dba333",
"assets/assets/activity_icons/credit_card.png": "e3291eb89fe7ddb8aa3b8bd450605e9e",
"assets/assets/activity_icons/fire.png": "e690edd6434e1ed3175aacc429b98a66",
"assets/assets/activity_icons/fitness.png": "548834e18d34012ef425a600139bcfb5",
"assets/assets/activity_icons/food_stall.png": "066905a1e1fb18b95f8469291bb825da",
"assets/assets/activity_icons/football.png": "8a789079c38c6490800e7cdf6061a6cb",
"assets/assets/activity_icons/fuel.png": "3a23740f14df0ae7a53c7e01c53712d5",
"assets/assets/activity_icons/funeral.png": "4cddbb7cf17f38b4b51011484ef97efe",
"assets/assets/activity_icons/hijack.png": "ff5b1b3b5e8a116ab26a949c8c994eb2",
"assets/assets/activity_icons/line.png": "3844d7e205a2b34a3de64a08bb3a1cf1",
"assets/assets/activity_icons/map.png": "d5a1299124a164b8a0455f6d0b7d9090",
"assets/assets/activity_icons/power_outage.png": "c7951c97a6cef57a796d02a9dfb00ca7",
"assets/assets/activity_icons/property.png": "73ea07ac87a743d98c61fa1e62a4b0fa",
"assets/assets/activity_icons/protest.png": "e300238032fea12331898a636d34cc20",
"assets/assets/activity_icons/road_closed.png": "2ad8af09e1a2a58fe035a56c009167f6",
"assets/assets/activity_icons/road_work.png": "0971a34903de546bbc01994836be0388",
"assets/assets/activity_icons/spikes.png": "044725e56e72336436e4c42e3efd1e07",
"assets/assets/activity_icons/susp.png": "f74a0438141406b76c2ad382ce7f4a3d",
"assets/assets/activity_icons/system.png": "05baf5c00fdd6f429bdabdc0c4ab4473",
"assets/assets/activity_icons/thrift_shop.png": "4238de97eddfc1ec1d0a8e4d33629dd6",
"assets/assets/activity_icons/traffic_light.png": "a016f085bc7b595c8175d8dfa783d7d5",
"assets/assets/activity_icons/train.png": "ec56163de0f866ca08b33813d5fa71ac",
"assets/assets/activity_icons/train_delay.png": "46ce42905db1748099bc0e4d0dffdeb4",
"assets/assets/activity_icons/water_shortage.png": "dd319fbb48cfc1e8f44b36558e6a7cf1",
"assets/assets/activity_icons/water_truck.png": "ad60ae842673c207669996e54465743d",
"assets/assets/activity_icons/wifi.png": "b8c0efabbad25f9ef6a837f1c957f4b8",
"assets/assets/activity_icons_small/construction_one.png": "98e3b435dd863c45e24b0f85fdbd4324",
"assets/assets/activity_icons_small/lebo.jpg": "5702e2f804656b55781d2c35ef933ce8",
"assets/assets/activity_icons_small/power_outage.png": "0be3beb4bd87e6a728246a6b5a18c876",
"assets/assets/activity_icons_small/protest.png": "5de423fa381f5b05d0a9d748283ed26b",
"assets/assets/images/lebo.jpg": "6074f6b15394253fb52cca1263ef8416",
"assets/assets/logo/ic_launcher.png": "3f5c18d014d36c8149c62ba966fa5c79",
"assets/assets/logo/ic_launcher_white.png": "f1ef25c17b97be58218ef940610a3e78",
"assets/assets/map_assets/driving_pin.png": "6b9ab76e07f3747fd302ec3841cbbae6",
"assets/assets/map_style.txt": "5cbb3437ea405084f648eb802610cef3",
"assets/assets/night_mode.json": "21412823dbfa8099cb9bd38fc5f05dd1",
"assets/assets/sounds/speech_to_text_cancel.m4r": "c9c150d476ffc48d27353579ccabc7fa",
"assets/assets/sounds/speech_to_text_listening.m4r": "80bc081cf87af7b6a5d94c6dbd0b1224",
"assets/assets/sounds/speech_to_text_stop.m4r": "58331d4dbddcf4b7d0c4207e9d1a3a67",
"assets/FontManifest.json": "1f63782fcba1c7d25d20f023cfe6780a",
"assets/fonts/GT%2520Walsheim%2520Bold.ttf": "91e0638dac19aba2539d2b8b2a7981e8",
"assets/fonts/GT%2520Walsheim%2520Pro%2520Regular%2520Regular.ttf": "0abeb2471faeb5269db428b9eac2075e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "224cb3a09faf589528c0a5a4375e46a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "25e26b49492089deea672175452d50df",
"assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "85bea3434a005b1b636d389711c8ecb4",
"/": "85bea3434a005b1b636d389711c8ecb4",
"main.dart.js": "9745a45ac30b48c781fc0d2ce987664d",
"manifest.json": "d1be124bd70f654fa3588f162327ed87",
"version.json": "feab96762a732f92dcee817565a74ce2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
