var slideWrap = document.getElementsByClassName('banner');
var slideUl = document.getElementsByClassName("banner_li");
var slideCou = document.getElementsByClassName('slideCon');


var bannLen = slideCou.length;
var leftBtn = document.querySelector(".leftBtn");
var rightBtn = document.querySelector(".rightBtn");
var count=0;
var currentIndex;
var prevIndex;
var timeSlide;
var btn = document.getElementsByClassName('item');
var btnLen = btn.length;


//function FadeSliderBtn(obj2){
//    slideCou[obj2].classList.add('ViewImg');
//    btn[count].classList.add('on');
//    if(obj2!=count){
//         slideCou[count].classList.remove('ViewImg');
//        btn[count].classList.remove('on');
//    }
//    count=obj2;
//}

function FadeSlider(obj) {
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
    
    // slideCou[obj].classList.add('ViewImg');
    // prevIndex = count % bannLen;
    // slideCou[prevIndex].classList.remove( 'ViewImg');
    
    count=obj;

//    autoSlide(count);
}
for (var a = 0; a<btnLen; a++){
    btn[a].addEventListener('click',function(e){
        
        
        currentIndex=e.target.getAttribute("data-value")-1;
        // clearInterval(timeSlide); 
        console.log(currentIndex);
        FadeSlider(currentIndex);
        
    })
 }
function autoSlide() {
    timeSlide =setInterval(function () {
        currentIndex = (count+1) % bannLen;
        
        console.log(currentIndex);
        FadeSlider(currentIndex);


    }, 4000);
}

leftBtn.addEventListener("click",function(){
    if (currentIndex > 0) {
        currentIndex=currentIndex-1;
        
        
    } else {
        currentIndex=bannLen-1;
        
    }
    FadeSlider(currentIndex);
})
rightBtn.addEventListener("click",function(){
    if(currentIndex<3){
        currentIndex=currentIndex+1;
    }
    else{
        currentIndex=0;
    }
    FadeSlider(currentIndex);
})


autoSlide();

slideWrap[0].addEventListener('mouseenter', function () {
    clearInterval(timeSlide); 
    console.log("??")
});
slideWrap[0].addEventListener('mouseleave', function () {
    autoSlide();
})