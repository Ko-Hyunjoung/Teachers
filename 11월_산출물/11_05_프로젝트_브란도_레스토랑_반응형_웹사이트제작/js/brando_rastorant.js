;(function(window,document,$,undefined){

    var brando = {
        init:       function(){
            var that = this;

                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.section03Fn();
                that.section04Fn();
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
            //섹션1의 높이는 창(Window) 높이(Height)로 설정
            //반응형 설정 $(window).scroll();
            //반응형 설정 $(window).resize();
            var winH = 969;
            var imgH = $('.hungry img').height();
            var imgTop = (winH-imgH)/2;
            //탑값 = (창높이-로고이미지높이)/2;
            //imgTop = (winH-imgH)/2


                setTimeout(resizeFn,100);
                function resizeFn(){
                    winH = $(window).height();
                           $('#section01, #section02, #section03, #section04').css({ height:winH });
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


        },
        section02Fn: function(){
            var txtBoxW = 0;
            var fontRateH3 = 0.082758621;
            var fontRateH4 = 0.037931034;
            var fontRateP  = 0.048275862;
            var fontSizeH3 = 0;
            var fontSizeH4 = 0;
            var fontSizeP  = 0;
            var boxHRate = 1.222222222;
            var boxW = 450;
            var boxH = boxW*boxHRate;
            var winH = $(window).height();
            var boxT = (winH-boxH)/2;           
            var winW = $(window).width();
            var boxR = (winW-boxW)/2;
            var boxL = (winW-boxW)/2;

                setTimeout(resizeFn,100);

                function resizeFn(){
                    txtBoxW = $('.content-wrap').width();
                    boxW = $('.content').width();
                    boxH = boxW * boxHRate;
                    fontSizeH3 = txtBoxW * fontRateH3;
                    fontSizeH4 = txtBoxW * fontRateH4;
                    fontSizeP  = txtBoxW * fontRateP;
                    winH = $(window).height();
                    boxT = (winH-boxH)/2;
                    winW = $(window).width();
                    boxR = (winW-boxW)/2;
                    boxL = (winW-boxW)/2;
                    console.log('창너비 ', winW );
                    console.log('박스너비 ', boxW );
                    console.log('박스R ', boxR );
                    console.log('박스L ', boxL );

                        $('.content-wrap h3').css({fontSize:fontSizeH3});
                        $('.content-wrap h4').css({fontSize:fontSizeH4});
                        $('.content-wrap p') .css({fontSize:fontSizeP});                      
                        $('.content').css({height:boxH,top:boxT});



                        //창너비가 1170이하이면 실행
                        if( winW<=1170 ){
                            $('.content24').stop().animate({right:boxR},300);
                            $('.content3').stop().animate({left:boxL},300);
                        }
                        else{
                            $('.content24').stop().animate({right:0},300);;
                            $('.content3').stop().animate({left:0},300);
                        }

                }    

                $(window).resize(function(){
                    resizeFn();                    
                });


        },
        section03Fn: function(){

        },
        section04Fn: function(){

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