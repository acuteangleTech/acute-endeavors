// Initialize Owl Carousel for client section
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items: 2
      },
      600:{
        items: 3
      },
      1000:{
        items: 5
      }
    }
  });
}); 
$('.productSlider').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  smartSpeed: 700,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0
    },
    768: {
      items: 2,
      stagePadding: 10 // reduced padding = wider image
    },
    1200: {
      items: 3,
      stagePadding: 30
    }
  }
});
$('.clientSection .owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      stagePadding: 0
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
$(document).ready(function () {
  const $menu = $('.menu');
  const $menuItems = $('.menu__item-inner');
  const $mainMenuLinks = $('.mainmenu__item');
  const $sideMenuItems = $('.sidemenu__item-inner');
  const $openBtn = $('.action--menu');
  const $closeBtn = $('.action--close');

  // Function to open menu
  $openBtn.on('click', function () {
    $menu.addClass('menu--open');

    // Slide in menu items
    $menuItems.each(function (i) {
      $(this).delay(100 * i).animate({
        transform: 'translate3d(0,0,0)'
      }, {
        duration: 500,
        step: function (now, fx) {
          $(this).css('transform', 'translate3d(0,0,0)');
        }
      });
    });

    // Fade in menu links
    $mainMenuLinks.each(function (i) {
      $(this).delay(200 * i).animate({ opacity: 1 }, 500);
    });

    $sideMenuItems.each(function (i) {
      $(this).delay(300 * i).animate({ transform: 'translate3d(0,0,0)' }, {
        duration: 500,
        step: function (now, fx) {
          $(this).css('transform', 'translate3d(0,0,0)');
        }
      });
    });

    // Show close button
    $closeBtn.css('opacity', 1);
  });

  // Function to close menu
  $closeBtn.on('click', function () {
    $menu.removeClass('menu--open');

    // Reset transforms and opacities
    $menuItems.css('transform', 'translate3d(100%,0,0)');
    $mainMenuLinks.css('opacity', 0);
    $sideMenuItems.css('transform', 'translate3d(0,100%,0)');

    // Hide close button
    $closeBtn.css('opacity', 0);
  });
});

$(document).ready(function () {
  const $menu = $('.menu');
  const $menuItems = $('.menu__item-inner');
  const $mainMenuLinks = $('.mainmenu__item');
  const $sideMenuItems = $('.sidemenu__item-inner');
  const $openBtn = $('.action--menu');
  const $closeBtn = $('.action--close');

  // Function to open menu
  $openBtn.on('click', function () {
    $menu.addClass('menu--open');

    // Slide in menu items
    $menuItems.each(function (i) {
      $(this).delay(100 * i).animate({
        transform: 'translate3d(0,0,0)'
      }, {
        duration: 500,
        step: function (now, fx) {
          $(this).css('transform', 'translate3d(0,0,0)');
        }
      });
    });

    // Fade in menu links
    $mainMenuLinks.each(function (i) {
      $(this).delay(200 * i).animate({ opacity: 1 }, 500);
    });

    $sideMenuItems.each(function (i) {
      $(this).delay(300 * i).animate({ transform: 'translate3d(0,0,0)' }, {
        duration: 500,
        step: function (now, fx) {
          $(this).css('transform', 'translate3d(0,0,0)');
        }
      });
    });

    // Show close button
    $closeBtn.css('opacity', 1);
  });

  // Function to close menu
  $closeBtn.on('click', function () {
    $menu.removeClass('menu--open');

    // Reset transforms and opacities
    $menuItems.css('transform', 'translate3d(100%,0,0)');
    $mainMenuLinks.css('opacity', 0);
    $sideMenuItems.css('transform', 'translate3d(0,100%,0)');

    // Hide close button
    $closeBtn.css('opacity', 0);
  });
});
