// Ensure the script runs after the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    let backToTopButton = document.getElementById("backToTop");

    // Show/hide Back to Top button based on scroll position
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Smooth scroll to top function
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
