/*
 * PAUD Terpadu Budi Mulia Al Bayaan
 * https://budimuliaalbayaan.sch.id
 * Design by Degiam - https://degiam.github.io
 * Copyright (c) 2021
 */

// AOS
	AOS.init({
		once: true
	})

	var parentStart = 1

	$('section').each(function() {
		var aosInit		= '[data-aos]'
			aosAnchor	= 'data-aos-anchor'
			aosDelay	= 'data-aos-delay'
			aosSecond	= '300'
			start		= 1
			number		= parentStart++
			parent		= 'aosParent-' + number
		$(this).addClass(parent)
		$(this).find(aosInit).attr(aosAnchor,'.' + parent)
		$(this).find(aosInit).each(function() {
			$(this).attr(aosDelay,start++ * aosSecond)
		})
	})