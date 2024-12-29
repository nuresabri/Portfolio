// Function to navigate to different pages with smooth transitions
function navigateTo(page) {
    const body = document.body;
    body.classList.add('fade-out'); // Add fade-out class for transition

    // Wait for the fade-out animation to complete before navigating
    setTimeout(() => {
        window.location.href = page;
    }, 375); // Match the duration of the fade-out transition in CSS
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

// Add event listeners for navigation links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default navigation
        const href = this.href;

        // Add fade-out class
        document.body.classList.add('fade-out');

        // Wait for the fade-out animation to complete before navigating
        setTimeout(() => {
            window.location.href = href;
        }, 750); // Match this with your fadeOut animation duration
    });
});


