new Swiper('.hero__slider',{
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
    },
    speed: 1500,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});
const studioSlider = new Swiper('.studio__sliderone',{
    loop: true,
    autoplay:{
        delay: 1250,
        stopOnLastSlide: false,
    },
    speed: 1500,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});
const studioSliderTwo = new Swiper('.studio__slidertwo',{
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
    },
    speed: 1500,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});
const tworoomSlider = new Swiper('.tworoom__slider',{
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
    },
    speed: 1200,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});
const threeroomSliderOne = new Swiper('.threeroom__sliderone',{
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
    },
    speed: 1200,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});
const threeroomSliderTwo = new Swiper('.threeroom__slidertwo',{
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
    },
    speed: 1200,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});
const terraceSlider = new Swiper('.terrace__slider',{
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
    },
    speed: 1200,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});

const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal__overlay');
const modals = document.querySelector('.modal__body')

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal__body--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal__body--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal__body--visible');
		});
	}
});

const mainBtn = document.querySelector('.btn');
const modalActiv = document.querySelector('.modal__overlay')
    mainBtn.addEventListener('click', togle =>{
        modalActiv.classList.toggle('modal__overlay--visible')
    })