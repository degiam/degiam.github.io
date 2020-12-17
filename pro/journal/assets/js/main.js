/*
 * UAD Journal
 * Design by Degiam
 * https://degiam.github.io
 * Copyright (c) 2020
 */

// Class
	function addClass(el, className) {
		var el = document.querySelectorAll(el)

		for (i = 0; i < el.length; i++) {
			if (el.classList) {
				el[i].classList.add(className)
			} else {
				el[i].className += ' ' + className;
			}
		}
	}

	function removeClass(el, className) {
		var el = document.querySelectorAll(el)

		for (i = 0; i < el.length; i++) {

			if (el[i].classList) {
				el[i].classList.remove(className)
			} else {
				el[i].className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
			}
		}
	}

	function toggleClass(el, className) {
		var el = document.querySelectorAll(el)

		for (i = 0; i < el.length; i++) {

			if (el[i].classList) {
				el[i].classList.toggle(className)
			} else {
				var classes = el[i].className.split(' ')
				var existingIndex = -1;
				for (var j = classes.length; j--;) {
					if (classes[j] === className)
						existingIndex = j;
				}

				if (existingIndex >= 0)
					classes.splice(existingIndex, 1)
				else
					classes.push(className)

				el[i].className = classes.join(' ')
			}
		}
	}

// Menu
	function mobile() {
		removeClass('.menu', 'show')
	}

// Dark Mode
	function darkMode() {
		toggleClass('body', 'dark')
	}

// Responsive
	var viewportWidth;
	var setViewportWidth = function() {
		viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	}

	var logWidthInit = function() {
		if (viewportWidth < 768) {
			mobile()
		} else {

		}
	}

	var logWidth = function() {
		if (viewportWidth < 768) {

		} else {

		}
	}

	setViewportWidth();
	logWidthInit();
	logWidth();

	window.addEventListener('resize', function() {
		setViewportWidth();
		logWidth();
	}, false);
