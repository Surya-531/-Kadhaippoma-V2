/* =========================================
   1. ANIMATION UTILITIES
   ========================================= */

// A. Helper: Wrap Heading Text for Animation
document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll('.section-heading');
    headings.forEach(h2 => {
        const text = h2.innerText;
        h2.innerHTML = `<span class="heading-text">${text}</span>`;
    });
});


/* =========================================
   2. SCROLL OBSERVERS
   ========================================= */
const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        } else {
            entry.target.classList.remove('slide-in');
        }
    });
}, { 
    threshold: 0.1 
});

// Start Observing
setTimeout(() => {
    const headTargets = document.querySelectorAll('.section-heading');
    headTargets.forEach(h => headingObserver.observe(h));
}, 100);