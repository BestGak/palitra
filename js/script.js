// sliders
$(document).ready(function() {
    $('.portfolio__gallery').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.portfolio__left'),
        nextArrow: $('.portfolio__right'),
        responsive: [
            {
              breakpoint: 1023,
              settings: "unslick"
            }
          ]
    });

    $('.reviews__container').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: $('.reviews__left'),
      nextArrow: $('.reviews__right'),
      responsive: [
          {
            breakpoint: 1023,
            settings: "unslick"
          }
        ]
  });
});

// header
window.addEventListener('scroll' , () => window.pageYOffset > 100 ? document.querySelector('header').style.position = 'fixed' : document.querySelector('header').style.position = 'initial')

// header menu
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('active'));


// tabs
// получаем массив всех вкладок
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
 
// запускаем цикл для каждой вкладки и добавляем на неё событие
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
 
		// сначала нам нужно удалить активный класс именно с вкладок
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab--active");
		}
		// добавляем активный класс
		tabs[i].classList.add("tab--active");
		// теперь нужно удалить активный класс с блоков содержимого вкладок
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("content--active");
		}
		// добавляем активный класс
		contents[i].classList.add("content--active");
 
	});
}
Fancybox.bind("[data-fancybox]", {
  // Custom options for all galleries
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
	