(function($){

    //마우스 이벤트
    //메인버튼 이벤트 
    //마우스 클릭 이벤트 동작
    //마우스 오버시 동작
    //키보드 접근시 동작 
    // $("선택자").on({}); 
    // $("선택자").one({}); 
    // $("선택자").off({}); 

    $(".main-btn").on({
        click:function(){  //키보드 엔터
           
        },
        mouseenter:function(){
            //버튼효과 배경 색상 글자
            $(".main-btn").removeClass("addMainbtn");  //모든 메인버튼 추가된 클래스 삭제
            $(this).addClass("addMainbtn");  //현재(this)만 추가 클래스 (addClass())
            //서브메뉴의 슬라이드 다운 업 효과(애니메이션)         
            $(".sub").slideUp(0);
            $(this).next().stop().slideDown(500);
        },
       
            
        },
        focusin:function(){
            $(".main-btn").removeClass("addMainbtn");  //모든 메인버튼 추가된 클래스 삭제
            $(this).addClass("addMainbtn");  //현재(this)만 추가 클래스 (addClass())

        },
        
    });

    //마우스가 #nav를 올라가면 mouseenter = Mouseover
    //마우스가 #nav를 벗어나면 mouseleave = Mouseout
    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop.slideUp(500);
            $(".main-btn").removeClass("addMainbtn");
        }
    });

    //메인 버튼 클릭 링크 이동
    //each메소드 활용 버튼 배열 처리
    $(".main-btn").each();
    $(".main-btn").each(function(index){
        console.log(index);
        
    });

    $(".main-btn").eq(0).on({
        click:function(){
            alert("1");
            location.href="www"
        }
    });
    $(".main-btn").eq(1).on({
        cick:function(){
        alert("2");
        }
    });
    $(".main-btn").eq(2).on({
        cick:function(){
        alert("3");
    }
    });
    $(".main-btn").eq(3).on({
        cick:function(){
        alert("4");
        }
    });
    $(".main-btn").eq(4).on({
        cick:function(){
            alert("5");
        }
        
       
    });
    $(".main-btn").eq(5).on({
        cick:function(){
            alert("6");
        }
    });
  

})(jQuery);