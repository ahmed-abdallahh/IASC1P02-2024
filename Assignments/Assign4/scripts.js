// Function 1: Digital Clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function 2: Toggle Content Sections
function toggleSection(header) {
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll('.section-content');
    const allHeaders = document.querySelectorAll('.section-header');

    // Close other sections
    allContents.forEach(item => {
        if (item !== content && item.classList.contains('active')) {
            item.classList.remove('active');
            item.previousElementSibling.classList.remove('active');
        }
    });

    // Toggle current section
    header.classList.toggle('active');
    content.classList.toggle('active');
}

// Function 3: Portfolio Project Details
function showProjectDetails(element, projectId) {
    const details = element.querySelector('.project-details');
    if (details) {
        details.style.opacity = '1';
    }
}

function hideProjectDetails(element) {
    const details = element.querySelector('.project-details');
    if (details) {
        details.style.opacity = '0';
    }
}

// Function 4: Contact Form Validation
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('form-status');

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        showFormStatus('Please enter a valid name', 'error');
        return false;
    }

    if (!emailRegex.test(email)) {
        showFormStatus('Please enter a valid email address', 'error');
        return false;
    }

    if (message.length < 10) {
        showFormStatus('Message must be at least 10 characters long', 'error');
        return false;
    }

    // If all validation passes
    showFormStatus('Message sent successfully!', 'success');
    document.getElementById('contact-form').reset();
    return false;
}

function showFormStatus(message, type) {
    const statusDiv = document.getElementById('form-status');
    statusDiv.textContent = message;
    statusDiv.className = type;
    statusDiv.classList.remove('hidden');

    setTimeout(() => {
        statusDiv.classList.add('hidden');
    }, 3000);
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    setInterval(updateClock, 1000);
});
