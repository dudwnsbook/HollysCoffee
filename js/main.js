$(document).ready(function() {
//    /* 1 */
//    $(window).scroll( function(){
//        /* 2 */
//        $('.thr_2').each( function(i){
//            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height();
//            /* 3 */
//            if( bottom_of_window > bottom_of_object/2 ){
//                $(this).animate({'opacity':'1'},500);
//            }
//        }); 
//    });
    
    
    var wd=parseInt($(".banner").width());
//    //내가 보고 있는 컴퓨터 화면 크기를 정수형으로 바꿔와서 변수로 저장해라
//    
//90%이라는 너비를 가진 것을 문자열로 되있으니 정수로 바꾸는 함수
    $(".btn_box li").click(function(){
        var idx=$(this).index(); 
//        //내 자신(li)의 index(0,1,2,3,4) 순서.. 
//        //다섯번째 li가 4다 .. 변수에 저장한거니 변수가
//        //계속 바뀐다.
//        
        $(".banner_li").not(":animated").animate({"margin-left":wd*idx*-1+"px"},600);
        //animate({"속성":속성값},애니메이션시간)
        //ex) 250 * 0* - 1 = 0 px
        //ex) 250 * 1* - 1 =-250px;
        //not(":animated") 현재 애니메이트된 것을 제외하고
        $(".btn_box li").removeClass("on");
        //on을 제거
        $(this).addClass("on");
    });
    

    
    
  //선택자.시작(함수)
    
});
  