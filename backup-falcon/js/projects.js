
// projects.js - Projects page dynamic content (Updated)

let projects = [];

function loadProjects() {
    const saved = localStorage.getItem('falconProjects');
    if(saved) {
        projects = JSON.parse(saved);
    } else {
        projects = [
            {
                id: 1,
                title: "Modern E-Commerce Platform",
                category: "Web Development",
                description: "A fully responsive e-commerce website with product filtering, shopping cart, and secure checkout system.",
                features: ["Responsive design for all devices", "Advanced product filtering and search", "Shopping cart with quantity management"],
                image: "assets/e commerce.png"
            },
            {
                id: 2,
                title: "Corporate Business Website",
                category: "UI/UX Design",
                description: "Professional corporate website design with modern layout, smooth animations, and optimized user experience.",
                features: ["Modern and professional design", "Smooth scroll animations", "Fully responsive and mobile-friendly"],
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            },
            {
                id: 3,
                title: "Figma to HTML Conversion",
                category: "Front-End Development",
                description: "Pixel-perfect conversion of Figma design to clean, semantic HTML/CSS code with Bootstrap framework.",
                features: ["100% pixel-perfect conversion", "W3C validated HTML/CSS", "Cross-browser compatible"],
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c"
            },
            {
                id: 4,
                title: "Creative Portfolio Website",
                category: "Web Design",
                description: "Modern portfolio website for creative professionals showcasing work, skills, and client testimonials.",
                features: ["Custom grid layout for projects", "Interactive hover effects", "Contact form integration"],
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
            },
            {
                id: 5,
                title: "Admin Dashboard UI Design",
                category: "UI Design",
                description: "Clean and functional admin dashboard interface with charts, tables, and data visualization components.",
                features: ["Responsive dashboard layout", "Data visualization charts", "User management interface"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            },
            {
                id: 6,
                title: "High-Converting Landing Page",
                category: "Landing Page Design",
                description: "Conversion-focused landing page design with engaging copy, call-to-action buttons, and lead capture forms.",
                features: ["SEO optimized structure", "Mobile-first design approach", "Lead capture form integration"],
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
            }
        ];
        saveProjects();
    }
}

function saveProjects() {
    localStorage.setItem('falconProjects', JSON.stringify(projects));
}

function renderProjects() {
    // Remove existing dynamic project sections
    const existingProjects = document.querySelectorAll('.dynamic-project');
    existingProjects.forEach(el => el.remove());
    
    // Find where to insert projects (after hero section)
    const heroSection = document.querySelector('.py-4.py-md-5.text-center');
    if(!heroSection) return;
    
    // Insert each project
    projects.forEach((project, index) => {
        const isReverse = index % 2 === 1;
        const projectHTML = `
            <section class="py-3 dynamic-project" data-project-id="${project.id}">
                <div class="container">
                    <div class="card border-0 rounded-4 overflow-hidden shadow-sm mb-4">
                        <div class="row g-0 ${isReverse ? 'flex-md-row-reverse' : ''}">
                            <div class="col-md-4">
                                <img src="${project.image}" class="img-fluid w-100 h-100" style="object-fit: cover; min-height: 250px;" alt="${project.title}" onerror="this.src='https://placehold.co/500x350/1a1a2e/5aaaaa?text=${encodeURIComponent(project.title)}'">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body p-4">
                                    <h3 class="fw-bold mb-2">${project.title}</h3>
                                    <span class="badge bg-secondary mb-3">${project.category}</span>
                                    <p class="card-text text-secondary">${project.description}</p>
                                    <ul class="text-secondary">
                                        ${project.features.map(f => `<li>${f}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        
        // Insert after hero section
        heroSection.insertAdjacentHTML('afterend', projectHTML);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    renderProjects();
});