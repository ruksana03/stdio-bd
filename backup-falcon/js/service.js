
// services.js - Services page dynamic content (Updated)

const servicesData = {
    hero: {
        title: "We Build Modern, Responsive & High-Converting Digital Experiences.",
        subtitle: "From Figma to Fully Responsive Website — Everything in One Place."
    }
};

function loadServicesContent() {
    // Update hero title
    const heroTitle = document.querySelector('.bg-dark .display-4');
    if(heroTitle && heroTitle.textContent !== servicesData.hero.title) {
        heroTitle.textContent = servicesData.hero.title;
    }
    
    // Update hero subtitle
    const heroSubtitle = document.querySelector('.bg-dark .lead');
    if(heroSubtitle && heroSubtitle.textContent !== servicesData.hero.subtitle) {
        heroSubtitle.textContent = servicesData.hero.subtitle;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadServicesContent();
});