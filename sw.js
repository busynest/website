importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

// import * as googleAnalytics from 'workbox-google-analytics';
// googleAnalytics.initialize();

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
    {url: 'index.html', revision: '383676' },
    {url: 'manifest.json', revision: null},
    // {url: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js', revision: null},
    // {url: 'node_modules/lit/polyfill-support.js', revision: null},
    {url: 'images/favicon.ico', revision: null },
    // {url: '/deploy/application-shell.js', revision: null },
    // {url: 'https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js', revision: null },
    // {url: 'https://www.gstatic.com/firebasejs/7.18.0/firebase-auth.js', revision: null },
    // {url: 'https://www.gstatic.com/firebasejs/7.18.0/firebase-firestore.js', revision: null },
    // {url: 'https://www.gstatic.com/firebasejs/7.18.0/firebase-storage.js', revision: null },
    // {url: 'https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js', revision: null },
    // {url: 'https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js', revision: null },
    //{url: '/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js', revision: null },
  ]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}