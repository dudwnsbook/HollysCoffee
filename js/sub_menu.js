var nav = document.getElementsByClassName("navMenu");
var subBack = document.getElementById("subBg");
var subMenu = document.getElementsByClassName("sub");

nav[0].addEventListener('mouseover',mouseIn)
nav[0].addEventListener('mouseout',mouseOut)
subBack.addEventListener('mouseover',mouseIn)
subBack.addEventListener('mouseout',mouseOut)
function mouseIn(){
    subBack.classList.add('subBg');
    for(var a=0; a<subMenu.length; a++){
        subMenu[a].classList.add('show');
    }
}
function mouseOut(){
    subBack.classList.remove('subBg');
    for(var b=0; b<subMenu.length; b++){
        subMenu[b].classList.remove('show');
    }
}

        // $(document).ready(function(){
        //     var $nav=$('.navMenu');
        //     var $sub=$('#sub_bg');

            
        //     $nav.hover(function(){
        //         $sub.stop().slideDown();
        //         $('#subBg').addClass('subBg');
        //     },function(){
        //         $sub.stop().slideUp();
        //         $('#subBg').removeClass('subBg');
        //     });
    
        // });