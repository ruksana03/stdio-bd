
// main.js - Common functions for all pages (Updated)

let websiteData = {
    contact: {
        phone: "+880 1752350135",
        email: "fitarsiam@gmail.com",
        address: "Dhaka, Bangladesh",
        workingHours: "Sat - Thu: 10:00 AM - 7:00 PM"
    },
    social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
        github: "#"
    },
    footer: {
        tagline: "Next‑generation digital agency delivering high-end design, development, and brand strategy.",
        copyright: "2026 Falcon Design & Development Agency. All rights reserved."
    }
};

// Flag to prevent duplicate loading
window.isContentLoaded = window.isContentLoaded || false;

function loadSavedData() {
    const saved = localStorage.getItem('falconAgencyData');
    if(saved) {
        try {
            const parsed = JSON.parse(saved);
            Object.assign(websiteData, parsed);
        } catch(e) {
            console.warn('Error loading saved data');
        }
    }
}

function saveData() {
    localStorage.setItem('falconAgencyData', JSON.stringify(websiteData));
}

function updateFooter() {
    const footer = document.querySelector('footer');
    if(!footer) return;
    
    // Update address
    const addressElement = footer.querySelector('.fa-map-marker-alt')?.closest('.d-flex')?.querySelector('p');
    if(addressElement && addressElement.classList.contains('text-white-50')) {
        addressElement.textContent = websiteData.contact.address;
    }
    
    // Update phone
    const phoneElement = footer.querySelector('.fa-phone-alt')?.closest('.d-flex')?.querySelector('p');
    if(phoneElement && phoneElement.classList.contains('text-white-50')) {
        phoneElement.textContent = websiteData.contact.phone;
    }
    
    // Update email
    const emailElement = footer.querySelector('.fa-envelope')?.closest('.d-flex')?.querySelector('p');
    if(emailElement && emailElement.classList.contains('text-white-50')) {
        emailElement.textContent = websiteData.contact.email;
    }
}

function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if(existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    updateFooter();
});