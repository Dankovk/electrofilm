(function ($) {
    "use strict";
    var slider;
    $(document).on('ready', function(){

         slider = $('.bxslider').bxSlider({
            auto: true,
            pause:5000,
            startSlide: findMiddleSlide()
        });

        function findMiddleSlide(){
            var slides = $('li.slide');
            var slideLength = slides.length;
            var startSlide = slideLength / 2 - 1;
            return Math.round(startSlide);
        }
    });

    $('#fullpage').fullpage({
        slideSelector: '.full-slide',
        anchors:[ 'directors','reviews','movies','mainPage', 'about',  'events', 'contacts'],
        onLeave: function(index, nextIndex, direction){
            //leavingSection.find('.nav .active').removeClass('active');
            $('.find input').blur();
            var sections = $('.section');
            if($(sections[nextIndex-1]).hasClass('main_screen')){
                slider.startAuto();
            }else{
                slider.stopAuto();
            }
        }
    });


    $('.carousel').carousel();


    $(document).on('ready', function(){

        setTimeout(function(){
            $('body').addClass('loaded');
        }, 0);





        $('.find input').val('');
        $('.section.active .current-link').addClass('active');

    });

    $('.find span').on('click',function(){
         $(this).parent().find('input').focus();
         $(this).parent().addClass('active');
     });

    $('.find input').on('blur', function(){
        $('.find').removeClass('active');
    });

    $('.find input').on('focus', function(){
        $('.find').addClass('active');
    });

    $('.nav-up-arrow').on('click', function () {
        $.fn.fullpage.moveSectionUp();
    });

    $('.nav-down-arrow').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });


    $('.animated-gif').gifplayer();


    $('.animated-gif').gifplayer('stop');

    $('.gifplayer-wrapper').on({
        mouseenter: function () {
            $(this).find('.animated-gif').gifplayer('play');
        },
        mouseleave: function () {
            $(this).find('.animated-gif').gifplayer('stop');
        }
    });

    var url = document.location.toString();
    if (url.match('#')) {
        $('.film-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }

// Change hash for page-reload
    $('.film-tabs ul a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    })
})(window.jQuery);


