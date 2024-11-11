const bgm = document.getElementById('tractorBeamBGM');
const spaceship = document.querySelector('.tractor_beam2');
function callSpaceship1() {
    const sample = document.getElementById('card1');
    // Add 'enter' class to start spaceship animation
    spaceship.classList.add('enter1');

    bgm.play();
    
    // Delay adding 'beam-active' class and starting the beam animation
    setTimeout(() => {
        spaceship.classList.add('beam-active');
        
        // Delay for the .sample div to move up and fade out after the beam appears
        setTimeout(() => {
            sample.classList.add('move-up');
            
            // After .sample has moved up, remove the beam animation
            setTimeout(() => {
                spaceship.classList.add('remove-beam'); // Remove the falling beam animation
                
                // After .sample has moved up, move spaceship to the right
                spaceship.classList.add('move-right');
                setTimeout(() =>{
                    window.location.href = './construction.html';
                }, 1500)
                    
                    
            }, 2500); // Time for sample to fully move up

        }, 1000); // 1s delay to start .sample moving up after beam appears

    }, 4000); // Matches the 4s transition time for spaceship appearance
}

function callSpaceship2() {
    const sample = document.getElementById('card2');
    // Add 'enter' class to start spaceship animation
    spaceship.classList.add('enter2');

    bgm.play();
    
    // Delay adding 'beam-active' class and starting the beam animation
    setTimeout(() => {
        spaceship.classList.add('beam-active');
        
        // Delay for the .sample div to move up and fade out after the beam appears
        setTimeout(() => {
            sample.classList.add('move-up');
            
            // After .sample has moved up, remove the beam animation
            setTimeout(() => {
                spaceship.classList.add('remove-beam'); // Remove the falling beam animation
                
                // After .sample has moved up, move spaceship to the right
                    spaceship.classList.add('move-right');
                    setTimeout(() =>{
                        window.location.href = './construction.html';
                    }, 1500)
            }, 2500); // Time for sample to fully move up
        }, 1000); // 1s delay to start .sample moving up after beam appears
    }, 4000); // Matches the 4s transition time for spaceship appearance
}

function callSpaceship3() {
    const sample = document.getElementById('card3');
    // Add 'enter' class to start spaceship animation
    spaceship.classList.add('enter3');

    bgm.play();
    
    // Delay adding 'beam-active' class and starting the beam animation
    setTimeout(() => {
        spaceship.classList.add('beam-active');
        
        // Delay for the .sample div to move up and fade out after the beam appears
        setTimeout(() => {
            sample.classList.add('move-up');
            
            // After .sample has moved up, remove the beam animation
            setTimeout(() => {
                spaceship.classList.add('remove-beam'); // Remove the falling beam animation
                
                // After .sample has moved up, move spaceship to the right
                    spaceship.classList.add('move-right');
                    setTimeout(() =>{
                        window.location.href = './construction.html';
                    }, 1500)
                

            }, 2500); // Time for sample to fully move up

        }, 1000); // 1s delay to start .sample moving up after beam appears

    }, 4000); // Matches the 4s transition time for spaceship appearance
}

function callSpaceship4() {
    const sample = document.getElementById('card4');
    // Add 'enter' class to start spaceship animation
    spaceship.classList.add('enter4');

    bgm.play();
    
    // Delay adding 'beam-active' class and starting the beam animation
    setTimeout(() => {
        spaceship.classList.add('beam-active');
        
        // Delay for the .sample div to move up and fade out after the beam appears
        setTimeout(() => {
            sample.classList.add('move-up');
            
            // After .sample has moved up, remove the beam animation
            setTimeout(() => {
                spaceship.classList.add('remove-beam'); // Remove the falling beam animation
                
                // After .sample has moved up, move spaceship to the right
                    spaceship.classList.add('move-right');
                    setTimeout(() =>{
                        window.location.href = './construction.html';
                    }, 1500)
                

            }, 2500); // Time for sample to fully move up

        }, 1000); // 1s delay to start .sample moving up after beam appears

    }, 4000); // Matches the 4s transition time for spaceship appearance
}

function callSpaceship5() {
    const sample = document.getElementById('card5');
    // Add 'enter' class to start spaceship animation
    spaceship.classList.add('enter5');

    bgm.play();
    
    // Delay adding 'beam-active' class and starting the beam animation
    setTimeout(() => {
        spaceship.classList.add('beam-active');
        
        // Delay for the .sample div to move up and fade out after the beam appears
        setTimeout(() => {
            sample.classList.add('move-up');
            
            // After .sample has moved up, remove the beam animation
            setTimeout(() => {
                spaceship.classList.add('remove-beam'); // Remove the falling beam animation
                
                // After .sample has moved up, move spaceship to the right
                    spaceship.classList.add('move-right');
                    setTimeout(() =>{
                        window.location.href = './construction.html';
                    }, 1500)
                

            }, 2500); // Time for sample to fully move up

        }, 1000); // 1s delay to start .sample moving up after beam appears

    }, 4000); // Matches the 4s transition time for spaceship appearance
}

function callSpaceship6() {
    const sample = document.getElementById('card6');
    // Add 'enter' class to start spaceship animation
    spaceship.classList.add('enter6');

    bgm.play();
    
    // Delay adding 'beam-active' class and starting the beam animation
    setTimeout(() => {
        spaceship.classList.add('beam-active');
        
        // Delay for the .sample div to move up and fade out after the beam appears
        setTimeout(() => {
            sample.classList.add('move-up');
            
            // After .sample has moved up, remove the beam animation
            setTimeout(() => {
                spaceship.classList.add('remove-beam'); // Remove the falling beam animation
                
                // After .sample has moved up, move spaceship to the right
                    spaceship.classList.add('move-right');
                    setTimeout(() =>{
                        window.location.href = './construction.html';
                    }, 1500)
                

            }, 2500); // Time for sample to fully move up

        }, 1000); // 1s delay to start .sample moving up after beam appears

    }, 4000); // Matches the 4s transition time for spaceship appearance
}