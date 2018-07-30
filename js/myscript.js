var mysite = mysite || {};
mysite.screen = document.getElementById('background-screen');
mysite.figureInterval = 80;


anime({
  targets: '.square',
  translateX: 250
});


// init backscreen 
createSquareBack();


// resize window
(function () {
  var timer = 0;
  window.onresize = function () {
    if (timer > 0) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      createCrossBack();
    }, 200);
  };
}());

// button click
document.getElementById('square-screen').onclick = function(){
  createSquareBack();
}
document.getElementById('cross-screen').onclick = function(){
  createCrossBack();
}



// create backscreen
function createSquareBack() {
  mysite.screen.innerHTML = "";
  for( let i=0; i<mysite.screen.clientWidth / mysite.figureInterval; i++) {
    for( let j=0; j<mysite.screen.clientHeight / mysite.figureInterval; j++) {
      let square = new Square(document, mysite.figureInterval*i, mysite.figureInterval*j, 4,4,"black");
      mysite.screen.appendChild(square.getFigure());
    }
  }
}

function createCrossBack() {
  mysite.screen.innerHTML = "";
  for( let i=0; i<mysite.screen.clientWidth / mysite.figureInterval; i++) {
    for( let j=0; j<mysite.screen.clientHeight / mysite.figureInterval; j++) {
      cross = new Cross(document, mysite.figureInterval*i, mysite.figureInterval*j, 7, 1, 'black');
      mysite.screen.appendChild(cross.getFigure());
    }
  }
}
