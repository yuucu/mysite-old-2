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

class Cross extends Figure {
  constructor(document, x, y, line_length, line_weight, color) {
    super(document, x, y, color);
    this.width = line_weight;
    this.height = line_length;
    this.color = color;
    this.figure.style.width = this.width + "px";
    this.figure.style.height = this.height + "px";
    this.figure.className = "cross" + this.height + this.width;

    let style = document.getElementById('jsStyle');
    let target = "." + this.figure.className + "::after";
    //let str_split = style.innerHTML.split(/[\{|\}]/);
    let str_split = style.innerHTML.split(' ');
    for(let s of str_split) {
      // not add same rules
      if(s == target) {
        return;
      }
    }
    let pos = (this.height-this.width) / 2;
    let rule = 'background-color:' + this.color + ';content: "";position:absolute;height:' + this.width + 'px;width:' + this.height + 'px;left:-' + pos + 'px;top: ' + pos +'px;';
    style.innerHTML += '<!-- ' + target + " {" + rule + "}" + '-->';
  }

  getFigure(figure) {
    return this.figure;
  }
}

