;(function($){
	"use strict";

	$(function(){
		$('.header__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 1500,
			dots: true,
			arrows: false,
			draggable: true,
			pauseOnDotsHover: true,
			pauseOnHover: false
		});

		$('.news__slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			slide: '.slider__wrap',
			autoplaySpeed: 4000,
			speed: 1000,
			dots: true,
			arrows: true,
			draggable: true,
			pauseOnDotsHover: true,
			pauseOnHover: false,
			prevArrow: '.prevArrow',
			nextArrow: '.nextArrow'
		});

	})
}) (jQuery);