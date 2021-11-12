var nav = document.getElementsByClassName("bottom_menubox");
var subBack = document.getElementById("depth_bg");
var subMenu = document.getElementsByClassName("depth");

nav[0].addEventListener('mouseover',mouseIn)
nav[0].addEventListener('mouseout',mouseOut)
subBack.addEventListener('mouseover',mouseIn)
subBack.addEventListener('mouseout',mouseOut)
function mouseIn(){
    subBack.classList.add('show');
    for(var a=0; a<subMenu.length; a++){
        subMenu[a].classList.add('show');
    }
}
function mouseOut(){
    subBack.classList.remove('show');
    for(var b=0; b<subMenu.length; b++){
        subMenu[b].classList.remove('show');
    }
}


let headerWrap = document.querySelector(".header-wrap");
let headerTop = document.querySelector(".header_top");
function scrollHeader() {
    let scrollTop = window.pageYOffset;
    console.log(scrollTop);
    if(scrollTop>190){
        headerWrap.style.position="fixed";
        headerWrap.style.zIndex="999";
        headerWrap.style.height="130px";
        headerTop.style.display="none";
    }
    else{
        headerWrap.style.position="relative";
        headerWrap.style.height="160px";
        headerTop.style.display="block";
    }


    
}
window.addEventListener('scroll', scrollHeader)