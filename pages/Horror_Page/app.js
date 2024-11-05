// Adding Lazy-items

// Select all elements to lazy load
const lazyItems = document.querySelectorAll('.lazy-item');

// New observer instance specifically for lazy items
let lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each lazy-item
lazyItems.forEach(item => lazyObserver.observe(item));


document.addEventListener("DOMContentLoaded", () => {
    const entryScreen = document.getElementById("entryScreen");
    const entryButton = document.getElementById("entryButton");
    const backgroundAudio = document.getElementById('backgroundAudio');

    entryButton.addEventListener("click", () => {
        // Add the zoom-out animation to the ghost
        backgroundAudio.play();
        entryScreen.classList.add("zoom-out");



        // Wait for the animation to complete before showing the main content
        entryScreen.addEventListener("animationend", () => {
            entryScreen.style.display = "none"; // Hide entry screen
        });
    });
});
