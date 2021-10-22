  var now_img, next_img;
//현재 배너 다음 배너 변수 지정

    function fade_change(){
        now_img=$(".banner_li li:eq(0)");  //첫번째(인덱스 0번값 li)를 현재 배너 변수 지정
        next_img=$(".banner_li li:eq(1)");
        
        
        //다음 이미지때 bannerFirst라는 클래스에다가 투명도 0을 줘라 
        //.animate() 로 1초동안 불투명도값이 1이 된다.
        
        next_img.addClass("bannerFirst").css("opacity",0).animate({"opacity":1},1000,function(){
            $(".banner_li").append(now_img); //현재 배너를 부모요소(배너박스ul)에다가 확장해서 넣어라
                                             //그러면 인덱스가 2가 될 것이고 인덱스 1은 0번째로 변환
            
            now_img.removeClass("bannerFirst");//bannerFirst 클래스의 z-index 값을 지워서 0으로 바꾸자.
        });
    }
    var timer = setInterval("fade_change()",5000);
    
    $(".banner_li").hover(function(){       // mouse enter 시 
     clearInterval(timer);
 }, function(){                                  // mouse leave 시
     timer = setInterval("fade_change()",5000);
 });