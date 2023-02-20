$( document ).ready(function() {
    AOS.init();
    
    new ActiveMenuLink(".navbar",{
        itemTag: "li",
        activeClass: "active",
        scrollOffset: -200,
        scrollDuration: 200,
        ease: "out-circ",
        headerHeight: null,
        default: null,
        showHash: true
    
    });
    
    //var isIphone = navigator.userAgent.indexOf('iPhone') >= 0;
    //if (isIphone) {
        //document.querySelector('video').pause();
        //setTimeout(function(){
        //    document.querySelector('video').play();
       // }, 1000);        
    //}
    
    function textAnimeted(){
        var  text;
        const getURL = window.location.href;
        if(getURL.includes("/en")){
           text = ["GREAT BUSINESS", "ONE SPIRIT"]; 
        }else{
           text = ["GRANDES NEGÓCIOS", "UM SÓ ESPÍRITO"];  
        }

        var counter = 0;
        const elem = $(".text-animated");
        setInterval(change, 2500);
        function change() {
            elem.fadeOut(function(){
                elem.html(text[counter]);
                counter++;
                if(counter >= text.length) { counter = 0; }
                elem.fadeIn();
            });
        }
    }
    
    document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {
            setTimeout(function(){
                $('.fakeLoader').hide();
                $('#body-background').hide();  
                textAnimeted();
                document.querySelectorAll("#my-scrollbar")[0].style.overflowY = "auto";
            }, 1800);            
        }
    });
    //var myTime = setInterval(function (){
        //const video =  document.querySelectorAll('#yasuke-video')[0];
        //if(video.readyState === 4){
          //  console.log('yesssss')
         //   setTimeout(function(){
         //       video.play();
        //        $('.fakeLoader').hide();
        //        $('#body-background').hide();  
        //        textAnimeted();
        //        document.querySelectorAll("#my-scrollbar")[0].style.overflowY = "auto";
       //     }, 1500); 
       //     clearInterval(myTime);
       // }    
  //  }, 1000);

    
    console.log("%c©2022 Yasuke Investimentos.","color: red; font-size: 25px");
    console.log("%cAll rights reserved.","color: red; font-size: 16px");

    function scrollBanner() {
        $(document).scroll(function() {
            var scrollPos = $(this).scrollTop();
            $('.onscrolling-hidde').css({
                'opacity': 1 - (scrollPos / 510)
            });
        });
    }
    
    scrollBanner();
});

