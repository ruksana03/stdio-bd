
// about.js - About page dynamic content (Updated)

const aboutData = {
    hero: {
        title: "Experience Falcon Service",
        subtitle: "Experience our revolutionary service today and transform the way you interact with your business across all devices.",
        description: `Falcon Design & Development Agency is a modern creative digital agency dedicated to building visually stunning, responsive, and high-performance digital experiences. We specialize in UI/UX design, front-end and backend development, branding, and creative design solutions that help businesses establish a strong online presence.

Our team combines creativity, strategy, and modern technologies to transform ideas into functional and impactful digital products. From Figma design to fully developed websites and web applications, we focus on delivering clean design, smooth user experience, and scalable solutions tailored to client needs.

At Falcon, we believe in innovation, quality, and attention to detail. Our mission is to help brands grow through modern design, smart development, and creative digital solutions that stand out in today's competitive world.`
    },
    features: [
        {
            icon: "fa-bolt",
            title: "Lightning Fast",
            description: "Experience unparalleled speed and performance with our optimized solutions."
        },
        {
            icon: "fa-lock",
            title: "Secure",
            description: "Your data is protected with state-of-the-art encryption and security protocols."
        },
        {
            icon: "fa-sync",
            title: "Easy Sync",
            description: "Seamlessly sync across all your devices with our cloud-based infrastructure."
        }
    ]
};

function loadAboutContent() {
    // Update hero title
    const heroTitle = document.querySelector('.hero h1');
    if(heroTitle && heroTitle.textContent !== aboutData.hero.title) {
        heroTitle.textContent = aboutData.hero.title;
    }
    
    // Update hero subtitle
    const heroSubtitle = document.querySelector('.hero .lead');
    if(heroSubtitle && heroSubtitle.textContent !== aboutData.hero.subtitle) {
        heroSubtitle.textContent = aboutData.hero.subtitle;
    }
    
    // Update hero description
    const heroDesc = document.querySelector('.hero .col-lg-6 > p:last-child');
    if(heroDesc && heroDesc.textContent !== aboutData.hero.description) {
        heroDesc.textContent = aboutData.hero.description;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAboutContent();
});