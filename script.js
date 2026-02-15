// Initialize Lucide Icons
lucide.createIcons();

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// Reveal Animations
const revealElements = document.querySelectorAll('.reveal-up');

revealElements.forEach((element) => {
    gsap.fromTo(element, 
        { 
            y: 30,
            opacity: 0 
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});