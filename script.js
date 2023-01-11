// Sets important constants and variables
const container = document.getElementById("grid-container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
    createSquares();
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};
// Create a loop to create the grid squares
function createSquares(){
    var passes = 0;
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {

            // Create a new div
            let square = document.createElement("div");
            // Add the "square" class to the div
            square.classList.add("square");
            // Append the square to the container
            container.appendChild(square);
            square.addEventListener("mouseover", function() {
              if(passes < 10) {
                // Add another 10% of black
                this.style.backgroundColor = "rgb(0, 0, 0)";
                let currentOpacity = this.style.opacity;
                this.style.opacity = (currentOpacity ? parseFloat(currentOpacity) : 1) + 0.1;
                passes++;
              } else {
                // Reset passes and set random color
                passes = 0;
                this.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
              }
            });
        }
    }
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}
