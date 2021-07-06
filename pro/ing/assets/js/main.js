/*
 * BBPOM Informasi Nilai Gizi
 * Designed by Degiam [https://degiam.github.io]
 * Copyright (c) 2021
 */

// Menu
	let navbar = $('.menu-top a.active')
	if ( navbar.length > 0 ) {
		$('header .overflow-auto').animate({
			scrollLeft: navbar.offset().left - 32
		}, 1)
	}

// Footer
	$('footer').each(function() {
		let footer = $('footer > div')
			content = footer.html()

		if ( $('body.inside').length < 1 ) {
			$('.footer').html(content)
			footer.addClass('d-md-none')
		} else {
			$('body').addClass('bg-main')
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

// Modal
	let popupDetail = 'formatING'

	$('[data-target="#' + popupDetail + '"]').each(function() {
		let button = $(this)
			parent = button.closest('center')
			img = parent.find('img')
			src = img.attr('src')
			alt = img.attr('src')
			content = `<div class='bg-white w-fit-content mx-auto p-2'><img class='img-fluid' loading='lazy' src='` + src + `' alt='` + alt + `'></div>`
		$(this).attr('data-detail',content)
	})

	$('#' + popupDetail).on('show.bs.modal', function(e) {
		let modal = $(this)
		button = $(e.relatedTarget)
		content = button.data('detail')
		modal.find('.' + popupDetail + '-content').html(content)
	})

// Pills
	$('.pills-responsive').each(function() {
		let select = $('.custom-select')
			link = $('.nav-link')
			pane = $('.tab-pane.show')

		select.on('change',function() {
			let id = '#pills-' + $(this).val() + '-tab'
			$(id).click()
		})

		link.on('click',function() {
			let val = $(this).attr('href').split('-')
			select.val(val[1])
		})

		$('.nav-link[id="' + pane.attr('id') + '-tab"]').addClass('active')
		$('.custom-select option[value="' + (pane.attr('id').split('-'))[1] + '"]').attr('selected','true')
	})
