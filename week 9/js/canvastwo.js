 var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function Circle(x,y, dy, dx) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.radius = radius; 

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

var circle = new Circle(200, 200, 3, 3, 30);

var x = Math.random() * innerWidth;
var dx = (Math.random() - 0.5) * 8;

var y = Math.random() * innerHeight;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
animate();
