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
