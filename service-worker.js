self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('your-cache-name').then(function(cache) {
        return cache.addAll([
          '/',
          '/assets/css/just-the-docs-head-nav.css',
          '/assets/css/webui/resources/resources/fonts/Minecraft-Seven_v2.woff2',
          '/assets/css/clientlib-site/resources/resources/fonts/Minecraft-Seven_v2.woff2',
          '/assets/js/vendor/lunr.min.js',
          '/assets/js/just-the-docs.js',
          '/assets/images/icons/github_b.webp',
          '/assets/images/icons/discord_b.webp',
          '/assets/images/icons/reddit_b.webp',
          '/assets/images/icons/theme_switch_b.webp',
          '/assets/images/favicon.webp',
          '/assets/css/just-the-docs-dark.css',
          '/assets/images/icons/reddit_w.webp',
          '/assets/images/icons/theme_switch_w.webp',
          '/assets/images/icons/github_w.webp',
          '/assets/images/icons/discord_w.webp',
          '/assets/js/search-data.json',
          '/assets/images/favicon.ico',
          '/story/',
          '/windows',
          '/credits',
          '/Windows/minecraft-for-windows/',
          '/Windows/minecraft-for-windows/',
          '/Windows/minecraft-earth/',
          '/Windows/minecraft-education/',
          '/Windows/minecraft-china/',
          '/Windows/minecraft-legends/',
          '/Windows/minecraft-dungeons/',
          '/Android',
          '/Android/minecraft-for-android/',
          '/Android/minecraft-earth/',
          '/Android/miscellaneous/',
          '/IOS/IOS/',
          '/IOS/minecraft/',
          '/IOS/minecraft-earth/',
          '/console/',
          '/miscellaneous/',
          '/credits',
          '/dmca'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });