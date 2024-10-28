// Select the button and audio element
const btn = document.querySelector('.horror_btn');
const backgroundAudio = document.getElementById('backgroundAudio');

// Prevent autoplay on load
backgroundAudio.pause (); // Set volume to 0 or do not call play() until interaction

btn.addEventListener('click', () =>{
    console.log("clicked");
    // Stop spaceship animations by setting animation to "none"
    const spaceShips = document.querySelectorAll('.spaceShip');
    spaceShips.forEach(spaceShip => {
        spaceShip.style.animation = "none";
        spaceShip.style.display = "none";
    });
    showLoader();
    document.body.style.backgroundImage = "url(./Cards/horror_Movies/image2.png)"; // Change to the new background image

    document.body.style.backgroundAttachment = "fixed";

    // Change the background of .main-content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.backgroundImage = "url('./Cards/horror_Movies/image2.png  ')";
        mainContent.style.transition = "background-image 1s ease"; // Smooth transition
    }
    // setTimeout(() => {
    //     window.location.href = 'sample.html';
    // }, 21000);
});


function showLoader() {
    const bhootImage = document.querySelector('.bhoot');

    // Set the image to be displayed immediately
    bhootImage.style.display = 'block';
    
    // Only play audio after button is clicked
    backgroundAudio.play();

    // Use a timeout to allow the browser to process the display change
    setTimeout(() => {
        bhootImage.style.opacity = '0.7';
        bhootImage.style.transform = 'scale(33)';
    }, 10);

    // Remove any existing ghosts to avoid duplicates (uncomment if you want to remove)
    const existingGhosts = document.querySelectorAll('.ghost');
    existingGhosts.forEach(ghost => ghost.remove());

    const ghostImgs = [
        './cards/horror_Movies/abc/Ghost1.png',
        './cards/horror_Movies/abc/Ghost2.png',
        './cards/horror_Movies/abc/Ghost3.png',
        './cards/horror_Movies/abc/Ghost4.png',
        './cards/horror_Movies/abc/Ghost5.png',
        './cards/horror_Movies/abc/Ghost6.png',
        './cards/horror_Movies/abc/Ghost7.png',
        './cards/horror_Movies/abc/Ghost8.png',
        './cards/horror_Movies/abc/Ghost9.png',
        './cards/horror_Movies/abc/Ghost1.png',
        './cards/horror_Movies/abc/Ghost2.png',
        './cards/horror_Movies/abc/Ghost3.png',
        './cards/horror_Movies/abc/Ghost4.png',
        './cards/horror_Movies/abc/Ghost5.png',
        './cards/horror_Movies/abc/Ghost6.png',
        './cards/horror_Movies/abc/Ghost7.png',
        './cards/horror_Movies/abc/Ghost8.png',
        './cards/horror_Movies/abc/Ghost9.png'
    ];

    
// Get the total document height

const documentHeight = document.body.scrollHeight - 400;

for (let i = 0; i < ghostImgs.length; i++) {
    let ghosts = document.createElement('div');
    ghosts.classList.add('spaceShip');

    // Set random horizontal position (within 100% width)
    ghosts.style.left = `${Math.random() * 100}vw`; 

    // Set random vertical position (within the total document height)
    ghosts.style.top = `${Math.random() * documentHeight}px`; // Use total document height

    // Random animation duration to make each spaceship unique
    ghosts.style.animationDuration = `${Math.random() * 70 + 60}s`; // Adjusted speed

    // Create an image element and assign random src
    let gImg = document.createElement('img');
    gImg.src = ghostImgs[i % ghostImgs.length]; // Cycle through images

    // Generate a random size between 60px and 160px
    const randomSize = Math.floor(Math.random() * 151) + 50; // Gives a value between 60 and 160
    gImg.style.width = `${randomSize}px`;
    gImg.style.height = `${randomSize}px`;

    gImg.style.zIndex = "1000";

    // Set initial opacity and transition delay
    gImg.style.opacity = "0";
    gImg.style.transition = "opacity 2s ease";
    gImg.style.transitionDelay = `${i * 1.5}s`;

    // Append the image to the spaceship div
    gImg.style.opacity = "0.7";
    ghosts.appendChild(gImg);

    // Append the spaceship div to the body
    document.body.appendChild(ghosts);

    setTimeout(() => {
        gImg.style.opacity = "1";
    }, i * 1500);
}
}

