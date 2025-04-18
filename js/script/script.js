$(document).ready(function () {
  const $menu = $('.menu');
  const $menuItems = $('.menu__item-inner');
  const $mainMenuLinks = $('.mainmenu__item');
  const $sideMenuItems = $('.sidemenu__item-inner');
  const $openBtn = $('.action--menu');
  const $closeBtn = $('.action--close');
  const $mobileNav = $('.mobileBottomNav'); // ✅ Target full mobile nav section

  // Function to open menu
  $openBtn.on('click', function () {
    $menu.addClass('menu--open');

    // ✅ Hide the entire mobile navbar section only on mobile screens (less than 768px)
    if ($(window).width() < 768) {
      $mobileNav.hide();
    }

    // Animate menu items
    $menuItems.each(function (i) {
      $(this).delay(100 * i).animate({
        transform: 'translate3d(0,0,0)'
      }, {
        duration: 500,
        step: function () {
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
        step: function () {
          $(this).css('transform', 'translate3d(0,0,0)');
        }
      });
    });

    $closeBtn.css('opacity', 1);
  });

  // Function to close menu
  $closeBtn.on('click', function () {
    $menu.removeClass('menu--open');

    // ✅ Show mobile navbar section only on mobile screens (less than 768px)
    if ($(window).width() < 768) {
      $mobileNav.show();
    }

    $menuItems.css('transform', 'translate3d(100%,0,0)');
    $mainMenuLinks.css('opacity', 0);
    $sideMenuItems.css('transform', 'translate3d(0,100%,0)');
    $closeBtn.css('opacity', 0);
  });

  // Additional logic to ensure mobile navbar does not appear on desktop screens
  $(window).on('resize', function () {
    if ($(window).width() >= 768) {
      $mobileNav.hide(); // Hide mobile navbar on desktop screens
    }
  });
});
