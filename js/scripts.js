// =====================================================
//  COMPLIANCE CONSULTING INC. — SCRIPTS
// =====================================================

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.endsWith(href.replace(/^(\.\.\/)+/, ''))) {
            link.classList.add('active');
        }
    });

    // Animate elements on scroll using IntersectionObserver
    const animatedEls = document.querySelectorAll('.animate-on-scroll');

    if (animatedEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedEls.forEach(el => observer.observe(el));
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact form: show a simple thank-you message on success
// (Formspree handles backend; this enhances UX for JS-capable browsers)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const btn = contactForm.querySelector('button[type="submit"]');
        if (btn) {
            btn.disabled = true;
            btn.textContent = 'Sending…';
        }
    });
}
