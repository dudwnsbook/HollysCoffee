var slideWrap = document.getElementsByClassName('banner-wrap');
var slideUl = document.getElementsByClassName("slider-box");
var slideCou = document.getElementsByClassName('slider-con');


var bannLen = slideCou.length;
var leftBtn = document.querySelector(".leftBtn");
var rightBtn = document.querySelector(".rightBtn");
var count=0;
var currentIndex;
var prevIndex;
var timeSlide;
var btn = document.getElementsByClassName('dot');
var btnLen = btn.length;




function bannerSlider(obj) {
    slideUl[0].style.left=(-100 * obj) +"%";
    slideUl[0].style.transition="1s";
    if(obj==4){
        slideUl[0].style.transition="0.1s";
    }
    for(var b = 0; b<btnLen; b++){
        if(b==obj){
            btn[obj].classList.add("on");
        }
        else{
            btn[b].classList.remove("on");
        }
    }
    
 
    
    count=obj;

}
for (var a = 0; a<btnLen; a++){
    btn[a].addEventListener('click',function(e){
        
        
        currentIndex=e.target.getAttribute("data-value")-1;
     
        bannerSlider(currentIndex);
        
    })
 }
function autoSlide() {
    timeSlide =setInterval(function () {
        currentIndex = (count+1) % bannLen;
        
        bannerSlider(currentIndex);


    }, 4000);
}

leftBtn.addEventListener("click",function(){
    if (currentIndex > 0) {
        currentIndex=currentIndex-1;
        
        
    } else {
        currentIndex=bannLen-1;
        
    }
    bannerSlider(currentIndex);
})
rightBtn.addEventListener("click",function(){
    if(currentIndex<3){
        currentIndex=currentIndex+1;
    }
    else{
        currentIndex=0;
    }
    bannerSlider(currentIndex);
})


autoSlide();

slideWrap[0].addEventListener('mouseenter', function () {
    clearInterval(timeSlide); 

});
slideWrap[0].addEventListener('mouseleave', function () {
    autoSlide();
})