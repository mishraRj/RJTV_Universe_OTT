const images = [
    './SpaceSHips/Alien1.png', 
    './SpaceSHips/Alien2.png', 
    './SpaceSHips/Aestoroid2.png',
    './SpaceSHips/Aestoroid4.png'
]; // Ensure paths are correct

const documentHeight = document.body.scrollHeight; // Renamed to avoid conflicts
const documentWidth = document.body.scrollWidth;   // Renamed to avoid conflicts

for (let i = 0; i < 4; i++) {
    let spaceShip = document.createElement('div');
    spaceShip.classList.add('spaceShip');
    
    // Random horizontal and vertical position
    spaceShip.style.left = `${Math.random() * 90}vw`; 
    spaceShip.style.top = `${Math.random() * 90}vh`;

    // Random animation duration to make each spaceship unique
    spaceShip.style.animationDuration = `${Math.random() * 70 + 50}s`; // Adjusted speed

    // Set the z-index to ensure visibility
    spaceShip.style.zIndex = 10 + i;

    // Create an image element and assign random src
    let img = document.createElement('img');
    img.src = images[i % images.length]; // Cycle through images
    img.style.width = "50px"; // Set the size of each image
    img.style.height = "50px";

    // Append the image to the spaceship div
    spaceShip.appendChild(img);

    // Append the spaceship div to the body
    document.body.appendChild(spaceShip);
}
