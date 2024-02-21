const navLinks = document.querySelectorAll('.header__nav--link');
const hamburgerMenu = document.querySelector('.hamburger');
const navContainer = document.querySelector('.header__content--nav');

navLinks.forEach(function (nav) {
	nav.addEventListener('click', function () {
		navLinks.forEach(function (activeLink) {
			activeLink.classList.remove('active');
			nav.classList.add('active');
		});

		if (nav.classList.contains('.header__nav--link')) {
			nav.classList.remove('header__nav--link');
			nav.classList.add('active');
		}
		navContainer.classList.add('show');
	});
});

console.log('hello');

hamburgerMenu.addEventListener('click', function () {
	navContainer.classList.toggle('show');
});

const scroll = new SmoothScroll('.header__content--nav a[href*="#"]', {
	speed: 800,
});

const scrollFromFooter = new SmoothScroll('.footer__links a[href*="#"]', {
	speed: 800,
});
