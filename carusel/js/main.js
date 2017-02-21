const slides = document.querySelectorAll('.carousel li');
let currentSlide = 0;
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let playing = true;
let pauseButton = document.getElementById('pause');
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
	goToSlide(currentSlide + 1);
}

function previousSlide() {
	goToSlide(currentSlide - 1);
}

function goToSlide(n) {
	slides[currentSlide].className = 'fade';
	currentSlide = (n + slides.length) % slides.length;
	slides[currentSlide].className = 'fade show';
}

function pauseSlideShow() {
	pauseButton.innerHTML = 'Go';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideShow() {
	pauseButton.innerHTML = 'Stop';
	playing = true;
	slideInterval = setInterval(nextSlide, 5000);
}
pauseButton.onclick = function() {
	if (playing) {
		pauseSlideShow();
	} else {
		playSlideShow();
	}
}
next.onclick = function() {
	nextSlide();
	pauseSlideShow()
};
previous.onclick = function() {
	previousSlide();
	pauseSlideShow()
};