/*
 * BBPOM Informasi Nilai Gizi
 * Designed by Degiam [https://degiam.github.io]
 * Copyright (c) 2021
 */

// Menu
	$('header .overflow-auto').animate({
		scrollLeft: $('.menu-top a.active').offset().left - 32
	}, 1);

// Footer
	$('footer').each(function() {
		let footer = $('footer > div')
			content = footer.html()

		if ( $('body.inside').length < 1 ) {
			$('.footer').html(content)
			footer.addClass('d-md-none')
		} else {
			$('body').addClass('bg-light')
		}
	})

// FAQ
	$('[data-toggle="collapse"]').closest('ul').find('li').first().each(function(index) {
		let list = $(this)
			trigger = list.find('[data-toggle="collapse"]')
			id = trigger.attr('href')
			container = $(id)
		trigger.attr('aria-expanded','true')
		container.addClass('show')
	})

// Radio
	$('.radio-list input:radio').on('change',function() {
		let input = $(this)
		$('.form-check').removeClass('selected')
		if ( input.is(':checked') ) input.closest('.form-check').addClass('selected')
	})
