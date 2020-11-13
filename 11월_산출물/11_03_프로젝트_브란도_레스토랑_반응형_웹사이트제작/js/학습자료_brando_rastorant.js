;(function(window,document,$,undefined){
//프로퍼티(속성):속성값(value)   //프로퍼티에 FUNCTION(){} 함수가 설정되면
//프로퍼티(속성): function(){}  //메서드로 전환  init();

    var brando = {
        a:0,  
        b:'on',
        c:true,
        init:       function(){
            brando.headerFn();
        },
        headerFn:   function(){
            // console.log( brando.a, brando.b, brando.c );
            // console.log( this.a, this.b, this.c );
            var that = this;
            console.log( that.a, that.b, that.c );


        },
        section01Fn: function(){

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

        }        
    };

    brando.init();


})(window,document,jQuery);