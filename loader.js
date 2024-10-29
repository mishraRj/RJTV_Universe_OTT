function showLoader() {
    // Create a new div element that will serve as the loader overlay
    const loaderOverlay = document.createElement('div');
    
    // Assign the 'loader-overlay' class to the newly created div
    loaderOverlay.className = 'loader-overlay';
    
    // Set the inner HTML of the overlay, adding the loader content (text, image, and audio)
    loaderOverlay.innerHTML = `
        <div class="loader">
            <div class="text">
                <p>Initializing <br> RJTV<span class="dots"></span></p> <!-- Text with animated dots -->
            </div>        
            <img src="./loader.gif" alt="Loader Image"> <!-- Loader image/gif -->
            <audio id="backgroundAudio" autoplay> <!-- Autoplay audio for background sound -->
                <source src="./audio.mp3" type="audio/mp3"> <!-- Source for the audio file -->
                Your browser does not support the audio element.
            </audio>
        </div>`;
    
    // Append the loader overlay to the document's body to make it visible
    document.body.appendChild(loaderOverlay);

    // Select the audio element we just added by its ID for control or error handling
    const audio = document.getElementById('backgroundAudio');
    
    // Play the audio; if it fails (e.g., due to browser restrictions), log the error
    audio.play().catch((error) => {
        console.error('Audio playback failed:', error);
    });

    // Set a timeout to redirect to the home page after 6.3 seconds
    setTimeout(function() {
        // Change the overlay's opacity to 1, triggering a fade-out effect
        loaderOverlay.style.opacity = '1';

        // Wait an additional 850ms for the fade-out to complete before redirecting
        setTimeout(function() {
            // Redirect to the home page by changing the current URL
            window.location.href = './Home_Page/home.html'; // Adjust this path to your actual home page
        }, 850); // Match with CSS transition time for smoothness
    }, 6300); // Total wait time before redirecting
}
