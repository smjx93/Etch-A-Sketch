 // Get the container div
 let container = document.getElementById("grid-container");

 // Create a loop to create the grid squares
 for (let i = 0; i < 256; i++) {
   // Create a new div
   let square = document.createElement("div");
   // Add the "square" class to the div
   square.classList.add("square");
   // Append the square to the container
   container.appendChild(square);
 };
