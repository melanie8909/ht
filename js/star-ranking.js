function init() {
  var rank = document.getElementById('star-rank');
  var stars = document.getElementsByClassName('star');
  var cardHdr = document.getElementById('card-header');

  rank.addEventListener('click', ranker, false);

  function ranker(e) {
    if (e.target.className == 'star star-selected') {
      removeColor();
      setColor(e.target.getAttribute('data'));
    } else {
      setColor(e.target.getAttribute('data'));
    }

    if (Number(e.target.getAttribute('data')) === 1) {
      removeColor();
    }
  }

  function removeColor(num) {
    var i;
    for (i = 0; i < stars.length; i++) {
      stars[i].classList.remove('star-selected');
    }

  }

  function setColor(num) {
    var i;
    for (i = 0; i < Number(num); i++) {
      var ph = (i * -1 + 4);
      stars[ph].className = 'star star-selected';
    }
  }
}

window.onload = function() {
  init();
};