import $ from 'jquery';

// Load individual modules
// import { expandSearch } from '@undp/design-system/stories/assets/js/expand-search';
import { multiSelect } from '@undp/design-system/stories/assets/js/multi-select';
import { select } from '@undp/design-system/stories/assets/js/select';
// import { sidebarNav, sidebarMenu } from '@undp/design-system/stories/assets/js/sidebar';
// import { navigationInitialize } from '@undp/design-system/stories/assets/js/navigation';
// import { accordion } from '@undp/design-system/stories/assets/js/accordion';
// import { parallaxEffect } from '@undp/design-system/stories/assets/js/parallax';
// import { swiper } from '@undp/design-system/stories/assets/js/swiper';
// import { fitText } from '@undp/design-system/stories/assets/js/fitText';
// import { modal } from '@undp/design-system/stories/assets/js/modal';
// import { lightboxGallery } from '@undp/design-system/stories/assets/js/lightbox-gallery';
// import { GLightbox } from 'glightbox';
import { expandToSize } from '@undp/design-system/stories/assets/js/animation';
import { langSwitch } from '@undp/design-system/stories/assets/js/lang-switcher';
// import { statsHover } from '@undp/design-system/stories/assets/js/stats';

// Filter and search sidebar
import { toggleFilter } from '@undp/design-system/stories/assets/js/filter-search-bar';

// window.jQuery = $;

// Enable in view animations, wired via data-viewport=true attribute
require('@undp/design-system/stories/assets/js/viewport');
// global constants
require('@undp/design-system/stories/assets/js/undp');

// Initialize components

// Enhanced form fields
// expandSearch();
multiSelect();
toggleFilter();
select();

// Side bar navigation
// sidebarNav();
// sidebarMenu();

// Mega menu
// navigationInitialize();

// Accordion
// accordion();

// Parallax Cards
// parallaxEffect('.parallax-card', ['.parallax-cardimage', '.parallax-cardcontent'], 'top center', 'bottom+=85 center', 'vertical', 'desktop', 'percent');
// swiper('.parallax__content');
// require('@undp/design-system/stories/assets/js/smartresize');

// Stats card
// fitText('.stats-card.medium', {desktop: 110, mobile: 80});

// Carousels
// swiper('.fixed-carousel', '.fixed-carousel__button-wrap'); // Fixed image carousel
// swiper('.fluid-carousel', '.slide-content'); // Fluid image carousel
// swiper('.image-carousel', '.slider-slide'); // Image only carousel

// Galleries
// window.GLightbox = GLightbox;
// lightboxGallery();
// parallaxEffect('.parallax-gallery-images', '.column', 'top center', 'bottom+=15% center', 'vertical', 'all');

// Heros
// expandToSize('.homepage-hero-full');
expandToSize('.pagehero-fulll');
// swiper('.pagehero-cards-items')
// require('@undp/design-system/stories/assets/js/smartresize');

// Language switcher
langSwitch();

// Modal
// modal();

// Stats
// statsHover();

// Progress bar
// require('@undp/design-system/stories/assets/js/scrolling-progress-bar');

// UNDP.getScreenOrientation = function() {
//   if (screen && screen.orientation) {
//     return screen.orientation.type.startsWith('portrait') ? 'portrait' : 'landscape';
//   } else {
//     return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
//   }
// }

function filter() {



  // $('[data-multi-select="area"] input[type="checkbox"]').each((ele, i) => {
  //   let value = $(ele).val();
  //   $(`[data-group="${value}"]`).toggle(this.checked);
  // });

  // $('[data-multi-select="region"] input[type="checkbox"]').each((ele, i) => {
  //   let value = $(ele).val();
  //   $(`[data-group="${value}"]`).toggle(this.checked);
  // });

}

$('.expand-search input').on('keyup paste cut change', (e) => {
  let $input = $(e.target);
  let filter = $input.val().trim().toLowerCase();
  if (filter != $input.data('filter')) {
    $('[data-region]').each((i, ele) => {
      $(ele).toggle($(ele).find('.vacanciesTable__cell span').text().toLowerCase().includes(filter));
    });
    $input.data('filter', filter);
  }
});
