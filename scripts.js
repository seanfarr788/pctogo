
function init() {

}


function autoScroll(amount) {
	$('body,html').animate({ scrollTop: amount }, 800);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> ce83edb4e184bf76e95b09399f4217cf13895815
=======
>>>>>>> b348550a71e111e3761daeddf4b3cc5bf93bad25
}