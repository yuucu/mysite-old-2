
const screen = document.getElementById('background-screen');
const squareInterval = 80;

var square = document.createElement('div');
square.style.top = "100px";
square.style.height = "100px";
square.style.width = "100px";
square.setAttribute('class', 'square');
screen.appendChild(square);


anime({
  targets: '.square',
  translateX: 250
});




// figure = ['square', 'cross'];
function createFigure(i, j, figure) {
  square = document.createElement('div');
  square.style.top = squareInterval * j + "px";
  square.style.left = squareInterval * i + "px";
  square.setAttribute('class', figure);
  return square;
}

// init backscreen 
for( let i=0; i<screen.clientWidth / squareInterval; i++) {
  for( let j=0; j<screen.clientHeight / squareInterval; j++) {
    square = createFigure(i, j, 'square');
    screen.appendChild(square);
  }
}

// resize window
(function () {
  var timer = 0;
  window.onresize = function () {
    if (timer > 0) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      screen.innerHTML = "";

      for( let i=0; i<screen.clientWidth / squareInterval; i++) {
        for( let j=0; j<screen.clientHeight / squareInterval; j++) {
          square = createFigure(i, j, 'cross');
          screen.appendChild(square);
        }
      }

    }, 200);
  };
}());
