

var slideWrap=document.getElementsByClassName('banner');
var slideCou = document.getElementsByClassName('slideCon');
console.log(slideCou);

var bannLen = slideCou.length;
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
    slideCou[obj].classList.add('ViewImg');
    prevIndex = count % bannLen;
    slideCou[prevIndex].classList.remove( 'ViewImg');
    count=obj;

//    autoSlide(count);
}

function autoSlide() {
    timeSlide =setInterval(function () {
        currentIndex = (count+1) % bannLen;
        
        console.log(currentIndex);
        FadeSlider(currentIndex);


    }, 4000);
}



//for (var a = 0; a<btnLen; a++){
//    btn[a].addEventListener('click',function(e){
//        
//        
//        var btnIndex=e.target.innerText;
//
//        console.log(btnIndex);
//        FadeSlider(btnIndex);
//        
//    })
//}
autoSlide();

slideWrap[0].addEventListener('mouseenter', function () {
    clearInterval(timeSlide); 
});
slideWrap[0].addEventListener('mouseleave', function () {
    autoSlide();
})