var images = document.querySelectorAll(".slide-in");
window.addEventListener("scroll",showEffect);
function showEffect(e){
    images.forEach(function(image){
        var imageTop = image.offsetTop;
        var imageHeight = image.height;
        var scroll = window.scrollY+window.innerHeight;  // by default scrollY gives the scroll of top of changing screen so to shift it to bottom we added screen height
        var halfImageHeight = imageTop+(imageHeight) ;
        var bottomOfImage = image.offsetTop+image.height;
        var isMoreThanHalf = scroll>halfImageHeight ;
        var IsNotPastImage = window.scrollY<bottomOfImage;
        if(isMoreThanHalf && IsNotPastImage ) 
            image.classList.add("show-effect");
        else
            image.classList.remove("show-effect")
    });
    var percent = window.scrollY/(document.body.offsetHeight-window.innerHeight) *100 ;
    document.querySelector(".process-bar").style.width = percent + "%";
}