// window.addEventListener('DOMContentLoaded', function(){
//   var header = $(".container-wrapper").offset().top;
//   $(window).scroll(function(){
//       if($(window).scrollTop() > header){
//           $(".container-wrapper").css("position","fixed");
//       }
//   });
// });

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
            // when window width is >= 320px
           
            768: {
                spaceBetween: 20,
                slidesPerView: 3
              },
            // when window width is >= 640px
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
        // $('.faq').find('.a').slideUp();
        // $('.faq').find('.q').css('margin-bottom','0px');
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

// window.addEventListener('DOMContentLoaded', function(){
//     $('.faq').click(function() {
//         $('.a').removeClass('open');
//         $(this).find('.a').addClass('open');
        
//     });
// });



// function getRandomNumber() {
//     return 5
//     Math.floor(Math.random() * 100)
// }
// const num = getRandomNumber()
// const num = undefined


// // 10で割り切れるかチェックする
// function isDividable(num) {
//     // 数字じゃなかったらfalse
//     if (!(num instanceof Number)) {
//         return false
//     }
//     return !(num % 10)
// }

// isDividable(100) //=> true
// isDividable(101) //=> false
// isDividable('aaa') //=> false


// function setId(id) {
//     document.getElementById('target').innerHTML = id
// }
// setId(123456)
// undefined