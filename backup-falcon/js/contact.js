        // Form submission handler
        document.getElementById('contactForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName')?.value;
            const email = document.getElementById('contactEmail')?.value;
            const message = document.getElementById('contactMessage')?.value;
            
            if(name && email && message) {
                // Save to localStorage
                const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
                messages.push({
                    id: Date.now(),
                    name: name,
                    email: email,
                    phone: document.getElementById('contactPhone')?.value || '',
                    subject: document.getElementById('contactSubject')?.value || '',
                    message: message,
                    date: new Date().toISOString()
                });
                localStorage.setItem('contactMessages', JSON.stringify(messages));
                
                alert('Thank you! Your message has been sent. We will contact you soon.');
                this.reset();
            } else {
                alert('Please fill all required fields.');
            }
        });
    