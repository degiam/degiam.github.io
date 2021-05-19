/*
 * So Klin Korea Vaganza
 * Design by Degiam - https://degiam.github.io
 * Copyright (c) 2021
 */

// Anchor
	$('.anchor').on('click', function(e) {
		e.preventDefault()
		var target = this.hash
		$target = $(target)
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		},500)
	})

// Logo Link
	function linkLogo() {
		let logo = $('.main-logo')
			image = logo.find('img')
			height = logo.closest('div').css('height',image.height() + 30)
		if (!image.prop('complete')) {
			image.on('load', function() { height })
		} else {
			height
		}
	}
	linkLogo()
	$(window).resize(linkLogo)

// Logo Space
	function space() {
		let screenWidth = $(window).width()
			height = $(window).width() / 4
		$('.space').css('height',height)
	}

	space()

	$(window).resize(function() {
		space()
	})

// Account Name
	function name() {
		let name = 'style'

		let old = $('#' + name)
		if ( old !== null ) old.remove()

		let slot = document.querySelector('slot')
			width = document.querySelector('header nav:last-child > * span').clientWidth
			css = document.createElement('style')
			css.id = name
			css.innerHTML = 'header nav:last-child > * span { width: 0 } header nav:last-child > *:hover span { width: ' + (width + 15) + 'px }'
		slot.appendChild(css)
	}

	name()

	$(window).resize(function() {
		name()
	})

// Mechanism
	function mechanism() {
		let selector = document.querySelectorAll('.same-height')
			highest = 0

		for (let i = 0; i < selector.length; i++) {
			let itemH = selector[i].querySelector('.border-custom .card').clientHeight
			itemH = itemH - 12
			highest = itemH > highest ? itemH : highest
		}

		for (let i = 0; i < selector.length; i++) {
			let itemH = selector[i].querySelector('.border-custom .card').clientHeight
			itemH = itemH - 12
			highest = itemH > highest ? itemH : highest
			selector[i].querySelector('.card').style.height = highest + 'px'
		}
	}

	if ($(window).width() > 991) {
		mechanism()
	}
