//Add a grid of 16x16 divs on the html
function generateSketchDivs () {
    //select the main HTML container
    const divsContainer = document.querySelector("#container");

    //Create 16 flex rows 
    for (let rowNumber = 0; rowNumber <16; rowNumber++) {
        const flexRow = document.createElement("div");
        flexRow.classList.add("sketch-row");

        //And add 16 divs on each
        for (let columnNumber = 0; columnNumber < 16; columnNumber++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("sketch");
            flexRow.appendChild(divColumn);
        }

        divsContainer.appendChild(flexRow);
    }
}

function markHoveredDiv (div) {
    //console.log(div.target);
    div.target.classList.add("hovered");
}

generateSketchDivs();


const sketchDivs = document.querySelectorAll(".sketch");

sketchDivs.forEach((sketch) => {

    // add a game on each button click
    sketch.addEventListener('mouseover', markHoveredDiv);
});

//mouseout