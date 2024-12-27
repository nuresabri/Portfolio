// Particle effect
const numberOfParticles = 50;  // Set the number of particles

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Randomize initial position
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    
    // Append particle to the body
    document.body.appendChild(particle);

    // Set a random animation direction
    particle.style.animationDuration = `${Math.random() * 4 + 2}s`;

    // Remove particle after animation ends
    particle.addEventListener('animationiteration', () => {
        particle.remove();
        createParticle();
    });
}

// Create the particles on load
for (let i = 0; i < numberOfParticles; i++) {
    createParticle();
}

// Function to navigate to different pages with transitions
function navigateTo(page) {
    const body = document.body;
    body.classList.add('fade-out'); // Add fade-out class for transition

    // Wait for the fade-out animation to complete before navigating
    setTimeout(() => {
        window.location.href = page;
    }, 500); // Match the duration of the fade-out transition in CSS
}

// Add fade-in class on page load for smooth entry
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});
