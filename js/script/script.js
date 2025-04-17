// Initialize Owl Carousel for client section
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoHeight: true,
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
  autoHeight: true,
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
<<<<<<< HEAD
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
=======
  const $sideMenuLinks = $('.sidemenu__item-inner');
  const $openBtn = $('.action--menu, .action-menu');
  const $closeBtn = $('.action--close');
  const $body = $('body');
  const $mobileNav = $('.mobileBottomNav');

  // Function to open menu
  function openMenu() {
    $menu.addClass('menu--open');
    $body.addClass('nav-active');
    $body.css('overflow', 'hidden');
    
    // Only hide mobile nav on mobile screens
    if ($(window).width() < 768) {
      $mobileNav.fadeOut(300);
    }

    // Slide in menu items with improved animation
    $menuItems.each(function (i) {
      $(this).css({
        'transform': 'translate3d(0,0,0)',
        'transition': 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ' + (i * 0.1) + 's'
      });
    });

    // Fade in menu links with improved timing
    $mainMenuLinks.each(function (i) {
      $(this).css({
        'opacity': '1',
        'transition': 'opacity 0.5s ease ' + (i * 0.1) + 's'
      });
    });

    $sideMenuLinks.each(function (i) {
      $(this).css({
        'transform': 'translate3d(0,0,0)',
        'transition': 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ' + (i * 0.1) + 's'
      });
    });

    // Show close button with fade effect
    $closeBtn.css({
      'opacity': '1',
      'transition': 'opacity 0.3s ease',
      'pointer-events': 'auto'
    });
  }

  // Function to close menu
  function closeMenu() {
    $menu.removeClass('menu--open');
    $body.removeClass('nav-active');
    $body.css('overflow', '');
    
    // Only show mobile nav on mobile screens
    if ($(window).width() < 768) {
      $mobileNav.fadeIn(300);
    }

    // Reset transforms and opacities with transitions
    $menuItems.css({
      'transform': 'translate3d(100%,0,0)',
      'transition': 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    });

    $mainMenuLinks.css({
      'opacity': '0',
      'transition': 'opacity 0.5s ease'
    });

    $sideMenuLinks.css({
      'transform': 'translate3d(0,100%,0)',
      'transition': 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    });

    // Hide close button with fade effect
    $closeBtn.css({
      'opacity': '0',
      'transition': 'opacity 0.3s ease',
      'pointer-events': 'none'
    });
  }

  // Event listeners with improved touch handling
  $openBtn.on('click touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!$menu.hasClass('menu--open')) {
      openMenu();
    }
  });

  $closeBtn.on('click touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if ($menu.hasClass('menu--open')) {
      closeMenu();
    }
  });

  // Close menu when clicking outside
  $(document).on('click touchstart', function(e) {
    if ($menu.hasClass('menu--open') && 
        !$(e.target).closest('.menu').length && 
        !$(e.target).closest('.action--menu').length &&
        !$(e.target).closest('.action-menu').length) {
      closeMenu();
    }
  });

  // Close menu on escape key
  $(document).on('keyup', function(e) {
    if (e.key === 'Escape' && $menu.hasClass('menu--open')) {
      closeMenu();
    }
  });

  // Initialize menu state
  if ($menu.hasClass('menu--open')) {
    $body.css('overflow', 'hidden');
    if ($(window).width() < 768) {
      $mobileNav.hide();
    }
  } else {
    if ($(window).width() >= 768) {
      $mobileNav.hide();
      $('.action--menu').show();
    } else {
      $mobileNav.show();
      $('.action--menu').hide();
    }
  }

  // Handle screen resize
  $(window).on('resize', function() {
    if ($(window).width() >= 768) {
      $mobileNav.hide();
      $('.action--menu').show();
    } else {
      if (!$menu.hasClass('menu--open')) {
        $mobileNav.show();
        $('.action--menu').hide();
      }
    }
>>>>>>> f04be7fe6715965149a40c78c5171e97a788e2df
  });
});
