/*
 * So Klin Korea Vaganza
 * Design by Degiam - https://degiam.github.io
 * Copyright (c) 2021
 */

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
