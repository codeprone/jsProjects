var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var innerHeight = window.innerHeight;
var innerWidth = window.innerWidth;
function random(min, max) {
    return (Math.random() * (max - min) + min);
}
var array = ["#c51244", "#1a509e", "#3183B3", "#6EB2C0", "red", "FFFFFF", "#123abc"];
function randonColor() {
    return array[Math.floor(random(0, 6))];
}
var mouse = {
    y: innerHeight / 2,
    x: innerWidth / 2
};
window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    //particles.moveToCursor();
})
class particle {
    constructor() {
        this.orbitRadius = 100;
        this.radius = 3;
        this.x = innerWidth / 2 + random(15, 50);
        this.y = innerHeight / 2 + random(15, 50);
        this.speed = random(2, 4);
        this.color = randonColor();
        this.speed = 1;
        this.velocity = .03;
        this.angle = 0;
        this.distance = 0;

    }
    create() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.fillStyle = this.color;
        c.fill();

    }
    moveToCursor() {
        this.angleBetween = Math.atan2(mouse.y - this.y, mouse.x - this.x);
        if (isNaN(this.angleBetween)) return;
        this.dx = this.speed * Math.cos(this.angleBetween);
        this.dy = this.speed * Math.sin(this.angleBetween);
        this.x += this.dx;
        this.y += this.dy;
        this.distance = Math.sqrt((this.x - mouse.x) ** 2 + (this.y - mouse.y) ** 2);
        console.log("now m running");
    }
    whirl() {
        this.x = mouse.x + Math.cos(this.angle) * this.orbitRadius;
        this.y = mouse.y + Math.sin(this.angle) * this.orbitRadius;
        this.angle += this.velocity;

    }

}
var particles = [], n = 1;
for (var i = 0; i < n; i++)
    particles[i] = new particle();
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(255,255,255,0.03)";
    c.fillRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < n; i++) {
        particles[i].create();
        if (particles[i].distance < 50)
            particles[i].whirl();
        else
            particles[i].moveToCursor();
        
    }
    //console.log(particles)
}
animate();

