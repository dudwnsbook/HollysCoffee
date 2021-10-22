const banWrap = document.querySelector(".banner");
const banUl = document.querySelector(".banner_li");
const banCon = document.querySelectorAll(".slideCon");
let banConLen = banCon.length;
// console.log(banConLen)
let conWid=banCon[0].offsetWidth;
let slideSpeed = 4000;
let timeSlide;
let currentIndex;
let count=0;
banUl.style.width=100*(banConLen+2)+"%";
let slidedotBtn = document.querySelectorAll(".item");

// console.log(banCon[0].offsetWidth);

let firstChild = banUl.firstElementChild;
let lastChild = banUl.lastElementChild;
let clonedFirst= firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

banUl.appendChild(clonedFirst);
banUl.insertBefore(clonedLast, banUl.firstElementChild);
function slider(currentIndex){
    banUl.style.left=(-100*currentIndex)+"%";
    banUl.style.transition="1s";

    if(currentIndex==5){
        setTimeout(function() {
            banUl.style.transition = "0ms";
            banUl.style.left=-100+"%";
            
            }, 2000);
            currentIndex=1; 
    }
    

    count=currentIndex;
    
}
function auto(){
    timeSlide =setInterval(function () {
        currentIndex = count % banConLen;
        
        console.log(currentIndex);
        slider(currentIndex);


    }, slideSpeed);
}

// Array.prototype.forEach.call(slidedotBtn,function(e){
//     console.log(e);
// })
for (var a=0; a<slidedotBtn.length; a++ ){
    slidedotBtn[a].addEventListener('click',function(e){
        // e.preventDefault();
        var clickBtn = e.target.dataset.value;
        banUl.style.left=(-100*clickBtn)+"%";
        banUl.style.transition="1s";
        currentIndex=clickBtn+1;
    })
}
banWrap.addEventListener("mouseenter",function(){
    clearInterval(timeSlide);
})
banWrap.addEventListener("mouseleave",function(){
    auto();
})
slider(1);
auto();
