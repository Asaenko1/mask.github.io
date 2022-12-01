// JavaScript Document

$(document).ready(function() {

    /*----------SLIDER-------------*/
	$('.reviews-slider').slick({
		infinite: true,
        autoplay: false,
        arrows: true,
        dots: false, 
        adaptiveHeight: true
    });

    /*---------------------------*/

    $(".nav a, a.link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 97;
		$('body,html').animate({scrollTop: top}, 600);
	});

     /*-----------TIMER------------*/

    var date = getRelativeDate(20);

    $('.countdown').timeTo({
        timeTo: date,
        displayDays: 0,
        theme: "white",
        displayCaptions: false,
        displayHours: false,
        fontFamily: 'Roboto Slab',
        fontSize: 44,
        width: 30
    });

    function getRelativeDate(days, hours, minutes){
        var date = new Date((new Date()).getTime() + 60000 /* milisec */ * 60 /* minutes */ * 24 /* hours */ * days /* days */);

        date.setHours(hours || 0);
        date.setMinutes(minutes || 0);
        date.setSeconds(0);

        return date;
    }
});
