// Counter transition //
const animationDuration = 5000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * ( 2 - t);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);

  const counter = setInterval(() => {
    frame++;

    const progress = easeOutQuad(frame / totalFrames);

    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const countupEls = document.querySelectorAll(".timer");
countupEls.forEach(animateCountUp);

// Back To Top
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});



// CONTACT FORM START //
$('.submit').click(function(event) {
	event.preventDefault();
	$(this).addClass('active');
	$('.main').addClass('active');
	setTimeout(function(){
		$('.letterBox').addClass('active');
		$('.formwrap').addClass('go');
	}, 1000);
	setTimeout(function(){
		$('.letterBox').addClass('fold');
	}, 1300);
	setTimeout(function(){
		$('.main').addClass('go');
	}, 2400);
});
// CONTACT FORM END //

