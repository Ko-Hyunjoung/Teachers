;(function(window,document,$,undefined){

    var brando = {
        init:       function(){
            var that = this;

                that.headerFn();
                that.section01Fn();
                that.section234Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();

        },
        headerFn:   function(){
            var winW = $(window).width();
            var url = null;  
            var t=0;  
                //Smooth Scrolling Event : <a href= #해시태그 가져와서 부드럽게 해당 섹션으로 이동
                $('.smooth-btn').on({
                    click:  function(event){
                        event.preventDefault();
                        url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop: $( url ).offset().top  }, 600);
                        $('.mobile-menu').hide();
                        $('.mobile-btn').removeClass('addClose');                        
                    }
                });

                

                $(window).scroll(function(){
                    if( $(window).scrollTop() >= 30 ) {
                        $('#header').addClass('addMobile');
                        $('.goTop').addClass('addGotop');
                    }
                    else{
                        $('#header').removeClass('addMobile');
                        $('.goTop').removeClass('addGotop');
                    }
                });


                $(window).resize(function(){
                    winW = $(window).width();                    
                    if( winW>990 ){
                        $('.mobile-btn').removeClass('addClose');
                        $('.mobile-menu').stop().slideUp(0);
                    }    
                });

                $('.mobile-btn').on({
                    click:  function(event){
                        event.preventDefault();
                        $(this).toggleClass('addClose');
                        if(t==0){
                            t=1;
                            $('.mobile-menu').stop().animate({right:0},400);
                        }
                        else{
                            t=0;
                            $('.mobile-menu').stop().animate({right:-100+'%'},400);
                        }
                        
                        
                    }
                });

        },
        section01Fn: function(){
            var cnt = 0;
            var n = $('.slide').length-1;  //3=4-1
            var winH = 969;
            var imgH = $('.hungry img').height();
            var imgTop = (winH-imgH)/2;

                setTimeout(resizeFn,100);
                function resizeFn(){
                    winH = $(window).height();
                           $('#section01').css({ height:winH });
                           imgH = $('.hungry').height();
                           imgTop = (winH-imgH)/2;
                           $('.hungry').css({ top:imgTop });
                }

                $(window).resize(function(){
                    resizeFn();
                });

                //Smooth Scrolling Event
                $('.arrow-down-btn').on({
                    click:  function(){
                        $('html,body').stop().animate({ scrollTop: $('#section02').offset().top }, 1000);
                    }
                });


                /////////////////////////////////////////////////////////
                // 페이드 인아웃 효과 슬라이드
                /////////////////////////////////////////////////////////
                //메인 다음 슬라이드
                //포인트 : 현재 슬라이드 위에 다음 슬라이드가 서서히 나타난다.
                function mainNextSlideFn(){
                    $('.slide').css({zIndex:1});
                    //현재슬라이드 에]첫번째
                    $('.slide').eq(cnt==0?n:cnt-1).css({zIndex:2});
                    //다음슬라이드 예]두번째
                    $('.slide').eq(cnt).css({zIndex:3}).animate({opacity:0},0).animate({opacity:1},1000); 
                                                    //페이드 인 효과   
                }

                
                //메인 이전 슬라이드
                //포인트 : 현재 슬라이드를 사라지게하면 이전 슬라이드 보인다.
                function mainPrevSlideFn(){
                    $('.slide').css({zIndex:1}).animate({opacity:1},0); //초기화
                    //이전 슬라이드
                    $('.slide').eq(cnt).css({zIndex:2});
                    //현재 슬라이드를 사라지게하면 이전 슬라이드가 보인다.
                    $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},1000);
                }

                //다음 카운트 함수
                function nextCountFn(){
                    cnt++; //0 1 2
                    if(cnt>n){cnt=0;}
                    mainNextSlideFn();
                }
                //이전 카운트 함수
                function prevCountFn(){
                    cnt--; //2 1 0 2 1 0
                    if(cnt<0){cnt=n;}
                    mainPrevSlideFn();
                }


                $('#section01').swipe({
                    swipeLeft:  function(){
                        if( !$('.slide').is(':animated') ){
                            nextCountFn(); //다음카운트
                        }
                    },
                    swipeRight: function(){
                        if( !$('.slide').is(':animated') ){
                            prevCountFn(); //이전카운트
                        }
                    }
                });


                setInterval(nextCountFn,3000);




        },
        section234Fn: function(){

            var winH = $(window).height();  //969
            var sectionH = winH;
            var boxW = $('.content-wrap').width();  //450
            var boxH = boxW * 1.222222222; //550
            var boxTop = (winH-boxH)/2;  // 209.5.=(969-550)/2
            var winW = $(window).width();  //969
            var x = (winW-boxW)/2;

            var rateH3 = 0.096551724;
            var rateH4 = 0.037931034;
            var rateP  = 0.048275862;

            var textW = $('.text-wrap').width();
            var fontSizeH3 = rateH3 * textW;
            var fontSizeH4 = rateH4 * textW;
            var fontSizeP = rateP * textW;


                setTimeout(resizeFn,100);

                function resizeFn(){
                    //창높이기준으로 섹션높이 변경
                    winH = $(window).height();  //969
                    sectionH = winH;  //창너비가 세션높이
                    //박스너비에 따라서 비율로 높이 변경
                    boxW = $('.content-wrap').width();  //450
                    boxH = boxW * 1.222222222; //550   
                    //창너비의 따라서 X(LEFT RIGHT) 위치 가운데 정렬 계산 
                    winW = $(window).width();  //969
                    x = (winW-boxW)/2;                                     
                    // boxTop = (winH-boxH)/2;  // 209.5.=(969-550)/2
                    //박스높이보다 창높이가 작을 때 섹션높이는 박스 높이로 설정 됨.
                    //그러니 박스의 탑값은 창높이랑 박스높이랑 같기 때문에 30으로 설정한다.
                    if( winH < (boxH + 60) ){
                        sectionH = boxH + 60;
                        boxTop = 30;
                    }
                    else{
                        sectionH = winH;
                        boxTop = (winH-boxH)/2;
                    }            


                    //폰트 사이즈 반응형                    
                    textW = $('.text-wrap').width();
                    fontSizeH3 = rateH3 * textW;
                    fontSizeH4 = rateH4 * textW;
                    fontSizeP = rateP * textW;

                    $('.text-wrap h3').css({ fontSize:fontSizeH3 });
                    $('.text-wrap h4').css({ fontSize:fontSizeH4 });
                    $('.text-wrap p').css({ fontSize:fontSizeP });

                    //박스 탑, 박스 높이
                    $('.content-wrap').css({ top:boxTop, height:boxH });
                    
                    //섹션의 높이
                    $('.section234').css({ height:sectionH });                
                    
                    if( winW <= 1170 ){
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:x-15 },300);
                        $('#section03 .content-wrap').stop().animate({ left:x-15 },300);   
                    }
                    else{
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:0 },200);
                        $('#section03 .content-wrap').stop().animate({ left:0 },200);    
                    }




                }
               
                $(window).resize(function(){
                    resizeFn();
                });

        },    
        section05Fn: function(){

        },
        section06Fn: function(){

        },
        section07Fn: function(){

        },
        section08Fn: function(){

        },
        section09Fn: function(){
            var cnt = 25;

            // 모달창 띄우기
            $('.gallery-img-btn').on({
                click:  function(e){
                    e.preventDefault();

                    $('.modal').stop().fadeIn(300);
                    $('html').addClass('addScroll');
                }
            });

            //모달창 닫기
            $('.close-btn, .img-wrap').on({
                click:  function(e){
                    e.preventDefault();

                    $('.modal').stop().fadeOut(300);
                    $('html').removeClass('addScroll');
                }
            });

            //모달창 이미지버튼
            $('.img-btn, .arrow-right-btn').on({
                click:  function(event){
                    event.stopPropagation(); //클릭 이벤트가 부모 영역으로의 전파하는걸 차단함.

                    cnt++; //26 27 .... 32 25
                    console.log(cnt);
                    if(cnt>32){
                        cnt=25;
                    }
                    var txt = '<img src="./img/restaurant-img' + cnt + '.jpg" alt="">';
                        $('.img-btn').html( txt );

                }
            });

            //모달창 이미지버튼
            $('.arrow-left-btn').on({
                click:  function(event){
                    event.preventDefault(); 

                    cnt--; //32 31 ... 25 32 31 ...
                    if(cnt<25){
                        cnt=32;
                    }
                    console.log(cnt);
                    var txt = '<img src="./img/restaurant-img' + cnt + '.jpg" alt="">';

                        $('.img-btn').html( txt );

                }
            });


        },
        section10Fn: function(){

        },
        section11Fn: function(){

        },
        section12Fn: function(){

        },
        section13Fn: function(){

        },        
        section14Fn: function(){

        }        
    };

    brando.init();


})(window,document,jQuery);