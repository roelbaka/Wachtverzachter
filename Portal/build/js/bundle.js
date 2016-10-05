'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
  var gameLinkEle = document.querySelector('.js-game-link');
  gameLinkEle.addEventListener('click', function (event) {
    event.preventDefault();
    var gameLinkHref = this.getAttribute('href');
    var iframeEle = document.createElement('iframe');
    iframeEle.className = 'game-frame';
    iframeEle.src = gameLinkHref;
    document.body.appendChild(iframeEle);
  });
});
'use strict';

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function () {
    return navigator.serviceWorker.ready;
  }).then(function (reg) {
    console.log('Service Worker is ready :^)', reg);

    reg.pushManager.subscribe({
      userVisibleOnly: true
    }).then(function (sub) {
      console.log('endpoint:', sub.endpoint);
    });
  }).catch(function (error) {
    console.log('Service Worker error :^(', error);
  });
}