// Course filtering function
function filterCourses() {
    let input = document.getElementById('courseSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getAttribute('data-name');
        if (name.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Modal functions
function openModal() {
    document.getElementById('consultationModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('consultationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('consultationModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Form submission handler
document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Our counselor will contact you within 24 hours.');
    this.reset();
});

document.getElementById('modalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Our counselor will contact you within 24 hours.');
    this.reset();
    closeModal();
});

// Show modal on page load
window.addEventListener('load', function() {
    setTimeout(function() {
        openModal();
    }, 2000); // Show after 2 seconds

    // Set footer year dynamically
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});