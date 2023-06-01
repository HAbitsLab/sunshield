'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0cb773cdf68c1c615640c6f9b8ec9d1c",
"index.html": "d59a8916f3e82c770c4134fcebea7f67",
"/": "d59a8916f3e82c770c4134fcebea7f67",
"main.dart.js": "4eda07bba1d16e5d376c2cfd48384245",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "03fe73ce9578bfa755fe90980c375710",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "896b153e08fb6c3786fa9b06d6cb06ab",
".git/config": "750532b44ab4a414d600dae9fd576e1d",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/9acd64591239d3d315258cfc41aca8f997fce3": "d13c20e0e8158d3e869d21aae4e06200",
".git/objects/04/dc587bf158fdbf30b4ab246b18d4d9e9bfac72": "fd3ec4530d9197b71f08fec81559b832",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/15f4678e03a954605ad08d26876bb73351f9a5": "cfd3008504665b3693e247583fd74357",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/2f2f2d186883b895a71f5a0040a322f0fa5eeb": "d522af44f80caeef7742db8e8cf0c866",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/34/1f0b657b58cbb3dc8690915cf83f16395441b1": "79501dd85d135ec71a5b92d870106653",
".git/objects/9c/67993ae29d3b0e77286997b12384a63952f610": "4423bc53d908555b4ced328a423f28d0",
".git/objects/9c/ef1fd7b55c54126394511be45e71f6f336465d": "849331dae30ec2aab2052e776b1cd0c4",
".git/objects/02/49148a00ec4386c758555dd971e5dd148245ae": "b5eede834c17d5be120ef5ec9db2bb1f",
".git/objects/b5/635c83b9ce27d92f802387abe553c115cbfb22": "8633c1623683bda4fa28796afb44a7dd",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/a2f22399296867e39ca8f26838a600dc0f6684": "e4d9ec9b4d2546be5da16d0bc8493b02",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/4b02859fe15c3fb97d61e37d6dfa2190b33b33": "acb3c1c43a295d36e5e71412df2feecc",
".git/objects/a5/44488b106f8cac41e3abfcc78565a99b20b78e": "e698b24efaa582025bf9030324f06ec5",
".git/objects/bd/ec57a80ffb5521680eb104be768f5e34b9dae5": "26e43d61aacc6c88175c4cfa79cd4f10",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/36b80d6bc75cfecb9d18f91e90d5a86f140f23": "ec4e0533e804c6688ae6d57f3d06d9c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ec9a7befeb555700392009cae6b1e69113afd4": "4ba9c8eaff9db0037c8116b0d8306215",
".git/objects/c7/ad32bc803c1f369fe9999c5ed5c2f20aab3830": "dde20824a7fd9ed8eccc4d204ec3154f",
".git/objects/c7/ceddb95686e797755026e53ee713988de4fc0c": "3a758f8b467a7199fa573a2094a37eaf",
".git/objects/ca/e8ee454eae4cf3e4d77467841af4ce6e4164a3": "5b388ef662a788453d07cf4f77ffeb81",
".git/objects/e4/3b0f988953ae3a84b00331d0ccf5f7d51cb3cf": "106f9f8f7e8a39d99259935974ba928a",
".git/objects/fb/c812f8ce60da24cd4da30ad3921894e84e1b05": "fe3db83bafa158831c15876da2e98754",
".git/objects/16/cba2c36e15488783eb5def25d82e625599f356": "63a684f1b0c957e89148d56fbd1f9ea8",
".git/objects/8f/ea0b885f6d2a8c882238ea7c14c758d6ef4218": "1dca74cc7a5b392c902bf532eef5e982",
".git/objects/8f/ef7c22dd690025b43d0591ff1b39f7cc328b19": "1c61e8fd76ee12800c773e4d2453aeb3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4d/2f729a3956e94e9a873af63f8bc24c7d1fe6f6": "5501f790752e1fefb020453b18dcbbf0",
".git/objects/4d/5137e7e32292feda1a629c596566056d0cc313": "72bdd439b2142615e0104e23206165dd",
".git/objects/81/30497c54b93c446df5a2083035721ca3dd1043": "7255a02a2983327c19f205d574dc7b1b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/29d267f015d04c7a7782543e9ab7baa5d5be3e": "c64542986a2955ede22670a274bf89d7",
".git/objects/36/7f8daa201bd3cab9a15cdd30ddea29d975a2b0": "5c354c3b44490a10b4fea17f243e347e",
".git/objects/31/bb7acdbd6371e433396a74a1756674e9367ef1": "9546f9849e8d0fd6da6297115218c6e8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/2e248c99e832df783e5cc6d2747a7833506d29": "9529d70bbc7439e0ebdddb3c1a2218b7",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/1b394663c6f01ae0151abc55270099c2a709eb": "ff3871a773b91c6c5196ac7815ef9ee5",
".git/objects/99/def52d78fd477f82aaef655d048334af923b93": "153777dd7664d929d15ce299942d0989",
".git/objects/99/b4737c77f690e988781e947d611d09316de0ed": "68ab1d32351cf0a0f9e133407597409f",
".git/objects/99/2ba54460f8c21435d957c15de2c5b9a73975ed": "ad27a76182c603e1102f4b20212cbab3",
".git/objects/64/eb2174e02f36d692ad0195b45af7108057a296": "bcea184bb75b067ac0c1471c7c4190dc",
".git/objects/64/aec177aafdee82d32ac2d7e9a35086443bab33": "499d52dd1c30d75dfc157018c4c4dc2d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/c962b14a852fd9f690671e97e8bf104ba4fba6": "9680d3f33b86186d3ce11beb0216010c",
".git/objects/dd/023c7a4ae5b0da99423d78b068e5476c9394f8": "820192788873ab408b92461be5e842e0",
".git/objects/a9/2e076b4f1f26532ebc758c8402dae3f1d5bac5": "3cee4bfbd701dac37e5256d13804c6e1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/014d26008ac6854fdb1612ace1bc32b76f1368": "0136a6814af4e1848e328978651e7d62",
".git/objects/b7/ff12a78c530b75c188ac75d1426c0842391250": "e2e8b1f05da58ea0ffec1e312bb8a1d8",
".git/objects/db/b7193fe9bb0e10b8890ba04242cf6e1fc44bbd": "9f1dd8e13af523676f04664e29a7de42",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/abde46636b9c6b4a64a43e583d9ebd75d142f5": "a75738b8fc1aae093950b505fc192310",
".git/objects/cc/992c2558ba68cb20000e0381053b1bad2f88e0": "b01f892429e18f61c5a90695b07260f6",
".git/objects/c2/cc7fe06c3426de7a7b696a9042f16c72a8cdf2": "27321023313ad791d3c603fda61eb640",
".git/objects/c2/2f6ef4aed02a529d6b3866f00a9acbf20c72d2": "6747bda0373cb090a1d2857c6a0bdf3a",
".git/objects/e9/c868630230e44a653de2f1ca733df485e6d7ec": "02e35d5f5e93c802a3321b8ad97ad6ba",
".git/objects/cb/fd54672154d8bfac88589cc8a14fe59b638bc7": "9e400d5cdcba10730019e5272de73b5c",
".git/objects/e0/22805c77fe2ad84002508b2f21603d6e8da28e": "ed67c4d52220d0fdc6048df31077c526",
".git/objects/2d/12e8df1f34c854ccdd443a065f2dbf8dc0e5c8": "fc6f6b63936e53ed1ce5f1348039852f",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/ce004efa775b1eaa3ba68c0fc0a8c3f017089b": "528adca76820c904d83e4b2b42a2b36c",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4f/ae240d673848b0271cf159bf046dc85ecf6fbe": "301ea94d76aff8a51eb4c1a67d6d6562",
".git/objects/85/9d7a12ddd9931fb59305edb248248c510fd586": "a6edbb11712a819527696a00d7d90081",
".git/objects/1d/9c8d276a49e63d0502298117058d9af677682f": "e1de52d6a3f490c97c991770c545c2bc",
".git/objects/25/3161750d31b2afde9236b55592395ba1b5a314": "227e05a18e73c5548f91b0e6d0e426a5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e64d3dc50fb172f3247bd57b639af1e",
".git/logs/refs/heads/main": "8e64d3dc50fb172f3247bd57b639af1e",
".git/logs/refs/remotes/origin/main": "35a14915db94fd729aef4892f117df7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c8e8db04dbedcf3b72b4f918296d3cb9",
".git/refs/remotes/origin/main": "c8e8db04dbedcf3b72b4f918296d3cb9",
".git/index": "346c994469094169ec6f3ffd668b264c",
".git/COMMIT_EDITMSG": "439c5b33687875db7ca3699d60e2e71a",
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
"assets/AssetManifest.json": "4367b3df852bc7074b9cfc33c19624bc",
"assets/Slide10.png": "3f0b9801636662dffd1ad8d41caa243e",
"assets/Slide11.png": "d7da0c6933595a3d7015559b569e6e2e",
"assets/Slide13.png": "07ea551a9133565320a8dd676c606765",
"assets/Slide12.png": "607c74f43d141de11d3e6ea1d77ceca5",
"assets/NOTICES": "06c27ff48953696244910e4f926de477",
"assets/Slide23.png": "e5c36f29502660c66a4ea20785ceda09",
"assets/Slide22.png": "e81de57d98020b655f7f435eec872416",
"assets/Slide20.png": "d744b46dd461b5c7e1cf34872653c388",
"assets/Slide21.png": "be880500d7a485f5127833693b42cc9a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/Slide25.png": "3ec39b57f7ff31971cf16864c3ba49b5",
"assets/Slide19.png": "91e83b663ecbaeff5745a4e8ed830fe3",
"assets/Slide18.png": "683ad0a3d9df87d6bda896709f0120a7",
"assets/Slide24.png": "233906b6ddbf5b3a618da07e38585e3c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/Slide26.png": "b8739802f4ddc29ca1f13a12dd155ca1",
"assets/Slide27.png": "3f0b9801636662dffd1ad8d41caa243e",
"assets/AssetManifest.smcbin": "91755cef0026e4c24e5ce0e7b5e07cd2",
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
