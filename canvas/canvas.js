var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var innerHeight=window.innerHeight;
var innerWidth=window.innerWidth;
var mouse={};
window.addEventListener("mousemove",function(e){
    mouse.x=e.clientX;
    mouse.y=e.clientY;
    });


class circle {
    constructor() {
        this.temp=this.radius = Math.random()*5 + 2;
        this.x = Math.random()*(innerWidth-2*this.radius) + this.radius;
        this.y = Math.random()*(innerHeight-2*this.radius) + this.radius;
        this.dx = (Math.random()- 0.5)*4;
        this.dy = (Math.random()- 0.5)*4;
        this.array = ["#abcdef","#123456","#aabbcc","#ddeeff","red","brown","#123abc"];
    }
    create(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        c.fillStyle = this.array[Math.round(Math.random()*7 - 1)];
        c.strokeStyle = "black";
        c.stroke();
        c.fill();
    }
    move(){
        if(this.x>=(innerWidth-this.radius) || this.x<=this.radius)
            this.dx= -this.dx;
        if(this.y>=(innerHeight-this.radius) || this.y<=this.radius)
            this.dy= -this.dy;
        this.x+=this.dx;
        this.y+=this.dy;
    }
    response(){
        if(Math.sqrt((this.x-mouse.x)**2 + (this.y-mouse.y)**2) < 50 && this.radius<50)
            this.radius+=2;
        else if(this.radius > this.temp)
            this.radius-=2;
    }
};
var n=600;
var circles=[];
for(var i=0;i<n;i++)
    circles[i]=new circle();
function recursion(){
    requestAnimationFrame(recursion);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<n;i++){
        circles[i].create();
        circles[i].move();
        circles[i].response();
        }
    }
recursion();