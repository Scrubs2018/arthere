$(document).ready(function() {
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		//   loop: false,
		slidesPerView: 'auto',
		spaceBetween: 30,
		nextButton: '.swiper-next',
		prevButton: '.swiper-prev',
		onSlideChangeEnd: function(swiper) {
			$('.b-month-title').text($('.swiper-slide-active').data('date'));
		}
	});
	var index = $('.swiper-container .swiper-slide_current').index();
	mySwiper.slideTo(index - 1);
});

if ($('.b-slider').length > 0) {

	var allCount = $('.b-slider .b-slider__slide').length;
	$('.b-school-paper__value').text(allCount);

	$('.b-slider').addClass('owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true
	});
	var owl = $('.owl-carousel');
	owl.on('changed.owl.carousel', function(event) {
		showSlideNum(event);
	})

	function showSlideNum(event) {
		var nextItem = event.page.index + 1;
		var allCount = event.page.count;
		$('.b-school-paper__key').text(nextItem);
		$('.b-school-paper__value').text(allCount);
	}
}

$('.b-slider-calendar').addClass('owl-carousel').owlCarousel({
	items: 1,
	loop: true,
	dots: false,
	nav: true
});

$('.b-menu__btn-menu').click(function() {
	$('.b-menu__wrap').toggleClass('b-menu__wrap_visible');

	return false;
});

$.fn.imPopup = function() {
	var $this, id;
	$this = this;
	id = '';
	$this.on('click', function(e) {
		e.preventDefault();
		id = $(this).data('id');
		if ($(id).length) {
			var offset = window.innerWidth - $(window).width();
		};
		return $(".im-popups " + id).addClass('_visible');
	});
	$('.im-popup .b-popup__close').click(function(e) {
		return e.preventDefault();
	});
	return $('.im-popup').on('click', function(e) {
		if (!$(e.target).hasClass('im-popup-inside') && !$(e.target).parents('.im-popup-inside').length || $(e.target).hasClass('b-popup__close')) {
			var id = '#' + $(this).attr('id');
			if ($('.im-popup._visible').length == 1) {
				setTimeout(function() {
					$('body').css({
						overflow: '',
						paddingRight: ''
					});
				}, 300);
			}
			return $(".im-popups " + id).removeClass('_visible');
		}
	});
};

$('.im-popup-link').imPopup();