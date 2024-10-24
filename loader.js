function showLoader() {
    // Create the loader overlay
    const loaderOverlay = document.createElement('div');
    loaderOverlay.className = 'loader-overlay';
    
    loaderOverlay.innerHTML = `
        <div class="loader">
            <div class="text">
                <p>Initializing <br> RJTV<span class="dots"></span></p>
            </div>        
            <img src="./loader.gif" alt="Loader Image">
            <audio id="backgroundAudio" autoplay loop>
                <source src="./audio.mp3" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        </div>`;
    
    // Append the loader overlay to the body
    document.body.appendChild(loaderOverlay);

    // Get the audio element
    const audio = document.getElementById('backgroundAudio');
    audio.play().catch((error) => {
        console.error('Audio playback failed:', error);
    });

    // Redirect to home page after 5 seconds
    setTimeout(function() {
        // Fade out the loader
        loaderOverlay.style.opacity = '1';

        // Wait for the fade-out effect to complete
        setTimeout(function() {
            // Redirect to the home page
            window.location.href = './Home_Page/home.html'; // Change to your actual home page path
        }, 850); // Match this duration with your CSS transition duration
    }, 6300); // 5 seconds delay
}
