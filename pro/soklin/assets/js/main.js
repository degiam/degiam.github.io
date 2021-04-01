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
	let head = document.head
		width = document.querySelector('header nav:last-child > * span').clientWidth
		css = document.createElement('style')
		css.innerHTML = 'header nav:last-child > * span { width: 0 } header nav:last-child > *:hover span { width: ' + (width + 15) + 'px }'
	head.appendChild(css)
