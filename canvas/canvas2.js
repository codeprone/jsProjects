var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var innerHeight=window.innerHeight;
var innerWidth=window.innerWidth;
function randomInt(min,max){
    return Math.floor((Math.random()*(max-min) + min));

}

var circles = [];
var mouse = {};
window.addEventListener("mousemove",function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    
    
})
var key = false;
window.addEventListener("mousedown",function(){key = !key;})
window.addEventListener("mouseup",function(){key = !key;})

var array = ["#c51244","#1a509e","#3183B3","#6EB2C0","red","FFFFFF","#123abc"];

class circle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = randomInt(2,4);
        this.dx = randomInt(-2,2);
        this.dy = randomInt(-2,2);
        this.dr=1;
        this.color = array[randomInt(0,6)];
    }
    create(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        c.strokeStyle = this.color;
        c.stroke();
    }
    bubble(){
        this.radius+=this.dr;
        this.x+=this.dx;
        this.y+=this.dy;
        if(this.radius>=30)
            this.dr = 0;
     }
}

function pop(i){
    // if (circles.length<10) return; 
    var distance = Math.sqrt((circles[i].x-mouse.x)**2 + (circles[i].y-mouse.y)**2 )
    if(distance > 600 )
        circles.pop(i);
    return;
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    if(key)
         circles.push(new circle());
    for(var i=0;i<circles.length;i++){
        circles[i].create();
        circles[i].bubble();
        pop(i);
    }

    //console.log(key); there is an issue in limiting the bubbles
}
animate();