// Initialize default 10x10 grid
function makeGrid(squaresPerSides = 10){
    const squareLength = GRIDLENGTH / squaresPerSides;
    
    // Create the grid depends on squares-per-sides value
    for (let i = 0; i < squaresPerSides; i++) {
        for (let j = 0; j < squaresPerSides; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            // Set each grid elements with equal height and width
            square.style.height = `${squareLength}px`;
            square.style.width = `${squareLength}px`;
            // Change grid elements background color when hovering over
            square.addEventListener('mouseenter', setBlackColor, {once: true});
            // Append each elements to the flex container
            CONTAINER.appendChild(square);
        }
    }
}

// Prompt the new squares per side, create the new grid
function resetGrid() {
    // Prompt for squares per sides
    const squarePerSides = prompt('How many squares you want per sides? // Maximum: 100' );
    // Alert user for invalid input
    if (squarePerSides > 100) {
        alert('The number\'s too big! Maximum is 100');
        return;
    } else if (!squarePerSides) {
        return;
    }

    // Delete the grid elements
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
    
    // Create grid using the prompted value
    makeGrid(squarePerSides);
}

// Event listener function for change trace color to black
function setBlackColor(event) {
    event.target.style.backgroundColor = 'black';
}

// Event listener function for change trace color to random color
function setRandomColor(event) {
    // Generate random rgb value
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * (255 + 1));
    }
    // Assign random color
    event.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

// Change trace color to black color
function toBlackColor() {
    // Select all the grid elements
    const squares = document.querySelectorAll('.square');

    // Remove event listener that change the color to random
    squares.forEach((square) => {
        square.removeEventListener('mouseenter', setRandomColor);

        // Add even listener to change the color to black
        square.addEventListener('mouseenter', setBlackColor, {once: true});
    });
}

// Change trace color to random color
function toRandomColor() {
    // Select all the grid elements
    const squares = document.querySelectorAll('.square');

    // Remove event listener that change the color to black
    squares.forEach((square) => {
        square.removeEventListener('mouseenter', setBlackColor);
  
        // Add event listener to change the color to random
        square.addEventListener('mouseenter', setRandomColor, {once: true});
    });
}


// Setup global variables
const CONTAINER = document.querySelector('.flex-container');
const GRIDLENGTH = 600;

// Reset the grid when clicked the reset-button
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);

// Change trace color to black color when clicked the black-button
const black = document.querySelector('#black');
black.addEventListener('click', toBlackColor);

// Change trace color to random color when clicked the random-button
const random = document.querySelector('#random');
random.addEventListener('click', toRandomColor);

makeGrid();