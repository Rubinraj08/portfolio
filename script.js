// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .stat, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        this.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
        padding: 0;
        line-height: 1;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
document.head.appendChild(style);

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Skill progress animation
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'scale(1.05)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}

// Trigger skill animation when skills section is in view
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is in view
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Resume Modal Functionality
const resumeModal = document.getElementById('resumeModal');
const resumeBtn = document.getElementById('resumeBtn');
const resumeBtnContact = document.getElementById('resumeBtnContact');
const closeBtn = document.querySelector('.close');

// Open modal when resume button is clicked
if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
        resumeModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

if (resumeBtnContact) {
    resumeBtnContact.addEventListener('click', () => {
        resumeModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

// Close modal when X is clicked
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        resumeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === resumeModal) {
        resumeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && resumeModal.style.display === 'block') {
        resumeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Download functionality
const downloadPDF = document.getElementById('downloadPDF');
const downloadTXT = document.getElementById('downloadTXT');

// Download as PDF
if (downloadPDF) {
    downloadPDF.addEventListener('click', () => {
        // Create a link to the existing PDF file
        const link = document.createElement('a');
        link.href = 'Rubinraj_resume.pdf';
        link.download = 'Rubinraj_M_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification('Resume PDF downloaded successfully!', 'success');
    });
}

// Download as TXT
if (downloadTXT) {
    downloadTXT.addEventListener('click', () => {
        // Create resume content as text
        const resumeText = `RUBINRAJ M
(+91) 7010692978 | rubinrajrubinraj7@gmail.com
LinkedIn: https://www.linkedin.com/in/rubin-raj-web/
GitHub: https://github.com/Rubinraj08

EDUCATION
==========
B.E – Computer Science and Engineering (2022-Present)
Karpagam Institute of Technology, Coimbatore
CGPA: 7.23

HSC
Sri Vivekananda Matric Higher Secondary School
Percentage: 87%

SSLC (2018-2019)
Sri Vivekananda Matric Higher Secondary School
Percentage: 86%

CERTIFICATIONS
==============
AWS Certified Cloud Practitioner
Amazon Web Services (AWS) — Earned [04, 2025]
Exam Code: CLF-C02

Data Structures in Java Programming (Nov 2024)
NPTEL | Great Learning
• Topics includes Basic java syntax, Data Structure, Java collection framework and Basic oops concept
• Proficient in Logical Thinking and Programming in Java

AWS Academy Graduate - AWS Academy Cloud Foundations (Oct 2024)
• Introduces AWS global infrastructure, networking, storage, and computing services

AWS Cloud Practitioner Essentials (Feb 2025)
• Covers AWS core services, pricing models, security, and cloud computing fundamentals

PROJECTS
=========
1. Slide Control using Hand Gesture
The system uses OpenCV and AI tools to detect hand gestures in real-time for controlling presentations. It recognizes predefined movements like swipes, holds, and pointing. Gestures enable users to move slides forward, backward, or pause without physical input. This improves interactivity and enhances user experience. Users can draw, annotate, or highlight on a virtual canvas using hand gestures. This is ideal for live teaching, brainstorming, or design activities. The project combines OpenCV for computer vision and AI frameworks like TensorFlow for gesture recognition. It demonstrates efficient touch-free human-computer interaction.

2. A Serverless E-commerce Website
Built a lightweight e-commerce platform using AWS (Lambda, API Gateway, DynamoDB) to handle product listings, shopping cart, and order processing. Scalable & Serverless Architecture – Designed and deployed a fully serverless solution with API Gateway-powered Lambda functions for product management and order storage. Frontend & Hosting – Developed a simple HTML/JavaScript frontend and hosted it on AWS S3, enabling dynamic product fetching and seamless checkout.

3. 2048 Game Deployment on AWS (EKS + ALB + Ingress)
Deployed the classic 2048 game using AWS Elastic Kubernetes Service (EKS), ensuring scalability and load distribution with an Application Load Balancer (ALB). Kubernetes-Orchestrated Architecture – Managed pods and services using EKS, enabling containerized deployment and high availability. Ingress-Enabled Access – Configured Ingress and Ingress Controller for efficient routing and public accessibility of the application. AWS Infrastructure Setup – Provisioned secure and scalable EC2-backed EKS cluster with proper IAM roles and policies.

4. Smart Receipt Scanner – Serverless OCR Pipeline
Built a serverless OCR solution using AWS to automatically extract and email receipt data. Automated Document Processing – Uploaded receipts to S3 triggered Lambda functions that used Textract to extract text. Email Notification System – Integrated Amazon SES to send extracted data directly via email. Fully Serverless Architecture – Implemented using AWS Lambda, Textract, SES, and S3 for scalability and low cost. Infrastructure as Code – Provisioned and managed the entire stack using Terraform.

5. QR Code Generator – Flask Web App with Docker
Developed a lightweight web application to generate QR codes from user input using Flask and Python. QR Code Generation – Used the qrcode Python library to dynamically generate QR PNGs from text. Web Interface – Built a simple, responsive UI to input text and instantly receive a downloadable QR code. Dockerized Deployment – Containerized the entire application with Docker for consistent local and cloud deployment.

CONTRIBUTIONS
=============
• Organized a college department symposium event "Mind Maze"
• Presented about "MedBot" in Ideathon

TECHNICAL SKILLS
================
Programming: Java, Python
Cloud Services: AWS
Tools: GitHub, Docker, Terraform, Jenkins, Kubernetes

SOFT SKILLS
===========
• Leadership
• Teamwork
• Critical Thinking`;

        // Create and download text file
        const blob = new Blob([resumeText], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Rubinraj_M_Resume.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        showNotification('Resume TXT downloaded successfully!', 'success');
    });
} 