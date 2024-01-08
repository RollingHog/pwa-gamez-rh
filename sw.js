const GHP_PATH = '/pwa-gamez-rh'

// eslint-disable-next-line no-unused-vars
const APP_PREFIX = 'rh_pgz_dsc'

// The version of the cache. Every time you change any of the files
// you need to change this version.
// eslint-disable-next-line no-unused-vars
const VERSION = '1.1.1'

// The files to make available for offline use
// eslint-disable-next-line no-unused-vars
const URLS = [
  `${GHP_PATH}/`,
  `${GHP_PATH}/index.html`,
  `${GHP_PATH}/common/common.css`,
  `${GHP_PATH}/common/common.js`,
  `${GHP_PATH}/catch-the-star/index.html`,
  `${GHP_PATH}/catch-the-star/index.js`,
]

// https://stackoverflow.com/questions/46541071/progressive-web-app-does-not-work-offline-error
self.addEventListener('fetch', function (event) {
  event.respondWith(async function () {
    try {
      var res = await fetch(event.request)
      var cache = await caches.open('cache')
      cache.put(event.request.url, res.clone())
      return res
    }
    catch (error) {
      return caches.match(event.request)
    }
  }())
})
