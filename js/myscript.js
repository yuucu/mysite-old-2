var mysite = mysite || {};

window.onload = function() {
  mysite.screen = document.getElementById('background-screen');
  mysite.figureInterval = 80;
  mysite.navHome = document.getElementById('nav-home');
  mysite.navWorks = document.getElementById('nav-works');
  mysite.navAbout = document.getElementById('nav-about');
  mysite.navSystem = document.getElementById('nav-system');
  mysite.divSquare = document.getElementById('square-screen');
  mysite.divCross = document.getElementById('cross-screen');
  mysite.theme = 'square';

  // init 
  setHomePage();
  createSquareBack(mysite.screen, mysite.figureInterval, 4, 'fixed', '#dddddd');
  createSquareBack(mysite.divSquare, 40, 4, 'absolute' ,'#dddddd');
  createCrossBack(mysite.divCross, 40, 'absolute' ,'#dddddd');

  // button click
  mysite.navHome.onclick = function() {
    setHomePage();
  }
  mysite.navWorks.onclick = function() {
    setWorksPage();
  }
  mysite.navAbout.onclick = function() {
    setAboutPage();
  }
  mysite.navSystem.onclick = function() {
    setSystemPage();
  }

  mysite.divSquare.onclick = function(){
    createSquareBack(mysite.screen, mysite.figureInterval, 4, 'fixed', '#dddddd');
  }
  mysite.divCross.onclick = function(){
    createCrossBack(mysite.screen, mysite.figureInterval, 'fixed', '#dddddd');
  }
}


anime({
  targets: '.square',
  translateX: 250
});


// resize window
(function () {
  var timer = 0;
  window.onresize = function () {
    if (timer > 0) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      switch(mysite.theme) {
        case 'square':
          createSquareBack(mysite.screen, mysite.figureInterval, 4, 'fixed', '#dddddd');
          break;
        case 'cross':
          createCrossBack(mysite.screen, mysite.figureInterval, 'fixed', '#dddddd');
          break;
      }
    }, 200);
  };
}());

// create figure
function createSquareBack(target, interval, size, position, color) {
  target.innerHTML = "";
  mysite.theme = 'square';
  for( let i=0; i<target.clientWidth / interval; i++) {
    for( let j=0; j<target.clientHeight / interval; j++) {
      let square = new Square(document, interval*i+16, interval*j+16, size, size, position, color);
      target.appendChild(square.getFigure());
    }
  }
}

function createCrossBack(target, interval, position, color) {
  target.innerHTML = "";
  mysite.theme = 'cross';
  for( let i=0; i<target.clientWidth / interval; i++) {
    for( let j=0; j<target.clientHeight / interval; j++) {
      cross = new Cross(document, interval*i+16, interval*j+16, 7, 1, position, color);
      target.appendChild(cross.getFigure());
    }
  }
}


// move page
function setHomePage() {
  document.getElementById('main-home').style.display = 'block';
  document.getElementById('main-works').style.display = 'none';
  document.getElementById('main-about').style.display = 'none';
  document.getElementById('main-system').style.display = 'none';
}

function setWorksPage() {
    document.getElementById('main-home').style.display = 'none';
    document.getElementById('main-works').style.display = 'block';
    document.getElementById('main-about').style.display = 'none';
    document.getElementById('main-system').style.display = 'none';
}
function setAboutPage() {
    document.getElementById('main-home').style.display = 'none';
    document.getElementById('main-works').style.display = 'none';
    document.getElementById('main-about').style.display = 'block';
    document.getElementById('main-system').style.display = 'none';
}
function setSystemPage() {
    document.getElementById('main-home').style.display = 'none';
    document.getElementById('main-works').style.display = 'none';
    document.getElementById('main-about').style.display = 'none';
    document.getElementById('main-system').style.display = 'block';
}
