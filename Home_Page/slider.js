let CSclass = [
    'CScard1', 'CScard2', 'CScard3', 'CScard4', 'CScard5', 'CScard6',
    'CScard7', 'CScard8', 'CScard9', 'CScard10', 'CScard11', 'CScard12'
];

let rightIcon = document.querySelector('.right');
let leftIcon = document.querySelector('.left');

// Function to show the second set of cards
function showSecondSet() {
    // Hide the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(CSclass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card');
        setTimeout(() => { card.style.display = 'none'; }, 50);
    }
    
    // Show the second set
    for (let i = 6; i < CSclass.length; i++) {
        let card = document.getElementsByClassName(CSclass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 5);
    }

    // Update icon visibility
    rightIcon.style.display = "none";
    leftIcon.style.display = "block";
}

// Function to show the first set of cards
function showFirstSet() {
    // Hide the second set
    for (let i = 6; i < CSclass.length; i++) {
        let card = document.getElementsByClassName(CSclass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card-left');
        setTimeout(() => { card.style.display = 'none'; }, 50);
    }

    // Show the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(CSclass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 5);
    }

    // Update icon visibility
    leftIcon.style.display = "none";
    rightIcon.style.display = "block";
}

// Event listeners
rightIcon.addEventListener('click', showSecondSet);
leftIcon.addEventListener('click', showFirstSet);

// Show the first set initially
showFirstSet();


// Horror movies slider
let hrClass = [
    'hrCard1', 'hrCard2', 'hrCard3', 'hrCard4', 'hrCard5', 'hrCard6',
    'hrCard7', 'hrCard8', 'hrCard9', 'hrCard10', 'hrCard11', 'hrCard12'
];

let hrRightIcon = document.querySelector('.hrRight');
let hrLeftIcon = document.querySelector('.hrLeft');


