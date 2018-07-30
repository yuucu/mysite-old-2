class Figure {
  constructor(document, x, y, position='fixed', color='random') {
    this.x = x;
    this.y = y;
    this.figure = document.createElement("div");
    this.figure.style.top = y + "px";
    this.figure.style.left = x + "px";
    this.figure.style.position = position;
    if(color == 'random') {
      this.figure.style.backgroundColor = this.createRandomColor();
    }
    else {
      this.color = color;
      this.figure.style.backgroundColor = color;
    }
  }

  createRandomColor() {
    var randomColor = "#";
    for(var i = 0; i < 6; i++) {
      randomColor += (16*Math.random() | 0).toString(16);
    }
    return randomColor;
  }
}

class Square extends Figure {
  constructor(document, x, y, width, height, position,color) {
    super(document, x, y, position, color);
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
  constructor(document, x, y, line_length, line_weight, position, color) {
    super(document, x, y, position,  color);
    this.width = line_weight;
    this.height = line_length;
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

class Terminal {
  constructor(document) {
    this.elem = document.getElementById('terminal');
    this.history = [];
    this.dir = "home";
    this.prompt = "[~/" + this.dir + "]$ ";
    this.updateNormal(" - satokibi.github.io");
    this.theme = 'white';
    
    this.elem.onclick = function() {
      document.getElementById('terminal').style.backgroundColor = 'black';
      document.getElementById('terminal').style.color = 'white';
    }
  }

  setDir(dir) {
    this.prompt = "[~/" + dir + "]$ ";
    this.updateNormal("[~/" + this.dir + "]$ " + "cd ~/" + dir);
    this.dir = dir;
  }

  update(str) {
    this.history.push(this.prompt + str);
    if(this.history.length > 11) {
      this.history.shift();
    }

    this.elem.innerHTML = "";
    for(let i=0;i<this.history.length;i++) {
      this.elem.innerHTML += "<p>" + this.history[i] + "</p>";
    }
    this.elem.innerHTML += this.prompt;

  }

  updateNormal(str) {
    this.history.push(str);
    if(this.history.length > 11) {
      this.history.shift();
    }

    this.elem.innerHTML = "";
    for(let i=0;i<this.history.length;i++) {
      this.elem.innerHTML += "<p>" + this.history[i] + "</p>";
    }
    this.elem.innerHTML += this.prompt;
  }

  updateOver(str) {
    this.history.push(str);
    this.elem.innerHTML = "";
    for(let i=0;i<this.history.length;i++) {
      this.elem.innerHTML += "<p>" + this.history[i] + "</p>";
    }
    this.history.pop();
  }


}
