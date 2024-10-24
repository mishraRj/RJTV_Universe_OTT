// Select all channel elements
let channels = document.querySelectorAll(".channel");

channels.forEach(channel => {
    // Add hover event to each channel element
    channel.addEventListener("mouseenter", () => {
        // Ensure the channel returns to the original state before starting the new animation
        channel.style.transition = "1s ease-in-out"; // Add this to ensure smooth transition
        channel.style.borderRadius = "1%"; // Change card to rectangle first

        let p = channel.querySelector("p"); // Select the paragraph inside the hovered channel
        setTimeout(() => {
            p.style.display = "block";
            p.style.opacity = "1";
        }, 800); // Delay before showing the paragraph

        let image = channel.querySelector("img");
        setTimeout(() => {
            image.style.borderRadius = "1%"; // Apply image border-radius after delay
        }, 1000);

        // After the image transition is done, apply the JS-based border-radius changes
        setTimeout(() => {
            channel.style.borderTopLeftRadius = "50px";
            channel.style.borderBottomRightRadius = "50px";
            image.style.borderTopLeftRadius = "50px";
            image.style.borderBottomRightRadius = "50px";
        }, 1000);
    });

    channel.addEventListener("mouseleave", () => {
        channel.style.transition = "1s ease-in-out";
        channel.style.borderRadius = "50%"; // Reset to circular shape

        let p = channel.querySelector("p"); // Only select the paragraph inside the hovered channel
        p.style.opacity = '0';
        setTimeout(() => {
            p.style.display = 'none';
        }, 800); // Wait for opacity transition to finish before hiding the element

        let image = channel.querySelector("img");
        image.style.borderRadius = "50%"; // Reset image to circular
    });
});
