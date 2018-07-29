//var Figure = (function() {
//
//  var Figure = function() {
//    this.x = x;
//    this.y = y;
//  };
//
//  var p = Figure.prototype;
//}


class Figure {
  constructor(document, x, y, color) {
    this.x = x;
    this.y = y;
    this.figure = document.createElement("div");
    this.figure.style.top = y + "px";
    this.figure.style.left = x + "px";
    this.figure.style.position = "fixed";
    this.figure.style.backgroundColor = color;

  }
}

class Square extends Figure {
  constructor(document, x, y, width, height, color) {
    super(document, x, y, color);
    this.width = width;
    this.height = height;
    this.figure.style.width = width + "px";
    this.figure.style.height = height + "px";
  }

  getFigure(figure) {
    return this.figure;
  }

}
