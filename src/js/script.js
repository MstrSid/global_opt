$(document).ready(function () {
	/* owl start */
	$(".owl-carousel").owlCarousel({
		center: true,
		items: 3,
		loop: true,
		margin: -50,
		dots: false,
		nav: true,
		navText: ["<img src='img/reviews/arrow_left.png'>", "<img src='img/reviews/arrow_right.png'>"],
		responsive: {
			300: {
				items: 1,
				nav: false,
				margin: 50
			},
			550: {
				items: 1,
				margin: 50
			},
			600: {
				items: 1,
				margin: 50
			},
			700: {
				items: 1,
				margin: 100
			},
			800: {
				items: 3,
				margin: -50
			}	,
			900: {
				items: 3,
				margin: -50
			}						
		}
	});
	/* owl end */

	/* validation form start */
	function validateForm(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
					lettersonly: true
				},
				phone: "required",
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			},

			messages: {
				name: {
					required: "Введите имя",
					lettersonly: "Только буквы",
					minlength: jQuery.validator.format("Не менее {0} символов"),
				},
				phone: "Введите свой номер телефона",
				email: {
					required: "Введите свой email",
					email: "Неверный формат"
				},

				message: {
					required: "Введите текст сообщения",
					minlength: jQuery.validator.format("Не менее {0} символов"),
				}
			},
		});
	}

	function resetInput(form) {
		$('.modal__close').on('click', function () {
			var f = $(form);
			f.validate().resetForm(); // clear out the validation errors
			f[0].reset(); // clear out the form data
		});
	}

	validateForm('#prices__form');
	validateForm('#questions__form');

	resetInput('#prices__form');
	resetInput('#questions__form');

	$('input[name=phone]').mask("+375(99)999-99-99");
	/* validation form end */

	/* smooth scroll start*/
	$('a').on('click', function (e) {
		if (this.hash !== '') {
			e.preventDefault();
			const hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800);
		}
	});
	/* smooth scroll end*/

	/* mailer start*/
	$('.modal__close').on('click', function () {
		$('.overlay, #thankyou').fadeOut();
	});

	$('form').submit(function (e) {
		e.preventDefault();
		if (!$(this).valid()) {
			return;
		}
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find('input').val('');
			$(this).find('textarea').val('');
			$('.overlay, #thankyou').fadeIn();
			$('form').trigger('reset');
		});
		return false;
	});
	/* mailer end */
});

jQuery.validator.addMethod("lettersonly", function (value, element) {
	return this.optional(element) || /^[a-zа-я\s]+$/i.test(value);
}, "Only alphabetical characters");


/* 2gis maps start */
DG.then(function () {
	let map,
		myIcon;

	map = DG.map('map', {
		center: [55.74804966418222, 37.62726970531636],
		zoom: 45,
		scrollWheelZoom: false
	});
	myIcon = DG.icon({
		iconUrl: 'icons/bullit.png',
		iconSize: [48, 48]
	});
	DG.marker([55.74804966418222, 37.62726970531636], {
		icon: myIcon
	}).addTo(map).bindLabel('<span>г. Москва</span>' +
		'ул. Садовническая, дом 5, офис 4-6<br>' +
		'700 от м. Новокузнецкая<br>' +
		'<a href="tel:+79264230100">Тел: +7 (926) 423 01 00</a><br>' +
		'<a href="mailto:info@glopt.ru">info@glopt.ru</a>', {
			static: true
		});
});
/* 2gis maps end */

/* hamburger event start*/
window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__menu'),
		menuItem = document.querySelectorAll('.header__menu-item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('header__menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('header__menu_active');
		});
	});
});
/* hamburger event end*/