var mysite = mysite || {};
mysite.screen = document.getElementById('background-screen');
mysite.figureInterval = 80;


anime({
  targets: '.square',
  translateX: 250
});


// init backscreen 
for( let i=0; i<mysite.screen.clientWidth / mysite.figureInterval; i++) {
  for( let j=0; j<mysite.screen.clientHeight / mysite.figureInterval; j++) {
    let square = new Square(document, mysite.figureInterval*i, mysite.figureInterval*j, 4,4,"black");
    mysite.screen.appendChild(square.getFigure());
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
      mysite.screen.innerHTML = "";

      for( let i=0; i<mysite.screen.clientWidth / mysite.figureInterval; i++) {
        for( let j=0; j<mysite.screen.clientHeight / mysite.figureInterval; j++) {
          cross = new Cross(document, mysite.figureInterval*i, mysite.figureInterval*j, 7, 1, 'black');
          mysite.screen.appendChild(cross.getFigure());
        }
      }

    }, 200);
  };
}());
