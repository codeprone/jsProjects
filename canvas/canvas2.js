var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var innerHeight=window.innerHeight;
var innerWidth=window.innerWidth;
var mouse = {};
window.addEventListener("mousemove",function(event){
    mouse.x=event.clientX;
    mouse.y=event.clientY;
})

class circle{
    constructor(){
        this.radius = Math.round(Math.random()*5 + 10);
        this.x = undefined;
        this.y = undefined;
        this.dr=1;
        c.strokeStyle = "rgba(" + Math.random()*256 + "," + Math.random()*256 +"," + Math.random()*256 + "," + Math.random() + ")";
    }
    create(){
        c.beginPath();
        c.arc(mouse.x+(Math.random()*50),mouse.y+(Math.random()*50),this.radius,0,Math.PI*2,true);
        c.stroke();
    }
    bubble(){
            this.radius+=this.dr;
        if(this.radius==60)
            this.dr = -this.dr;
        else if(this.radius==2)
            this.dr = -this.dr;
    }
}
var circles=[],n=50;
for(var i=0;i<n;i++)
    circles[i]=new circle();
function recursion(){
    requestAnimationFrame(recursion);
    c.clearRect(0,0,innerWidth,innerHeight);
    circles.forEach(circle => {
        circle.create();
        circle.bubble();
    })
}
recursion();