// Function to show the second set of cards
function showHrSecondSet() {
    // Hide the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(hrClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }
    
    // Show the second set
    for (let i = 6; i < hrClass.length; i++) {
        let card = document.getElementsByClassName(hrClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    hrRightIcon.style.display = "none";
    hrLeftIcon.style.display = "block";
}

// Function to show the first set of cards
function showHrFirstSet() {
    // Hide the second set
    for (let i = 6; i < hrClass.length; i++) {
        let card = document.getElementsByClassName(hrClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card-left');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }

    // Show the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(hrClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    hrLeftIcon.style.display = "none";
    hrRightIcon.style.display = "block";
}

// Event listeners
hrRightIcon.addEventListener('click', showHrSecondSet);
hrLeftIcon.addEventListener('click', showHrFirstSet);

// Show the first set initially
showHrFirstSet();

// MCU Movies slider

let mcuClass = [
    'MCUcard1', 'MCUcard2', 'MCUcard3', 'MCUcard4', 'MCUcard5', 'MCUcard6',
    'MCUcard7', 'MCUcard8', 'MCUcard9', 'MCUcard10', 'MCUcard11', 'MCUcard12'
];


let mcuRightIcon = document.querySelector('.MCUright');
let mcuLeftIcon = document.querySelector('.MCUleft');


// Function to show the second set of cards
function showMCUSecondSet() {
    // Hide the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(mcuClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }
    
    // Show the second set
    for (let i = 6; i < mcuClass.length; i++) {
        let card = document.getElementsByClassName(mcuClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    mcuRightIcon.style.display = "none";
    mcuLeftIcon.style.display = "block";
}

// Function to show the first set of cards
function showMCUFirstSet() {
    // Hide the second set
    for (let i = 6; i < mcuClass.length; i++) {
        let card = document.getElementsByClassName(mcuClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card-left');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }

    // Show the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(mcuClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    mcuLeftIcon.style.display = "none";
    mcuRightIcon.style.display = "block";
}

// Event listeners
mcuRightIcon.addEventListener('click', showMCUSecondSet);
mcuLeftIcon.addEventListener('click', showMCUFirstSet);

// Show the first set initially
showMCUFirstSet();

// MCU Movies slider

let animeClass = [
    'animeCard1', 'animeCard2', 'animeCard3', 'animeCard4', 'animeCard5', 'animeCard6',
    'animeCard7', 'animeCard8', 'animeCard9', 'animeCard10', 'animeCard11', 'animeCard12'
];


let animeRightIcon = document.querySelector('.animeRight');
let animeLeftIcon = document.querySelector('.animeLeft');


// Function to show the second set of cards
function showAnimeSecondSet() {
    // Hide the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(animeClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }
    
    // Show the second set
    for (let i = 6; i < animeClass.length; i++) {
        let card = document.getElementsByClassName(animeClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    animeRightIcon.style.display = "none";
    animeLeftIcon.style.display = "block";
}

// Function to show the first set of cards
function showAnimeFirstSet() {
    // Hide the second set
    for (let i = 6; i < animeClass.length; i++) {
        let card = document.getElementsByClassName(animeClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card-left');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }

    // Show the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(animeClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    animeLeftIcon.style.display = "none";
    animeRightIcon.style.display = "block";
}

// Event listeners
animeRightIcon.addEventListener('click', showAnimeSecondSet);
animeLeftIcon.addEventListener('click', showAnimeFirstSet);

// Show the first set initially
showAnimeFirstSet();

// Animated Shows Slider
let cartoonClass = [
    'cartoonCard1', 'cartoonCard2', 'cartoonCard3', 'cartoonCard4', 'cartoonCard5', 'cartoonCard6',
    'cartoonCard7', 'cartoonCard8', 'cartoonCard9', 'cartoonCard10', 'cartoonCard11', 'cartoonCard12'
];


let cartoonRightIcon = document.querySelector('.cartoonRight');
let cartoonLeftIcon = document.querySelector('.cartoonLeft');


// Function to show the second set of cards
function showCartoonSecondSet() {
    // Hide the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(cartoonClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }
    
    // Show the second set
    for (let i = 6; i < cartoonClass.length; i++) {
        let card = document.getElementsByClassName(cartoonClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    cartoonRightIcon.style.display = "none";
    cartoonLeftIcon.style.display = "block";
}

// Function to show the first set of cards
function showCartoonFirstSet() {
    // Hide the second set
    for (let i = 6; i < cartoonClass.length; i++) {
        let card = document.getElementsByClassName(cartoonClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card-left');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }

    // Show the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(cartoonClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    cartoonLeftIcon.style.display = "none";
    cartoonRightIcon.style.display = "block";
}

// Event listeners
cartoonRightIcon.addEventListener('click', showCartoonSecondSet);
cartoonLeftIcon.addEventListener('click', showCartoonFirstSet);

// Show the first set initially
showCartoonFirstSet();

// Animated Movies slider
let cartoonMoviesClass = [
    'cartoonMoviesCard1', 'cartoonMoviesCard2', 'cartoonMoviesCard3',
    'cartoonMoviesCard4', 'cartoonMoviesCard5', 'cartoonMoviesCard6',
    'cartoonMoviesCard7', 'cartoonMoviesCard8', 'cartoonMoviesCard9',
    'cartoonMoviesCard10', 'cartoonMoviesCard11', 'cartoonMoviesCard12'
];


let cartoonMoviesRightIcon = document.querySelector('.cartoonMoviesRight');
let cartoonMoviesLeftIcon = document.querySelector('.cartoonMoviesLeft');


// Function to show the second set of cards
function showCartoonMoviesSecondSet() {
    // Hide the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(cartoonMoviesClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }
    
    // Show the second set
    for (let i = 6; i < cartoonMoviesClass.length; i++) {
        let card = document.getElementsByClassName(cartoonMoviesClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    cartoonMoviesRightIcon.style.display = "none";
    cartoonMoviesLeftIcon.style.display = "block";
}

// Function to show the first set of cards
function showCartoonMoviesFirstSet() {
    // Hide the second set
    for (let i = 6; i < cartoonMoviesClass.length; i++) {
        let card = document.getElementsByClassName(cartoonMoviesClass[i])[0];
        card.classList.remove('visible-card');
        card.classList.add('hidden-card-left');
        setTimeout(() => { card.style.display = 'none'; }, 90);
    }

    // Show the first set
    for (let i = 0; i < 6; i++) {
        let card = document.getElementsByClassName(cartoonMoviesClass[i])[0];
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.remove('hidden-card');
            card.classList.add('visible-card');
        }, 100);
    }

    // Update icon visibility
    cartoonMoviesLeftIcon.style.display = "none";
    cartoonMoviesRightIcon.style.display = "block";
}

// Event listeners
cartoonMoviesRightIcon.addEventListener('click', showCartoonMoviesSecondSet);
cartoonMoviesLeftIcon.addEventListener('click', showCartoonMoviesFirstSet);

// Show the first set initially
showCartoonMoviesFirstSet();