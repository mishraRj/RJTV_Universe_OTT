// Get the footer element
const footer = document.querySelector('footer');

// Function to generate snowflakes
function generateStars() {
    // Get the footer's position relative to the document
    const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    const maxFallHeight = footerPosition - 400; // 10px above the footer

    for (let i = 0; i < 50; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        
        // Random horizontal position and animation duration
        star.style.left = `${Math.random() * 90}vw`; // Random position across the width
        star.style.animationDuration = `${Math.random() * 80 + 65}s`; // Random fall speed between 55s to 125s
        star.style.animationDelay = `${Math.random() * 3}s`; // Random delay to stagger start times
        
        // Pass maxFallHeight to the CSS custom property
        star.style.setProperty('--page-height', `${maxFallHeight}px`);
        
        // Append snowflake to the body
        document.body.appendChild(star);
    }
}

// Call the function to generate snowflakes
generateStars();
