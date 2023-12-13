import {spawn_snow, spawnSnowCSS} from "./snow.js";
import {createTable, drawRandomNumber, highlightNumber, popupNumber} from "./tombola.js";

let extractedNumbers = [];
let snowflakes_count = 300;

window.onload = function () {
    // Create snowflakes
    spawn_snow(snowflakes_count);
    spawnSnowCSS(snowflakes_count);

    // Create the table for Tombola
    createTable(9, 10);

    // Load the list of already generated numbers
    extractedNumbers = JSON.parse(localStorage.getItem("extractedNumbers"));
    if (extractedNumbers == null) {
        extractedNumbers = [];
    }
    // Draw the numbers that have already been generated
    for (let i = 0; i < extractedNumbers.length; i++) {
        highlightNumber(extractedNumbers[i]);
    }
}

// Function to run when the button is clicked
export function drawTombolaNumber() {
    let number = drawRandomNumber(extractedNumbers);
    extractedNumbers.push(number);
    localStorage.setItem("extractedNumbers", JSON.stringify(extractedNumbers));
    console.log(extractedNumbers)
    console.log (number);
    popupNumber(number);
    highlightNumber(number);
}

// Function to run when the reset button is clicked
export function resetTombola() {
    // Ask for confirmation
    let confirmation = confirm("Sei sicuro di voler resettare la Tombola?");
    if (!confirmation) {
        console.log("Tombola non resettata")
        console.log(extractedNumbers)
        return;
    }
    // Delete local storage
    localStorage.removeItem("extractedNumbers");
    // Reload the page
    location.reload()
}

// Add event listener to the button
document.getElementById("startButton").addEventListener("click", drawTombolaNumber);
document.getElementById("resetButton").addEventListener("click", resetTombola);

// Add event listener to the keyboard
// If spacebar is pressed, draw a number
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        drawTombolaNumber();
    }
});
// If R is pressed, reset the tombola
document.addEventListener("keydown", function (event) {
    if (event.code === "KeyR") {
        resetTombola();
    }
});