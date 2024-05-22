// Add swipe functionality to navigate between sections
const sections = document.querySelectorAll('section');
let currentSection = 0;

document.addEventListener('touchstart', (e) => {
	const touch = e.touches[0];
	const swipeStart = touch.clientX;
});

document.addEventListener('touchend', (e) => {
	const touch = e.changedTouches[0];
	const swipeEnd = touch.clientX;
	const swipeDistance = swipeEnd - swipeStart;
	if (swipeDistance > 50) {
		currentSection++;
		if (currentSection >= sections.length) {
			currentSection = 0;
		}
		sections[currentSection].scrollIntoView();
	} else if (swipeDistance < -50) {
		currentSection--;
		if (currentSection < 0) {
			currentSection = sections.length - 1;
		}
		sections[currentSection].scrollIntoView();
	}
});
