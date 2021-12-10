// Setup global variables
const CONTAINER = document.querySelector('.flex-container');
const GRIDLENGTH = 600;

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
            square.addEventListener('mouseenter', () => {
                square.classList.add('square-onhover');
            }, {once: true});
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
    }

    // Delete the grid elements
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
    
    // Create grid using the prompted value
    makeGrid(squarePerSides);
}


// Reset the grid when click the button
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);

makeGrid();