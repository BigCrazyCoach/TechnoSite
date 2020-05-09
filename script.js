$(document).ready(function(){
    $('.hat__burger').click(function(){
        $('.hat__burger').toggleClass('active');
        $('.hat__menu').toggleClass('active');
        });
        
        $('.newslatter__nav_links-button').click(function(e){
            e.preventDefault()
        $('.newslatter__nav_links').slideToggle();
        
        });
        
        $(document).ready(function() {
            checkMedia(); // запускаем при открытии страницы
            $(window).on('resize', function() { // запускаем при каждом ресайзе окна
              checkMedia();
                });
        });
          
            function checkMedia() {
              if (window.matchMedia('(max-width: 767px)').matches) {
                $('.newslatter__nav_links').css('display', 'none');
                }else{
                    $('.newslatter__nav_links').css('display', 'block');
                }
            }
    
        $('.boost__coorusel').slick({
        arrows : false ,
        dots : true,
        autoplay: true,
        autoplaySpeed : 1000,
        adaptiveHeight: true,
        
      });
    








});