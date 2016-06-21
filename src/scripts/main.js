(function ($) {
    "use strict";

    $('#fullpage').fullpage({
        slideSelector: '.full-slide',
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            leavingSection.find('.nav .active').removeClass('active');
            if(direction == 'up'){
                leavingSection.prev().find('.current-link').addClass('active');
            }else{
                leavingSection.next().find('.current-link').addClass('active');
            }

        }
    });
    $('.carousel').carousel();


    $(document).on('ready', function(){
        setTimeout(function(){
            $('body').addClass('loaded');
        }, 300);
       // var offset =  $('#myCarousel').find('.active').find('img').offset().top;
       //  $('.carousel-ind-wrap').css({
       //      top: offset + 340
       //  });
        $('.bxslider').bxSlider();
    });
  $('.find span').on('click',function(){
      $(this).parent().find('input').focus();
      $(this).parent().addClass('active');
  });
    $('.find input').on('blur', function(){
        $('.find').removeClass('active');
    });
$('.nav-up-arrow').on('click', function () {
        $.fn.fullpage.moveSectionUp();
    });
    $('.nav-down-arrow').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
    $('.animated-gif').gifplayer();
    $('.gifplayer-wrapper').on({
        mouseenter: function () {
            $(this).find('.animated-gif').gifplayer('play');
        },
        mouseleave: function () {
            $(this).find('.animated-gif').gifplayer('stop');
        }
    });
})(window.jQuery);
