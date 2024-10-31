// Functionality code   
let video = document.getElementById("trailerVid");
let volumeIcon = document.getElementById("volumeIcon");
let muteIcon = document.getElementById("muteIcon");
let tvSwitch = document.getElementById("flexSwitchCheckChecked");
let label = document.getElementById("switchLabel");

window.onload = function() {
    // Add fade-in class to body
    document.body.classList.add('fade-in');
};


muteIcon.addEventListener('click', () => {
    video.muted = false;
    muteIcon.style.display = "none" ;
    volumeIcon.style.display = "block";
});

volumeIcon.addEventListener('click', () => {
    video.muted = true;
    volumeIcon.style.display = "none";
    muteIcon.style.display = "block";
});

tvSwitch.addEventListener('change', function () {

    let trailer = document.getElementById("trailer-container");

    if(tvSwitch.checked) {
        // Play a random trailer when the switch is checked
        const h1Element = document.querySelector('h1');
        if (h1Element){
            trailer.removeChild(h1Element);
        }
        trailer.appendChild(video);
        playRandomTrailers();
        label.innerText = "Turn off the video";

    } else {
        // Stop playing the video when the switch is unchecked
        trailer.removeChild(video)
        let h1 = document.createElement("h1");
        h1.innerText = "TV is off!";
        h1.style.position = "absolute";
        h1.style.top = "45%";
        h1.style.transform = "scale(3)"
        trailer.appendChild(h1);
        
         // Hide all trailer descriptions when the switch is unchecked
        trailers.forEach(trailer => {
            document.getElementById(trailer.descriptionId).style.display = 'none';
        });
        label.innerText = "Turn on the video";
    }
});


// Array of trailer sources and corresponding description IDs
const trailers = [
    {
        src: "./Trailers/Home_Trailers/Trailer2.mp4",
        descriptionId: "tr2"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer3.mp4",
        descriptionId: "tr3"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer4.mp4",
        descriptionId: "tr4"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer5.mp4",
        descriptionId: "tr5"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer6.mp4",
        descriptionId: "tr5"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer7.mp4",
        descriptionId: "tr1"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer8.mp4",
        descriptionId: "tr8"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer9.mp4",
        descriptionId: "tr9"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer10.mp4",
        descriptionId: "tr10"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer11.mp4",
        descriptionId: "tr11"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer12.mp4",
        descriptionId: "tr12"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer13.mp4",
        descriptionId: "tr13"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer14.mp4",
        descriptionId: "tr14"
    },
    {
        src: "./Trailers/Home_Trailers/Trailer15.mp4",
        descriptionId: "tr15"
    },

];

window.onload = playRandomTrailers();
// Function to play random trailers
function playRandomTrailers() {
    // Show the loading indicator
    const loadingIndicator = document.getElementById("loadingIndicator");
    loadingIndicator.style.display = "flex"; // Show loader

    // Hide all trailer descriptions initially
    trailers.forEach(trailer => {
        document.getElementById(trailer.descriptionId).style.display = 'none';
    });

    // Get random index from trailer array
    const randomIndex = Math.floor(Math.random() * trailers.length);

    // Get the video source element
    const videoSource = document.getElementById("video-source");

    // Change the source to a random trailer
    videoSource.src = trailers[randomIndex].src;

    // Show the corresponding trailer description
    document.getElementById(trailers[randomIndex].descriptionId).style.display = 'block';

    // Load the new video
    const video = document.getElementById("trailerVid"); // Assuming you have an ID for the video element
    video.load();

    // Hide the loading indicator after the video is ready to play
    video.onloadedmetadata = function() {
        // Optional: add a timeout to ensure the loader stays for a minimum duration
        setTimeout(() => {
            loadingIndicator.style.display = "none"; // Hide loader
            video.play(); // Start playing the video
        }, 500); // Wait for half a second before hiding the loader
    };

    // If the video fails to load, keep the loader visible for longer
    video.onerror = function() {
        console.error("Error loading video.");
        setTimeout(() => {
            loadingIndicator.style.display = "none"; // Hide loader after a timeout even on error
        }, 2000); // Show loader for 2 seconds before hiding
    };

    // Optional: Handle the case where the video is buffered
    video.onwaiting = function() {
        loadingIndicator.style.display = "flex"; // Show loader if the video is buffering
    };

    video.onplaying = function() {
        loadingIndicator.style.display = "none"; // Hide loader when the video is playing
    };
}

// When video ends, it will play the next video
video.addEventListener('ended', playRandomTrailers);

//pausing video when out of viewport
let observerOptions = {
    root: null, // Viewport
    rootMargin: '0px 0px -100px 0px', // Add a buffer at the bottom
    threshold: 0.1 // Trigger when at least 10% of the video is visible
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, observerOptions);

observer.observe(video);


// Adding Lazy-items

// Select all elements to lazy load
const lazyItems = document.querySelectorAll('.lazy-item');

// New observer instance specifically for lazy items
let lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each lazy-item
lazyItems.forEach(item => lazyObserver.observe(item));
