// Contact Form Event Listeners
document.addEventListener('wpcf7mailsent', function(event) {
    if (1113 == event.detail.contactFormId) {
        jQuery('body').append('<a id="cf7fd-attachment-link11131" href="wp-content/uploads/2024/02/E-Book-Webdesign.pdf" download="E-Book-Web design & Development"></a>');
        jQuery('#cf7fd-attachment-link11131')[0].click();
        setTimeout(function() {
            jQuery('#cf7fd-attachment-link11131').remove();
        }, 2000);
    }
}, false);

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

// Event Listeners for Lazy Loading
const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
];
events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});

// Elementor Frontend Configuration
var elementorFrontendConfig = {
    "environmentMode": {
        "edit": false,
        "wpPreview": false,
        "isScriptDebug": false
    },
    "i18n": {
        "shareOnFacebook": "Share on Facebook",
        "shareOnTwitter": "Share on Twitter",
        // ... other i18n configurations
    },
    "breakpoints": {
        "xs": 0,
        "sm": 480,
        "md": 768,
        "lg": 1025,
        "xl": 1440,
        "xxl": 1600
    }
    // ... other configurations
};