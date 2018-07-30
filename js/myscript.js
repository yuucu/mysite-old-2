var mysite = mysite || {};
mysite.screen = document.getElementById('background-screen');
mysite.figureInterval = 80;
mysite.divSquare = document.getElementById('square-screen');
mysite.divCross = document.getElementById('cross-screen');

anime({
  targets: '.square',
  translateX: 250
});


// init 
createSquareBack(mysite.screen, mysite.figureInterval, 4, 'fixed', '#dddddd');
createSquareBack(mysite.divSquare, 40, 4, 'absolute' ,'#dddddd');
createCrossBack(mysite.divCross, 40, 'absolute' ,'#dddddd');


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
mysite.divSquare.onclick = function(){
  createSquareBack(mysite.screen, mysite.figureInterval, 4, 'fixed', '#dddddd');
}
mysite.divCross.onclick = function(){
  createCrossBack(mysite.screen, mysite.figureInterval, 'fixed', '#dddddd');
}


// create figure
function createSquareBack(target, interval, size, position, color) {
  target.innerHTML = "";
  for( let i=0; i<target.clientWidth / interval; i++) {
    for( let j=0; j<target.clientHeight / interval; j++) {
      let square = new Square(document, interval*i+16, interval*j+16, size, size, position, color);
      target.appendChild(square.getFigure());
    }
  }
}

function createCrossBack(target, interval, position, color) {
  target.innerHTML = "";
  for( let i=0; i<target.clientWidth / interval; i++) {
    for( let j=0; j<target.clientHeight / interval; j++) {
      cross = new Cross(document, interval*i+16, interval*j+16, 7, 1, position, color);
      target.appendChild(cross.getFigure());
    }
  }
}
