// Spaceship images
const images = [
    './SpaceSHips/Alien1.png', 
    './SpaceSHips/Aestoroid1.png', 
    './SpaceSHips/Alien3.png', 
    './SpaceSHips/Aestoroid2.png', 
    './SpaceSHips/Alien5.png',
    './SpaceSHips/Aestoroid3.png', 
    './SpaceSHips/Alien2.png', 
    './SpaceSHips/Alien3.png', 
    './SpaceSHips/Aestoroid4.png', 
    './SpaceSHips/Alien5.png',
    './SpaceSHips/Alien1.png', 
    './SpaceSHips/Alien2.png',
    './SpaceSHips/Alien1.png',
    './SpaceSHips/Aestoroid1.png', 
    './SpaceSHips/Alien4.png',  
    './SpaceSHips/Aestoroid2.png',
    './SpaceSHips/Alien5.png', 
    './SpaceSHips/bigspaceShipAliens.png', 
];

// Function to calculate document height reliably
const calculateDocumentHeight = () => {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        window.innerHeight
    );
};

// Calculate the document height dynamically
const documentHeight = calculateDocumentHeight() - 400; // Adjust for spaceship positioning
console.log('Document Height:', documentHeight);

// Generate and position spaceships
for (let i = 0; i < images.length; i++) {
    const spaceShip = document.createElement('div');
    spaceShip.classList.add('spaceShip');

    // Set random positions
    spaceShip.style.left = `${Math.random() * 100}vw`; // Horizontal position
    spaceShip.style.top = `${Math.random() * documentHeight}px`; // Vertical position

    // Set random animation duration
    spaceShip.style.animationDuration = `${Math.random() * 70 + 60}s`; // Random animation speed

    // Create an image element and assign a random source
    const img = document.createElement('img');
    img.src = images[i];

    // Size adjustments
    if (i >= images.length - 2) {
        // Larger size for last two spaceships
        img.style.width = "250px";
        img.style.height = "250px";
        img.style.opacity = "0.3";
    } else {
        // Random size for other spaceships
        const randomSize = `${Math.random() * 65 + 55}px`;
        img.style.width = randomSize;
        img.style.height = randomSize;
    }

    // Append the image to the spaceship div
    spaceShip.appendChild(img);

    // Append the spaceship div to the body
    document.body.appendChild(spaceShip);
}

// Debugging: Log the number of spaceships created
console.log('Spaceships added to the DOM:', document.querySelectorAll('.spaceShip').length);
