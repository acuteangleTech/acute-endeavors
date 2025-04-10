document.addEventListener('DOMContentLoaded', function () {
  // Owl Carousel Init
  if (typeof jQuery !== 'undefined') {
      // Main Carousel
      $('.owl-main-carousel').owlCarousel({
          margin: 10,
          nav: false,
          dots: false,
          loop: true,
          autoplay: true,
          autoplayTimeout: 1700,
          autoplayHoverPause: true,
          responsive: {
              0: { items: 2 },
              600: { items: 3 },
              1000: { items: 5 }
          }
      });

      // Loop Carousel
      $('.owl-loop-carousel').owlCarousel({
          loop: true,
          margin: 55,
          autoplay: true,
          nav: false,
          dots: false,
          responsive: {
              0: { items: 1.5, margin: 15 },
              800: { items: 2.5 }
          }
      });
  }

  // Portfolio Filter Gallery
  $('.hidden').css('display', 'none');
  $("#filter button").each(function () {
      $(this).on("click", function () {
          var filter = $(this).attr('class');
          if (filter === 'all') {
              $('.hidden').contents().appendTo('#posts').hide().show('slow');
          } else {
              $('.post').appendTo('.hidden');
              $('.hidden').contents().appendTo('#posts').hide().show('slow');
              $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
          }
          $("#filter button").removeClass('active');
          $(this).addClass('active');
          $("#filter button").attr("disabled", false);
          $(this).attr("disabled", true);
      });
  });

  // GSAP Menu and Tilt Animation
  var menuItem = $(".menu-item");
  var menuImage = $(".menu-image");

  menuItem.each(function (index, element) {
      var item = $(element);
      var image = item.find(".menu-image");
      
      item.on("mouseenter", function () {
          menuImage.removeClass("active");
          image.addClass("active");
      });
      
      item.on("mousemove", function (e) {
          var x = e.pageX;
          var y = e.pageY;
          TweenMax.to(".menu-image.active", 0.5, {
              left: x - 350,
              top: y - 250
          });
      });
      
      item.on("mouseleave", function () {
          TweenMax.to(".menu-image", 0.5, {
              left: 0,
              top: 0
          });
      });
  });

  // Tilt Effect
  const tilt = $('.tilt');
  const image = $(".img-tilt");

  $(window).on('mousemove', function (e) {
      const x = e.clientX;
      const y = e.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;
      
      TweenMax.to(tilt, 1, {
          x: offsetX * 50,
          y: offsetY * 50,
          ease: Power4.easeOut
      });
      
      TweenMax.to(image, 1, {
          backgroundPosition: `${50 + offsetX * 10}% ${50 + offsetY * 10}%`,
          ease: Power4.easeOut
      });
  });

  // Lazy Loading Implementation
  const lazyloadRunObserver = () => {
      const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
      const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  let lazyloadBackground = entry.target;
                  if (lazyloadBackground) {
                      lazyloadBackground.classList.add('e-lazyloaded');
                  }
                  lazyloadBackgroundObserver.unobserve(entry.target);
              }
          });
      }, { rootMargin: '200px 0px 200px 0px' });
      lazyloadBackgrounds.forEach((lazyloadBackground) => {
          lazyloadBackgroundObserver.observe(lazyloadBackground);
      });
  };

  const events = [
      'DOMContentLoaded',
      'elementor/lazyload/observe',
  ];
  events.forEach((event) => {
      document.addEventListener(event, lazyloadRunObserver);
  });

  // W3 Total Cache Lazy Load
  window.w3tc_lazyload = 1;
  window.lazyLoadOptions = {
      elements_selector: ".lazy",
      callback_loaded: function(t) {
          var e;
          try {
              e = new CustomEvent("w3tc_lazyload_loaded", { detail: { e: t } });
          } catch (a) {
              (e = document.createEvent("CustomEvent")).initCustomEvent("w3tc_lazyload_loaded", !1, !1, { e: t });
          }
          window.dispatchEvent(e);
      }
  };

  // Menu Toggle Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.action--menu');
    const closeButton = document.querySelector('.action--close');
    const menu = document.querySelector('.menu');
    
    if (menuButton && closeButton && menu) {
      // Open menu
      menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        menu.classList.add('menu--open');
        document.body.style.overflow = 'hidden';
        console.log('Menu opened');
      });
      
      // Close menu
      closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        menu.classList.remove('menu--open');
        document.body.style.overflow = '';
        console.log('Menu closed');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (menu.classList.contains('menu--open') && 
            !menu.contains(e.target) && 
            !menuButton.contains(e.target)) {
          menu.classList.remove('menu--open');
          document.body.style.overflow = '';
          console.log('Menu closed by outside click');
        }
      });
      
      // Close menu on escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('menu--open')) {
          menu.classList.remove('menu--open');
          document.body.style.overflow = '';
          console.log('Menu closed by escape key');
        }
      });
      
      // Prevent menu from closing when clicking inside it
      menu.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    } else {
      console.error('Menu elements not found:', {
        menuButton: !!menuButton,
        closeButton: !!closeButton,
        menu: !!menu
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoFrames = document.querySelectorAll('.video-frame');

  document.getElementById('videoCarousel').addEventListener('slide.bs.carousel', function () {
    for (var i = 0; i < videoFrames.length; i++) {
      var videoFrame = videoFrames[i];
      var videoSrc = videoFrame.src;
      videoFrame.src = '';
      videoFrame.src = videoSrc;
    }
  });
});

$(document).ready(function () {
  // =======================
  // Disable Right Click on About Page
  // =======================
  $(".page-template-page-about").on("contextmenu", function (e) {
    return false;
  });

  // Initialize Owl Carousel for portfolio
  $("#portfolioCarousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items: 1
          },
          576:{
              items: 2
          },
          768:{
              items: 3
          },
          992:{
              items: 4
          }
      }
  });
});

