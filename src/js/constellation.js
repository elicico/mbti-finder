if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  });
}

function Constellation(canvas, options) {
  var context = canvas.getContext('2d'),
    defaults = {
      line: {
        color: 'red',
        width: 0.2
      },
      position: {
        x: window.innerWidth * 0.5,
        y: window.innerHeight * 0.5
      },
      width: window.innerWidth,
      height: window.innerHeight,
      velocity: 0.3,
      length: (window.innerWidth * window.innerHeight) / 2500,
      distance: 100,
      radius: Math.min(window.innerHeight, window.innerWidth) * 0.5,
      stars: [],
    };

  var config = Object.assign({}, defaults, options);

  function Star () {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = (config.velocity - (Math.random() * 0.5));
    this.vy = (config.velocity - (Math.random() * 0.5));
  }

  Star.prototype = {
    animate: function(){
      var i;
      for (i = 0; i < config.length; i++) {

        var star = config.stars[i];

        if (star.y < 0 || star.y > canvas.height) {
          star.vx = star.vx;
          star.vy = - star.vy;
        } else if (star.x < 0 || star.x > canvas.width) {
          star.vx = - star.vx;
          star.vy = star.vy;
        }

        star.x += star.vx;
        star.y += star.vy;
      }
    },

    line: function(){
      var length = config.length,
        iStar,
        jStar,
        i,
        j;

      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          iStar = config.stars[i];
          jStar = config.stars[j];

          if (
            (iStar.x - jStar.x) < config.distance &&
            (iStar.y - jStar.y) < config.distance &&
            (iStar.x - jStar.x) > - config.distance &&
            (iStar.y - jStar.y) > - config.distance
          ) {
            if (
              (iStar.x - config.position.x) < config.radius &&
              (iStar.y - config.position.y) < config.radius &&
              (iStar.x - config.position.x) > - config.radius &&
              (iStar.y - config.position.y) > - config.radius
            ) {
              context.beginPath();
              context.moveTo(iStar.x, iStar.y);
              context.lineTo(jStar.x, jStar.y);
              context.stroke();
              context.closePath();
            }
          }
        }
      }
    }
  };

  this.createStars = function () {
    var length = config.length,
      star,
      i;

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < length; i++) {
      config.stars.push(new Star());
      star = config.stars[i];
    }

    star.line();
    star.animate();
  };

  this.setCanvas = function () {
    canvas.width = config.width;
    canvas.height = config.height;
  };

  this.setContext = function () {
    context.strokeStyle = config.line.color;
    context.lineWidth = config.line.width;
  };

  this.setInitialPosition = function () {
    if (!options || !options.hasOwnProperty('position')) {
      config.position = {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5
      };
    }
  };

  this.loop = function (callback) {
    callback();

    window.requestAnimationFrame(function () {
      this.loop(callback);
    }.bind(this));
  };

  this.init = function () {
    this.setCanvas();
    this.setContext();
    this.setInitialPosition();
    this.loop(this.createStars);
  };
}

module.exports = Constellation;
