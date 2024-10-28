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
    './SpaceSHips/Alien4.png', 
    './SpaceSHips/bigspaceShipAliens.png', 
]; // Ensure paths are correct

// Get the total document height

const documentHeight = document.body.scrollHeight - 400;

for (let i = 0; i < 19; i++) {
    let spaceShip = document.createElement('div');
    spaceShip.classList.add('spaceShip');

    // Set random horizontal position (within 100% width)
    spaceShip.style.left = `${Math.random() * 100}vw`; 

    // Set random vertical position (within the total document height)
    spaceShip.style.top = `${Math.random() * documentHeight}px`; // Use total document height

    // Random animation duration to make each spaceship unique
    spaceShip.style.animationDuration = `${Math.random() * 70 + 60}s`; // Adjusted speed

    // Create an image element and assign random src
    let img = document.createElement('img');
    img.src = images[i % images.length]; // Cycle through images

    // For the last two spaceships, set a larger size
    if (i >= images.length - 1) {
        img.style.width = "300px"; // Larger size for the last two spaceships
        img.style.height = "300px";
        img.style.opacity = "0.3";
    } else {
        img.style.width = "70px"; // Default size for other spaceships
        img.style.height = "70px";
    }

    // Append the image to the spaceship div
    spaceShip.appendChild(img);

    // Append the spaceship div to the body
    document.body.appendChild(spaceShip);
}
