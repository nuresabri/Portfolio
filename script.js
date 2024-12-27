// Function to navigate to different pages with smooth transitions
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
    const body = document.body;
    body.classList.add("page-visible"); // Ensure the page fades in when loaded

    // Add event listener for transition
    body.addEventListener('transitionend', () => {
        // Optional: Perform any actions after transition ends
    });
});

