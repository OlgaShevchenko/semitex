var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	   pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
	    breakpoints: {
	   200: {
          slidesPerView: 1,         
        },
		500: {
          slidesPerView: 2,          
        },
        768: {
          slidesPerView: 3,          
        },
        1024: {
          slidesPerView: 5,          
        },
	}
    });

$(document).ready(function(){
	$('.hamburger').click(function () {
		$('.hamburger').toggleClass('hamburger_is_active');
		$('.header').toggleClass('fixed');
		$('.submenu').slideToggle();
		$('body').toggleClass('overflow');		
	});	
	$('.header__nav-link').click(function () {
		if ($(window).width() < 768) {
			$('.hamburger').removeClass('hamburger_is_active');
			$('.header').removeClass('fixed');
			$('.submenu').slideUp();	
			$('body').removeClass('overflow');
		}		
	});	
	
	$('.link').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('#form').offset().top
      }, 500);
    });
	
	$('.faq__item-header').click(function () {
		if($(this).parent().hasClass('faq__item_active')){
			$(this).parent().removeClass('faq__item_active');
		}
		else {
			$('.faq__item').removeClass('faq__item_active');
			$(this).parent().addClass('faq__item_active');
		}
	});
	$(window).on('resize', function(){
		let winWidth = $(window).width();		
		if (winWidth >= 768) { 
			$('.submenu').removeAttr("style");
			$('.hamburger').removeClass('hamburger_is_active');
			$('.header').removeClass('fixed');				
			$('body').removeClass('overflow');					
		}			
	});	
});

var fixmeTop = 100;
$(window).scroll(function() {                  

    var currentScroll = $(window).scrollTop(); 
		
		if (currentScroll >= fixmeTop) {           
			$('.menu').addClass('fixed');
		   
		} else {                                  
			$('.menu').removeClass('fixed');
		}
	

});
