
// team.js - Team page dynamic content (Fixed - no double image)

let teamMembers = [];

function loadTeamMembers() {
    const saved = localStorage.getItem('falconTeam');
    if(saved) {
        teamMembers = JSON.parse(saved);
    } else {
        teamMembers = [
            {
                /*

                id: 1,
                name: "Al Fitar Ahmed Siam",
                designation: "Responsive Web Designer",
                badge: "NSDA Level 3",
                skills: ["Responsive Design", "Bootstrap Expert", "Tailwind CSS"],
                description: "NSDA Level 3 certified professional expert in creating modern, responsive websites with Bootstrap and Tailwind CSS. Passionate about clean code and pixel-perfect designs.",
                image: "assets/siam.png",
                social: { facebook: "#", twitter: "#", linkedin: "https://www.linkedin.com/feed/" }
            },
            {
                id: 2,
                name: "Tasin Rahman Akash",
                designation: "JavaScript Expert",
                badge: "NSDA Level 3",
                skills: ["JavaScript", "React.js", "Interactive Features"],
                description: "NSDA Level 3 certified professional specializing in creating dynamic, interactive web experiences with modern JavaScript frameworks and smooth animations.",
                image: "assets/tasin.png",
                social: { facebook: "#", twitter: "#", github: "#" }
            },
            {
                id: 3,
                name: "Tanvir Fahad",
                designation: "UI/UX & Graphic Designer",
                badge: "NSDA Level 3",
                skills: ["Figma Expert", "UI/UX Design", "Graphic Design"],
                description: "NSDA Level 3 certified creative designer specializing in modern UI/UX design, Figma prototypes, and stunning graphic design that captures brand identity.",
                image: "assets/tanvir.png",
                social: { behance: "#", dribbble: "#", linkedin: "#" }
            },
            {
                id: 4,
                name: "Rimon Mojumder",
                designation: "Customization & Optimization Expert",
                badge: "NSDA Level 3",
                skills: ["Less Memory Usage", "Customization", "Performance Optimization"],
                description: "NSDA Level 3 certified professional specializing in optimizing websites for less memory usage, custom modifications, and performance tuning for faster load times.",
                image: "assets/rimon.png",
                social: { facebook: "#", twitter: "#", github: "#" }
            }
        ];
        saveTeamMembers();
    }
}
    */

function saveTeamMembers() {
    localStorage.setItem('falconTeam', JSON.stringify(teamMembers));
}

function renderTeamMembers() {
    // Find team container
    const teamContainer = document.querySelector('.py-5 > .container');
    if(!teamContainer) return;
    
    // Remove existing dynamic team rows (keep header)
    const existingRows = teamContainer.querySelectorAll('.team-members-row');
    existingRows.forEach(row => row.remove());
    
    // Create container for all team cards
    const teamCardsContainer = document.createElement('div');
    teamCardsContainer.className = 'team-members-row';
    
    // Create rows with 2 members each
    for(let i = 0; i < teamMembers.length; i += 2) {
        const row = document.createElement('div');
        row.className = 'row mb-4';
        
        // First member
        row.appendChild(createMemberCard(teamMembers[i]));
        
        // Second member if exists
        if(teamMembers[i+1]) {
            row.appendChild(createMemberCard(teamMembers[i+1]));
        }
        
        teamCardsContainer.appendChild(row);
    }
    
    teamContainer.appendChild(teamCardsContainer);
}

function createMemberCard(member) {
    const col = document.createElement('div');
    col.className = 'col-lg-6 mb-4';
    
    // Generate social icons
    const socialIcons = Object.entries(member.social).map(([platform, link]) => {
        let iconClass = '';
        if(platform === 'facebook') iconClass = 'fab fa-facebook-f';
        else if(platform === 'twitter') iconClass = 'fab fa-twitter';
        else if(platform === 'linkedin') iconClass = 'fab fa-linkedin-in';
        else if(platform === 'github') iconClass = 'fab fa-github';
        else if(platform === 'behance') iconClass = 'fab fa-behance';
        else if(platform === 'dribbble') iconClass = 'fab fa-dribbble';
        else iconClass = `fab fa-${platform}`;
        
        return `<a href="${link}" class="btn btn-sm btn-outline-secondary rounded-circle" style="width: 34px; height: 34px;" target="_blank"><i class="${iconClass}"></i></a>`;
    }).join('');
    
    col.innerHTML = `
        <div class="card border-0 shadow-sm h-100">
            <div class="row g-0">
                <div class="col-md-5">
                    <img src="${member.image}" class="img-fluid rounded-start w-100" style="min-height: 280px; object-fit: cover;" alt="${member.name}" onerror="this.src='https://placehold.co/400x350/2d2d2d/white?text=${member.name.split(' ')[0]}'">
                </div>
                <div class="col-md-7">
                    <div class="card-body p-4">
                        <div class="d-flex align-items-center justify-content-between flex-wrap mb-2">
                            <h4 class="fw-bold mb-0">${member.name}</h4>
                            <span class="badge bg-primary mt-1 mt-sm-0">${member.badge}</span>
                        </div>
                        <h6 class="text-primary mb-3">${member.designation}</h6>
                        <div class="d-flex flex-wrap gap-2 mb-3">
                            ${member.skills.map(s => `<span class="badge bg-secondary">${s}</span>`).join('')}
                        </div>
                        <p class="text-secondary small">${member.description}</p>
                        <div class="d-flex gap-2 mt-3">
                            ${socialIcons}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

document.addEventListener('DOMContentLoaded', () => {
    loadTeamMembers();
    renderTeamMembers();
});