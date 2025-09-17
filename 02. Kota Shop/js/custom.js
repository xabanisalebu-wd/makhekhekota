tailwind.config = {
    theme: {
        extend: {
            colors: {
                'kota-yellow': '#FFC300',
                'kota-brown': '#5C4033',
                'kota-red': '#E63946',
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Poppins', 'sans-serif'],
            }
        }
    }
}

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Food card hover effect
const foodCards = document.querySelectorAll('.food-card');
foodCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.price-hidden').classList.remove('opacity-0');
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.price-hidden').classList.add('opacity-0');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});




