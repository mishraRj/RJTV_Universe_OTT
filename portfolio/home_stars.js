// Get the footer element from the HTML
const footer = document.querySelector('footer');

// Function to create snowflakes
function generateStars() {
    // Get the distance of the footer from the top of the page
    const footerPosition = footer.getBoundingClientRect().top;
    const maxFallHeight = footerPosition - 400; // Set the max height 400px above the footer

    // Create 50 snowflake elements
    for (let i = 0; i < 50; i++) {
        // Create a new div for each snowflake
        let star = document.createElement('div');
        // Add the 'star' class to style the snowflake
        star.classList.add('star');
        
        // Set a random horizontal position across the screen width
        star.style.left = `${Math.random() * 90}vw`; 
        // Set a random animation duration for each snowflake to fall
        star.style.animationDuration = `${Math.random() * 200 + 150}s`;
        // Set a random delay to stagger the snowflake starts
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        // Set the maximum fall height for each snowflake
        star.style.setProperty('--page-height', `${maxFallHeight}px`);
        
        // Add the snowflake to the body of the HTML page
        document.body.appendChild(star);
    }
}

// Call the function to create the snowflakes on the page
generateStars();
