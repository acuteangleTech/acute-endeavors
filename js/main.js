// Contact Form Handler
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you can add your form submission logic
    // For example, sending to an email service or API
    
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear the form
    this.reset();
    
    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    modal.hide();
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarCollapse.classList.remove('show');
            });
        });
    }
}); 