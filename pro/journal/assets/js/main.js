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
		var input = document.querySelectorAll('form [aria-describedby="input-password-button"]')

		for(var i = 0; i < input.length; i++) {
			if ( input[i].getAttribute('type') === 'password' ) {
				input[i].setAttribute('type','text')
			} else {
				input[i].setAttribute('type','password')
			}
		}

		toggleClass('#input-password-button>svg','d-none')
	}

	var checkPassword = function() {
		var input = document.querySelectorAll('form [aria-describedby="input-password-button"]')
			alert = document.querySelector('form .input-password-alert')

		if ( input.value !== null ) {
			if ( input[0].value == input[1].value) {
				alert.style.color = 'var(--bs-green)'
				alert.innerHTML = 'Kata sandi cocok!'
			} else {
				alert.style.color = 'var(--bs-red)'
				alert.innerHTML = 'Kata sandi belum cocok!'
			}
		}

		for(var i = 0; i < input.length; i++) {
			if ( input[i].value.length == 0 ) alert.innerHTML = ''
		}
	}

	function fileSize(bytes) {
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		if (bytes == 0) return '0 Byte';
		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
	}

	function uploadFile(upload,element) {
		var file = upload.target.files[0]
			reader = new FileReader()
			parent = document.querySelector('#' + element).closest('.custom-file')
			input = parent.querySelector('.custom-file-input')
			label = parent.querySelector('.custom-file-label')
			size = parent.querySelector('.custom-file-size')
			alert = parent.querySelector('.custom-file-size-alert')
			alertNone = parent.querySelector('.custom-file-size-alert.d-none')
			maxfilesize = 1024 * 1024

		reader.readAsText(file)

		reader.onload = function(e) {
			if ( sessionStorage.getItem('Browse') === null && sessionStorage.getItem('Size') === null ) {
				sessionStorage.setItem('Browse',label.innerHTML)
				sessionStorage.setItem('Size',size.innerHTML)
			}
			label.innerHTML = file.name
			size.innerHTML = fileSize(file.size)
			if ( file.size > maxfilesize ) {
				alert.classList.remove('d-none')
			} else {
				if ( alertNone === null ) {
					alert.classList.add('d-none')
				}
			}
		}
	}

	function uploadImage(upload,element) {
		var file = upload.target.files[0]
			reader = new FileReader()
			parent = document.querySelector('#' + element).closest('.custom-file')
			input = parent.querySelector('.custom-file-input')
			label = parent.querySelector('.custom-file-label')
			size = parent.querySelector('.custom-file-size')
			thumbnail = parent.querySelector('.custom-file-thumbnail')
			properties = parent.querySelector('.custom-file-thumbnail-properties')
			remove = parent.querySelector('.custom-file-thumbnail-remove')
			alert = parent.querySelector('.custom-file-size-alert')
			alertNone = parent.querySelector('.custom-file-size-alert.d-none')
			maxfilesize = 1024 * 1024

		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader()
				reader.onload = function(e) {
					thumbnail.src = e.target.result
					thumbnail.classList.remove('d-none')
					properties.classList.remove('d-none')
				}
				reader.readAsDataURL(input.files[0])
			}
		}

		readURL(input)

		reader.readAsText(file)

		reader.onload = function(e) {
			if ( sessionStorage.getItem('Browse') === null && sessionStorage.getItem('Size') === null ) {
				sessionStorage.setItem('Browse',label.innerHTML)
				sessionStorage.setItem('Size',size.innerHTML)
			}
			label.innerHTML = file.name
			size.innerHTML = fileSize(file.size)
			if ( file.size > maxfilesize ) {
				alert.classList.remove('d-none')
			} else {
				if ( alertNone === null ) {
					alert.classList.add('d-none')
				}
			}
		}
	}

	function uploadImageRemove(element) {
		var parent = element.closest('.custom-file')
		parent.querySelector('.custom-file-input').value = ''
		parent.querySelector('.custom-file-thumbnail').src = ''
		parent.querySelector('.custom-file-label').innerHTML = sessionStorage.getItem('Browse')
		parent.querySelector('.custom-file-size').innerHTML = sessionStorage.getItem('Size')
		parent.querySelector('.custom-file-thumbnail-properties').classList.add('d-none')
		if ( parent.querySelector('.custom-file-size-alert.d-none') === null ) {
			parent.querySelector('.custom-file-size-alert').classList.add('d-none')
		}
	}

// Dark Mode
	if ( localStorage.getItem('dark') !== null ) {
		toggleClass('body', 'dark')
		var toggle = document.getElementById('dark-mode')
		if ( toggle !== null ) {
			toggle.setAttribute('checked','true')
		}
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
