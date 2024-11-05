const ghostImgs = [
    './floatingGhosts/Ghost1.png',
    './floatingGhosts/Ghost3.png',
    './floatingGhosts/Ghost4.png',
    './floatingGhosts/Ghost5.png',
    './floatingGhosts/Ghost6.png',
    './floatingGhosts/Ghost9.png',
    './floatingGhosts/GirlGhost2.png',
    './floatingGhosts/GirlGhost4.png',
    './floatingGhosts/skull.png',
    './floatingGhosts/skull2.png',
    './floatingGhosts/GirlGhost6.png',
    './floatingGhosts/GirlGhost7.png',
    './floatingGhosts/skull.png'
];

// Get the total document height (minus some padding if desired)
const documentHeight = document.body.scrollHeight - 200;

for (let i = 0; i < ghostImgs.length; i++) {
    let ghostDiv = document.createElement('div');
    ghostDiv.classList.add('ghost');

    // Set random horizontal position within the viewport width
    ghostDiv.style.left = `${Math.random() * 100}vw`;

    // Set random vertical position within the total document height
    ghostDiv.style.top = `${Math.random() * documentHeight}px`;

    // Random animation duration for variation
    ghostDiv.style.animationDuration = `${Math.random() * 70 + 60}s`;

    // Create an image element and assign the src from ghostImgs array
    let img = document.createElement('img');
    img.src = ghostImgs[i];

    // Adjust size for larger ghosts at the end of the array
    if (i >= ghostImgs.length - 2) {
        img.style.width = "250px";
        img.style.height = "250px";
        img.style.opacity = "0.7";
    } else {
        img.style.width = "100px";
        img.style.height = "100px";
    }

    // Append the image to the ghost div
    ghostDiv.appendChild(img);

    // Append the ghost div to the body
    document.body.appendChild(ghostDiv);
}