// =======================
// Tawk.to Live Chat Widget
// =======================
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/643e0cc14247f20fefea49ba/1gu0d7osf';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

// =======================
// WhatsApp Chat Button
// =======================
// (function () {
//     var options = {
//       whatsapp: "+971526997343",
//       call_to_action: "Message us",
//       position: "right"
//     };
//     var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
//     var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
//     s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
//     var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
// })();
// (function () {
//     var options = {
//         whatsapp: "+971526997343", // WhatsApp number
//         call: "+971526997343",     // Phone number
//         call_to_action: "Contact us", 
//         button_color: "#FF6550",
//         position: "right", 
//         order: "whatsapp,call"
//     };
//     var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
//     var s = document.createElement('script'); 
//     s.type = 'text/javascript'; 
//     s.async = true; 
//     s.src = url + '/widget-send-button/js/init.js';
//     s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
//     var x = document.getElementsByTagName('script')[0]; 
//     x.parentNode.insertBefore(s, x);
// })();
$(document).ready(function () {
$(".projectSlider").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 }
  }
});

$(".productSlider").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 }
  }
});
});


// Image loading functionality
document.addEventListener("DOMContentLoaded", function() {
// Initialize lazy loading for all images
const lazyImages = document.querySelectorAll("img.lazy");

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(function(img) {
    imageObserver.observe(img);
  });
} else {
  // Fallback for browsers that don't support IntersectionObserver
  lazyImages.forEach(function(img) {
    img.src = img.dataset.src;
    img.classList.remove("lazy");
  });
}
});

// Initialize Owl Carousel
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive:{
    0:{
      items: 1
    },
    576:{
      items: 2
    },
    768:{
      items: 3
    },
    992:{
      items: 4
    }
  }
});
});

// Testimonial Carousel Configuration
$(document).ready(function(){
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        margin: 15
      },
      768: {
        items: 2,
        margin: 20
      },
      992: {
        items: 3,
        margin: 30
      }
    }
  });

  // Add laptop mockup hover effect
  $('.testimonial-carousel .item').hover(
    function() {
      $(this).addClass('hover');
    },
    function() {
      $(this).removeClass('hover');
    }
  );
});