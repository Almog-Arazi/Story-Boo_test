/*=============== SEARCH ===============*/


/*=============== LOGIN ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/*=============== HOME SWIPER ===============*/

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -12,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

  autoplay: {
   delay: 3000,
   disableOnInteraction: false,
  },

   breakpoints: {
   720: {
    spaceBetween: +32,
  }
 }
});

/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
 origin: 'top',
 distance: '60px',
 duration:2500,
 delay: 400
 // reset: true, //Animation repeat
})

sr.reveal('.home__data  , .discount__data, .section__data , .card-container')
sr.reveal('.home__page ',{delay : 600})
sr.reveal('.services__card',{interval: 100})
sr.reveal('.services__card',{interval: 100})
sr.reveal('.styles__section',{interval: 100})
sr.reveal('.footer',{interval: 100})
sr.reveal('.discount__img-1',{origin: 'left'})
sr.reveal('.discount__img-2',{origin: 'right'})

