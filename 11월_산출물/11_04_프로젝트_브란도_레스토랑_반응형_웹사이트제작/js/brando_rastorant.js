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
                    }
                    else{
                        $('#header').removeClass('addMobile');
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
                        $('.mobile-menu').stop().slideToggle(300);
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