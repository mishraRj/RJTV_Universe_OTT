// Create multiple stars and append to the body
const pageHeight = document.body.scrollHeight;
const pageWidth = document.body.scrollWidth;

for (let i = 0; i < 50; i++) { // Keep star count manageable for performance
    let star = document.createElement('div');
    star.classList.add('star');
    
    // Random horizontal and vertical position
    star.style.left = `${Math.random() * 90}vw`; 
    star.style.top = `${Math.random() * 90}vh`;

    // Random animation duration to make each star unique
    star.style.animationDuration = `${Math.random() * 40 + 20}s`; // Vary speed
    star.style.animationDelay = `${Math.random() * 5}s`; // Vary delay to stagger stars

    // Append star to the body
    document.body.appendChild(star);
}
