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

// Collapse
	function collapseAll() {
		addClass('.multi-collapse','show')
	}

// Form
	function showPassword() {
		var input0 = document.querySelectorAll('#input-password-show')[0]
			input1 = document.querySelectorAll('#input-password-show')[1]
			button0 = document.querySelectorAll('#input-password-button')[0]
			button1 = document.querySelectorAll('#input-password-button')[1]

		function showHide() {
			if (input0.getAttribute('type') === 'password' || input1.getAttribute('type') === 'password') {
				toggleClass('#input-password-button>svg','d-none')
				input0.setAttribute('type','text')
				input1.setAttribute('type','text')
			} else {
				toggleClass('#input-password-button>svg','d-none')
				input0.setAttribute('type','password');
				input1.setAttribute('type','password');
			}
		}

		button0.onclick = function() {
			showHide()
		}

		button1.onclick = function() {
			showHide()
		}
	}

// Dark Mode
	if ( localStorage.getItem('dark') !== null ) {
		toggleClass('body', 'dark')
		document.getElementById('dark-mode').setAttribute('checked','true')
	}

	function darkMode() {
		if ( localStorage.getItem('dark') === null ) {
			toggleClass('body', 'transition-off')
			setTimeout(function() {
				toggleClass('body', 'dark')
				toggleClass('body', 'transition-on')
			}, 75)
			localStorage.setItem('dark','on')
		} else {
			toggleClass('body', 'transition-on')
			setTimeout(function() {
				toggleClass('body', 'dark')
				toggleClass('body', 'transition-off')
			}, 75)
			localStorage.removeItem('dark')
		}
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
