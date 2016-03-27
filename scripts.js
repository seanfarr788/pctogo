
function init() {
	box = document.getElementById("box2Div");

	box.style.animation = "	";
}

$(window).scroll(function() {
    if (checkVisible($('#box2Div'))) {
        scrollBoxes();
    }
});

function autoScroll(amount) {
	$('body,html').animate({ scrollTop: amount }, 800);
}

function scrollBoxes() {
	box = document.getElementById("box2Div");

	box.style.animation = "animateBox2 1s forwards"
	box.style.animationdelay = "0.5s"
}


function checkVisible( element, evalType ) {
    evalType = evalType || "visible";

    var vpH = $(window).height(), 
        st = $(window).scrollTop(), 
        y = $(element).offset().top,
        elementHeight = $(element).height();

    if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (evalType === "above") return ((y < (vpH + st)));
}