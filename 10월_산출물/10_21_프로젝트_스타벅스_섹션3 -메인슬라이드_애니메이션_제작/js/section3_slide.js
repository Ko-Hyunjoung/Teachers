;(function(window,document,$){

    //메인 슬라이드 롤링 애니메이션 
    //1. 카운트 변수 설정  전역변수 Global 변수
    var cnt=0; 
    var babo=0;
    var setId=0;


    //2-1. 다음(next) 슬라이드 카운트 이름있는(선억적) 함수
        function nextSlideCountFn(){
            cnt++;
            mainSlideFn();
            //증가된 카운트 변수 메인 슬라이드 함수에 전달
            //메인 함수 호출();
        }

    //2-2. 이전(prev) 슬라이드 카운트 이름있는(선억적) 함수
        function prevSlideCountFn(){
            cnt--;
            mainSlideFn();
            //증가된 카운트 변수 메인 슬라이드 함수에 전달
            //메인 함수 호출();
        }
    
    //3. 메인슬라이드함수 만들기 애니메이션 카운트 변수 사용
        function mainSlideFn(){
            $('.slide-wrap').stop().animate({ left:-829*cnt },600, function(){
                if(cnt>3){ //총 슬라이드 4개 0 1 2 3(4-1)
                    cnt=0; //첫번째 슬라이드
                }
                if(cnt<0){ //첫번째 미만이면 -1이면
                    cnt=3; //마지막 슬라이드(4개)
                }
                $('.slide-wrap').stop().animate({ left:-829*cnt },0);//초기화 리셋               
            });
            
            pageBtnFn(cnt); //페이지버튼(전달인자)
        }
    
    //4-1. 다음 화살 버튼 클릭 이벤트 - 다음 슬라이드 카운트 함수 호출
        $('.next-btn').on({
            click:  function(){ //이벤트 리스너
                //애니메이션이 구동중에는 클릭은 못하게 막는 알고리즘
                
                console.log( $('.slide-wrap').is(':animated') );
                

                //애니메이션이 안될때만 실행
                // if( $('.slide-wrap').is(':animated')==false ){
                //     nextSlideCountFn(); //이벤트 핸들러
                // }
                
                if( $('.slide-wrap').is(':animated')!=true ){
                    nextSlideCountFn(); //이벤트 핸들러
                }
                
                // if( !$('.slide-wrap').is(':animated') ){
                //     nextSlideCountFn(); //이벤트 핸들러
                // }
                
                clearInterval(setId); //버튼 클릭시 타이머 중지
                $('.pause-play-btn').addClass('addPlay');
            }
        });

    
    //4-2. 이전 화살 버튼 클릭 이벤트 - 이전 슬라이드 카운트 함수 호출
        $('.prev-btn').on({
            click:  function(){
                //애니메이션이 안될때만 클릭하여 함수 호출
                if( !$('.slide-wrap').is(':animated') ){
                    prevSlideCountFn();
                }

                clearInterval(setId); //버튼 클릭시 타이머 중지
                $('.pause-play-btn').addClass('addPlay');
            }
        });


    //5   인디게이터(4개) 버튼 클릭 이벤트 - 요소 객체 배열처리 each() 메서드
    //    알고리즘 구현
    //    첫번째를 클릭하면 0 인덱스번호  : 슬라이드번호    -819*index    
    //    두번째를 클릭하면 1 인덱스번호  : 슬라이드번호    -819*index           
    //    세번째를 클릭하면 2 인덱스번호  : 슬라이드번호    -819*index          
    //    네번째를 클릭하면 3 인덱스번호  : 슬라이드번호    -819*index         
    /*
    $('.page-btn').eq(0).on({
        click:  function(){
            // 메인함수 호출
            cnt = 0;
            mainSlideFn();
        }
    });
  
    $('.page-btn').eq(1).on({
        click:  function(){
            // 메인함수 호출
            cnt = 1;
            mainSlideFn();
        }
    });

  
    $('.page-btn').eq(2).on({
        click:  function(){
            // 메인함수 호출
            cnt = 2;
            mainSlideFn();
        }
    });

  
    $('.page-btn').eq(3).on({
        click:  function(){
            // 메인함수 호출
            cnt = 3;
            mainSlideFn();
        }
    });

    */
    //6. each() 메서드로 .page-btn 버튼의 요소를 배열처리하여 인덱스번호를 반환(출력)한다.
    $('.page-btn').each(function(index){
        $(this).on({
            click:  function(){
                cnt=index;     //카운트 번호를 인덱스번호 저장
                mainSlideFn(); //메인슬라이드 호출
                clearInterval(setId); //버튼 클릭시 타이머 중지
                $('.pause-play-btn').addClass('addPlay');
            }
        });
    });

    //7. 인디게이터(페이지버튼)에 표시(배경이미지 녹색)-addClass
    function pageBtnFn(z){ 
        //console.log(z); //1 2 3 4 1 2 3 4 1 2 3 4...
        z>3 ? z=0 : z;
        //console.log(z); //1 2 3 0 1 2 3 0 1 2 3....
         $('.page-btn').removeClass('addPagebtn');
        $('.page-btn').eq(z).addClass('addPagebtn');
    }

    //8. 타이머 3초 간격 다음슬라이드 카운트 함수 호출
   function timerFn(){
     setId = setInterval( nextSlideCountFn, 3000);
     console.log(setId); //정수 0 1 2 3 4 5....15 .. 30
   }

   timerFn();  //로딩시 타이머 호출 3초 후에 타이머 실행

   //9. 타이머 일시중지 버튼 클릭 이벤트
   /*
   var t=0;
   $('.pause-play-btn').on({
       click:   function(){
            if(t==0){
                t=1;
                $(this).addClass('addPlay');  //플레이 이미지로 변경
                clearInterval(setId);  //중지
            }
            else if(t==1){
                t=0;
                $(this).removeClass('addPlay');  //정지 이미지로 변경 
                timerFn();  //타이머 재실행
            }
       }
   });
   */

   //hasClass('addPlay') 있으면 true 없는 false;   
   //클래스가 있으면  중지상태임, ▶
   //클래스가 없으면  플레이상태임, ||
   $('.pause-play-btn').on({
       click:   function(){
           var x = null;
               x = $(this).hasClass('addPlay'); //true || false
               if( x==false ){ //현재 재생 중인 상태이면
                    clearInterval(setId);
                    $(this).addClass('addPlay'); //▶
               }
               else if( x==true ){ //현재 중지상태임 ▶ 다시 플레이
                    nextSlideCountFn(); //++
                    timerFn();  //플레이
                    $(this).removeClass('addPlay'); //||
               }
       }
   });




})(window,document,jQuery);