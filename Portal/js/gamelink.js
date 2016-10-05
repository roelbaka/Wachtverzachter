document.addEventListener("DOMContentLoaded", function(event) {
  const gameLinkEle = document.querySelector('.js-game-link');
  gameLinkEle.addEventListener('click', function(event){
    event.preventDefault();
    const gameLinkHref = this.getAttribute('href');
    const iframeEle = document.createElement('iframe');
    iframeEle.className = 'game-frame';
    iframeEle.src = gameLinkHref;
    document.body.appendChild(iframeEle);
  });
});
