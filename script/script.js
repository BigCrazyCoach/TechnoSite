$(document).ready(function(){
    $('.info-header').css('opacity', '1');
    $('.header__burger').click(function(){
        $('.header__burger').toggleClass('active');
        $('.header__nav').toggleClass('active');
        });
        function ibg(){

            let ibg=document.querySelectorAll(".ibg");
            for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
            }
            }
            
            ibg();    

    
    
    $('.link-item__nav_slide').click(function(e){
        e.preventDefault()
    $('.link-item__nav').slideToggle();
    
    });
    $(document).ready(function() {
        checkMedia(); // запускаем при открытии страницы
        $(window).on('resize', function() { // запускаем при каждом ресайзе окна
          checkMedia();
            });
    });
      
        function checkMedia() {
          if (window.matchMedia('(max-width: 800px)').matches) {
            $('.link-item__nav').css('display', 'none');
            }else{
                $('.link-item__nav').css('display', 'block');
            }
        }


});