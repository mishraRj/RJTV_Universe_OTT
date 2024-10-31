let spaceShip = document.querySelector('.alien-projector');
let pfp = document.querySelector('.hologram-container');
let audio = document.getElementById('backgroundAudio');
let alienVoice = document.getElementById('alienVoice');

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

    }, 9000); // Duration of the appearing animation
    setTimeout(() => {
        spaceShip.classList.add('light-beams-visible'); // Add class to show light beams
        pfp.style.opacity = "1";
        pfp.style.transition = "2s ease-in";
    }, 10000);
    
}

// Call the function when the window loads
window.onload = appearSpaceship; 


spaceShip.addEventListener('click', () => {
    alienVoice.play().catch(error => {
        console.error("Audio playback failed: ", error);
    });

    // Apply the scaleBounce animation for 0.3 seconds
    spaceShip.style.animation = "scaleBounce 0.9s ease-in-out forwards";

    // Remove the animation after it ends to reset back to initial style
    spaceShip.addEventListener('animationend', function resetAnimation() {
        spaceShip.style.animation = ""; // Clear the animation
        spaceShip.removeEventListener('animationend', resetAnimation); // Remove the listener
    });
});
