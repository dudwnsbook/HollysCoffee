$(() => {
    let wd = $('.protUl>li').width();

    console.log(wd);
    $('.rightBtn').click(function () {

        $('.protUl').animate({
            'margin-left': -wd + 'px'
        }, 700, function () {
            $('.protUl >li').eq(0).appendTo($('.protUl'));
            $('.protUl').css('margin-left', '0px');
            $('.dot_con span').eq(0).appendTo($('.dot_con'));
            $('.dot_con span').removeClass('on');
            $('.dot_con span').eq(0).addClass('on')
        }); 
    });
    $('.leftBtn').click(function () {
        $('.dot_con span').eq(-1).prependTo($('.dot_con'));
        $('.dot_con span').removeClass('on');
        $('.dot_con span').eq(1).addClass('on')

        $('.protUl >li').eq(-1).prependTo($('.protUl'));
        $('.protUl').css('margin-left',-wd+'px');
        $('.protUl').animate({'margin-left':'0px'},700);

    });
    function numAni(num){
        for(let x = 0; x < num+2; x++){
            $('.dot_con span').eq(0).appendTo($('.dot_con'));
            $('.slide > li').eq(0).appendTo($('.slide'));
        }
       nextAni() 
    }
   
    $('.next').click(function(){
        clearInterval(intv);/*자동동작 멈추고*/
        nextAni();/*nextAni() 함수 실행 */
        intv=setInterval(function(){//자동 반복  함수
            nextAni()
        },3000);
    });
    $('.prev').click(function(){
        clearInterval(intv);
        prevAni();
        intv=setInterval(function(){//자동 반복  함수
            nextAni()
        },3000);
    });
    $('.dot_con span').click(function(){
        let btnNum=$(this).index();
        clearInterval(intv);
        numAni(btnNum);
    })
});