$(function () {

	var callback = function () {

		var new_width;

		// Looping skills
		$('.item-skills').each(function() {
			new_width = $(this).parent().width() * $(this).data('percent'),

			$(this).width(0);

		    $(this).animate({
		        width: new_width,
		    }, 1000);
		});

		// Looping stars
		$('.icons-red').each(function() {
		    $(this).animate({
		        height: 14,
		    }, 2000);
		});

	};

	var resize;

	window.onresize = function() {
		clearTimeout(resize);

		resize = setTimeout(function() {
			callback();
		}, 100);
	};

	callback();

});
