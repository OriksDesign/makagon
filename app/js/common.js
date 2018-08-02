$(function() {

	// Custom JS
	$('.logo-liter').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace('Б', '<span>Б</span>'));
		ths.html(ths.html().replace('К', '<span>К</span>'));
	});

	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function() {
		$('.mobile-menu').stop().slideToggle();
	});

	$('.col-item').hover(function() {
		ths = $(this);
		lnk = ths.closest('.col-item').find('h4 a');
		lnk.addClass('hover');
	}, function() {
		lnk.removeClass('hover');
	});

	$("body").prognroll({
		height: 3,
		color: "#ec1c1c",
		custom: false
	});	

});

$(document).ready(function(){
	$('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
  });
  
  $(function() {
   $.fn.scrollToTop = function() {
	$(this).hide().removeAttr("href");
	if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
	var scrollDiv = $(this);
	$(window).scroll(function() {
	 if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
	 else $(scrollDiv).fadeIn("slow")
	});
	$(this).click(function() {
	 $("html, body").animate({scrollTop: 0}, "slow")
	})
   }
  });
  
  $(function() {
   $("#go-top").scrollToTop();
  });
  
  
