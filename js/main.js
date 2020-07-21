
window.addEventListener('DOMContentLoaded', function(){
  $('.hamburger').on('click', function () {
   $(this).toggleClass('open');
   $('.sm-nav').toggleClass('open');
  });
  $('.close').on('click', function() {
      $('.sm-nav').removeClass('open');
  });
 });

window.addEventListener('DOMContentLoaded', function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerGroup: 1,
        slidesPerView: 1.33,
        spaceBetween: 20,
        breakpoints: {
           
            768: {
                spaceBetween: 20,
                slidesPerView: 3
              },
            1226: {
              spaceBetween: 40,
              slidesPerView: 2.8,
            }
          },
       
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          breakpoints: {
            767: {
          top: 250
          }
          },
        },
        
        loop: true,
        speed: 50,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }, 
        
        
      });
});
window.addEventListener('DOMContentLoaded', function(){
    $('.faq').click(function() {
        var $answer = $(this).find('.a');
        if($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('.q').css('margin-bottom','0px');
            $(this).find('.minus').html('<img src="img/minus.svg" alt="">')

        }else if ($('.faq').find('.a').hasClass('open')){
            $('.faq').find('.a').removeClass('open');
            $('.faq').find('.a').slideUp();
            $('.faq').find('.q').css('margin-bottom','0px');
            $('.faq').find('.minus').html('<img src="img/minus.svg" alt="">')
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('.q').css('margin-bottom','21px');
            $(this).find('.minus').html('<img src="img/plus.svg" alt="">')
        }else{
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('.q').css('margin-bottom','21px');
            $(this).find('.minus').html('<img src="img/plus.svg" alt="">')
        
           
        }
    });
});

window.addEventListener('DOMContentLoaded', function(){
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({   
      'scrollTop':position  
    },1000);
  });
});

window.addEventListener('DOMContentLoaded', function(){
  $('.guidance').click(function(){
    var position = $('header').offset().top;
    $('html,body').animate({
      'scrollTop':position
    },1000);
  });

});