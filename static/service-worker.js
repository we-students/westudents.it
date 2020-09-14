caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
        caches.delete(cacheName)
    })
})

navigator.serviceWorker.getRegistration().then(function (reg) {
    if (reg) {
        reg.unregister().then(function () {
            window.location.reload(true)
        })
    } else {
        window.location.reload(true)
    }
})
