let spaceShip = document.querySelector('.alien-projector');
let pfp = document.querySelector('.hologram-container');
let audio = document.getElementById('backgroundAudio');

window.addEventListener('load', () => {
    // Delay the content appearance by 2 seconds
    setTimeout(() => {
        document.body.style.opacity = "1"; // Trigger fade-in effect
    }, 1500); // Delay of 2 seconds
});


function appearSpaceship() {

    audio.play().catch(error => {
        console.error("Audio playback failed: ", error);
        // Handle playback error if necessary
    });
    // Set the animation to 'appearing' on window load
    spaceShip.style.animation = 'appearing 8s forwards'; // Use forwards to keep final position
    pfp.style.opacity = "0";
    
    // After 4 seconds (the duration of the appearing animation), switch to projectorMove
    setTimeout(() => {
        spaceShip.style.animation = 'projectorMove 2s infinite alternate'; // Switch to the projector move animation
        pfp.style.opacity = "1";
        pfp.style.transition = "2s ease-in";

    }, 9000); // Duration of the appearing animation
    setTimeout(() => {
        spaceShip.classList.add('light-beams-visible'); // Add class to show light beams
    }, 9000);
    
}

// Call the function when the window loads
window.onload = appearSpaceship; 
