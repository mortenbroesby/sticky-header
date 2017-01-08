const header = document.getElementsByClassName('header')[0];
const stickPoint = getDistance();
let isSticky = false;

function getDistance() {
  var topDist = header.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  if ( (distance <= 0) && !isSticky) {
    header.style.position = 'fixed';
    header.style.top = '0px';
    isSticky = true;
  } else if (isSticky && (offset <= stickPoint)) {
    header.style.position = 'absolute';
    header.style.top = 'auto';
    isSticky = false;
  }
}