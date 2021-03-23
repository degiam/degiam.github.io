/*
 * So Klin Korean Series
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
