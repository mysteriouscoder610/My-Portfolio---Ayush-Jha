document.addEventListener("DOMContentLoaded", function () {
    // Navbar functionality
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
    });
    
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target) && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
    
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    

    // About Me Panel functionality
    const aboutBtn = document.getElementById("aboutBtn");
    const aboutPanel = document.getElementById("aboutPanel");
    const closeAboutBtn = document.getElementById("closeAboutBtn");

    aboutBtn.addEventListener("click", function () {
        aboutPanel.classList.toggle("active");
    });

    closeAboutBtn.addEventListener("click", function () {
        aboutPanel.classList.remove("active");
    });

    // Close panel when clicking outside
    document.addEventListener("click", function (event) {
        if (!aboutPanel.contains(event.target) && !aboutBtn.contains(event.target) && aboutPanel.classList.contains("active")) {
            aboutPanel.classList.remove("active");
        }
    });

    // Particle.js configuration
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top
const scrollToTopButton = document.getElementById('scrollToTop');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Dark mode toggle
// const darkModeToggle = document.getElementById('darkModeToggle');
// const body = document.body;

// darkModeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     const isDarkMode = body.classList.contains('dark-mode');
//     darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
// });

// Scroll animation for sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    function typeWriterEffect(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.style.borderRight = "none"; // Remove cursor effect after animation
            }
        }
        type();
    }

    // Target the elements
    const heading = document.getElementById("animatedHeading");
    const subtext = document.getElementById("animatedSubtext");

    // Store original text & clear for animation effect
    const headingText = heading.textContent;
    const subtextText = subtext.textContent;
    heading.textContent = "";
    subtext.textContent = "";

    // Apply typing effect with delay
    setTimeout(() => typeWriterEffect(heading, headingText, 100), 500);
    setTimeout(() => typeWriterEffect(subtext, subtextText, 50), 2500);
});

document.querySelectorAll('.social-icon a').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Link clicked:', this.href);
    });
});