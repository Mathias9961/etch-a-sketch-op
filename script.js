//Draws a square of sideSize * sideSize, recalculating the size of each div
function drawSquares (sideSize) {
    //select the main HTML container
    const divsContainer = document.querySelector("#container");
    divsContainer.textContent = '';

    //Calculates the size that each div should have
    let maxSideSizePx = 1000;
    let sizePerDiv = maxSideSizePx / sideSize;

    //Create sideSize flex rows 
    for (let rowNumber = 0; rowNumber <sideSize; rowNumber++) {
        const flexRow = document.createElement("div");
        flexRow.classList.add("sketch-row");

        //And add sideSize divs on each row, with the right size
        for (let columnNumber = 0; columnNumber < sideSize; columnNumber++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("sketch");
            divColumn.style.minHeight = sizePerDiv + "px";
            divColumn.style.minWidth = sizePerDiv + "px";

            flexRow.appendChild(divColumn);
        }

        divsContainer.appendChild(flexRow);
    }

    addHoverListener();
}

//Adds a hover listener on each div
function addHoverListener () {
    const sketchDivs = document.querySelectorAll(".sketch");

    sketchDivs.forEach((sketch) => {

        // add a game on each button click
        sketch.addEventListener('mouseover', markHoveredDiv);
    });
}


//Paints the background black on hover
function markHoveredDiv (div) {
    //console.log(div.target);
    div.target.classList.add("hovered");
}


//Gets a new number of rows to print
function redrawSquares () {
    let desiredSideSize = 0;

    while (desiredSideSize <= 0) {
        desiredSideSize = parseInt(prompt("Enter the number of squares per side you want:", 16));
        if (desiredSideSize == NaN || desiredSideSize >= 100) {
            desiredSideSize = 0;
            prompt("Enter a number below 100");
        }
    }
    
    drawSquares(desiredSideSize);
}

drawSquares(16);

//Adds a listener to the resize button
const resizeButton = document.querySelector("#resizeButton");

resizeButton.addEventListener('click', redrawSquares);

//mouseout