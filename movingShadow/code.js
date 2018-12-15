var screen = document.querySelector(".main");
var box = screen.querySelector('p');
screen.addEventListener('mousemove',modify_shadow);
function modify_shadow(e){
  var x = e.offsetX;
  var y = e.offsetY;

  if(this != e.target){
    y+=box.offsetHeight;
    x+=box.offsetWidth;
    }

    var shadow_x = (x / window.innerWidth * 100) - 50;
    var shadow_y = (y / window.innerHeight * 100) - 50;
    console.log(shadow_x.shadow_y);
    box.style.textShadow= shadow_x + "px " + shadow_y + "px 1px white";
}