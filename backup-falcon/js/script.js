// index.js - Home page dynamic content (Updated)
const homeData = {
    hero: {
        description: `Falcon Design & Development Agency is a modern creative digital agency specializing in UI/UX design, responsive web development, and both front-end and backend development solutions. We transform ideas into visually stunning and highly functional digital products using clean design principles and the latest technologies. From Figma to fully responsive websites and full-stack web applications, we deliver pixel-perfect, scalable, and performance-optimized solutions that ensure smooth user experience, strong functionality, and a powerful digital presence for businesses and individuals. We help you build a strong brand identity with professional documents and presentation designs that improve your business credibility and enhance your sustainability.`
    },
    // Fixed: Added missing services array required by the map function
    services: [
        { icon: "fa-laptop-code", title: "Web Development", description: "Responsive and scalable full-stack applications.", link: "#" },
        { icon: "fa-paint-brush", title: "UI/UX Design", description: "Stunning, human-centered designs from Figma to reality.", link: "#" },
        { icon: "fa-file-invoice", title: "Brand Identity", description: "Professional documents and presentation designs.", link: "#" }
    ]
}; // Fixed: Added missing closing brace and semicolon for homeData

function loadHomeContent() {
    // Update hero paragraph - ONLY if not already updated
    const heroParagraph = document.querySelector('.hero-spacer .bg-light .text p');
    if(heroParagraph && heroParagraph.textContent !== homeData.hero.description) {
        heroParagraph.textContent = homeData.hero.description;
    }

    // Add services section if not exists
    if(!document.getElementById('dynamic-services') && document.querySelector('.hero-spacer')) {
        const servicesSection = `
            <section class="py-5 bg-light" id="dynamic-services">
                <div class="container">
                    <h2 class="text-center mb-5 fw-bold">Our Services</h2>
                    <div class="row" id="services-container"></div>
                </div>
            </section>
        `;
        document.querySelector('.hero-spacer').insertAdjacentHTML('afterend', servicesSection);
    }

    // Load services ONLY if container is empty
    const servicesContainer = document.getElementById('services-container');
    if(servicesContainer && servicesContainer.children.length === 0) {
        servicesContainer.innerHTML = homeData.services.map(service => `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm text-center p-4">
                    <i class="fas ${service.icon} fa-3x text-primary mb-3"></i>
                    <h5 class="fw-bold">${service.title}</h5>
                    <p class="text-secondary">${service.description}</p>
                    <a href="${service.link}" class="btn btn-outline-primary btn-sm">Learn More →</a>
                </div>
            </div>
        `).join('');
    }
}

function fixCarouselActive() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    if(carouselItems.length > 0 && !document.querySelector('.carousel-item.active')) {
        carouselItems[0].classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(!window.isContentLoaded) {
        loadHomeContent();
        fixCarouselActive();
        window.isContentLoaded = true;
    }
});
