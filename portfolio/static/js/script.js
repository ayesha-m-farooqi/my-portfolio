tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#582737',
                secondary: '#381b24',
                accent: '#67b49b',
                dark: '#1a362d',
                darker: '#2a584a',
                cream: '#f5f5f0'
            },
            fontFamily: {
                        sans: ['Inter', 'sans-serif'],}
        }
    }
}
 // Scroll reveal animation
const observerOptions = {
    threshold: 0.1,        
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-slate-900/95', 'shadow-lg');
            navbar.classList.remove('bg-slate-900/80');
            } else {
                navbar.classList.remove('bg-slate-900/95', 'shadow-lg');
                navbar.classList.add('bg-slate-900/80');
            }
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert("Thanks! Message sent successfully.");
        form.reset(); } 
    else { alert("Oops! There was a problem sending your message.");} 
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 right-8 bg-accent text-slate-900 px-6 py-4 rounded-xl font-semibold shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 flex items-center gap-2';
    toast.innerHTML = `
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Message sent successfully!
                `;
    document.body.appendChild(toast);
                
    setTimeout(() => { toast.classList.remove('translate-y-20', 'opacity-0'); }, 100);
                
    setTimeout(() => { toast.classList.add('translate-y-20', 'opacity-0'); setTimeout(() => toast.remove(), 300); }, 3000);
    });
            

        // Smooth scroll for anchor links
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