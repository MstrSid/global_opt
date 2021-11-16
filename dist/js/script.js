$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		center: true,
		items: 3,
		loop: true,
		margin: -100,
		autoWidth: true,
		dots: false,
		nav: true,
		navText: ["<img src='../img/reviews/arrow_left.png'>","<img src='../img/reviews/arrow_right.png'>"],
		responsive: {
			600: {
				items: 3
			}
		}
	});
});