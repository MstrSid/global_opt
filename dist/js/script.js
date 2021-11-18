$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		center: true,
		items: 3,
		loop: true,
		margin: -100,
		autoWidth: true,
		dots: false,
		nav: true,
		navText: ["<img src='../img/reviews/arrow_left.png'>", "<img src='../img/reviews/arrow_right.png'>"],
		responsive: {
			600: {
				items: 3
			}
		}
	});
});


DG.then(function () {
	let map,
		myIcon;

	map = DG.map('map', {
		center: [55.74804966418222, 37.62726970531636],
		zoom: 45,
		scrollWheelZoom: false
	});
	myIcon = DG.icon({
		iconUrl: '../icons/bullit.png',
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