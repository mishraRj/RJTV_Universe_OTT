const images = [
    './SpaceSHips/Alien1.png', 
    './SpaceSHips/Aestoroid2.png', 
    './SpaceSHips/Aestoroid4.png', 
    './SpaceSHips/Alien4.png',
    './SpaceSHips/Goku1.png',
    './SpaceSHips/Vegeta.png',
]; // Ensure paths are correct

// Get the total document height
// const documentHeight = document.body.scrollHeight-200;

for (let i = 0; i < 6; i++) {
    let spaceShip = document.createElement('div');
    spaceShip.classList.add('spaceShip');

    // Set random horizontal position (within 100% width)
    spaceShip.style.left = `${Math.random() * 10}vw`; 

    // Set random vertical position (within the total document height)
    spaceShip.style.top = `${Math.random() * 100}vh`; // Use total document height

    // Random animation duration to make each spaceship unique
    spaceShip.style.animationDuration = `${Math.random() * 60 + 50}s`; // Adjusted speed


    // Create an image element and assign random src
    let img = document.createElement('img');
    img.src = images[i % images.length]; // Cycle through images
    img.style.width = "80px"; // Set the size of each image
    img.style.height = "80px";

    // Append the image to the spaceship div
    spaceShip.appendChild(img);

    // Append the spaceship div to the body
    document.body.appendChild(spaceShip);
}
