function line_drawer(x1,y1,x2,y2){
  
    var distance = Math.sqrt((x2-x1)**2  + (y2-y1)**2);
    var mid_x = (x1+x2)/2;
    var mid_y = (y1+y2)/2;
    var slope = Math.atan2(y2-y1,x2-x1) ;
    var body = document.querySelector('body');
    var initial = body.innerHTML;
    //body.innerHTML+='<div class="line" ></div>';
    var line = document.querySelector(".line");
    line.style.top = y1+"px";
    line.style.left = x1+"px";
    line.style.width = distance +"px";
    var angle_degree = slope/3.14 *180;
    line.style.transform = "rotate("+ angle_degree + "deg )";
}
window.addEventListener("mousemove",draw);
function draw(e){
    line_drawer(Math.random()*screen.width,Math.random()*screen.height,e.offsetX,e.offsetY);

}
