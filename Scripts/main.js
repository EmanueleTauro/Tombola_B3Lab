import {spawn_snow, spawnSnowCSS} from "./snow.js";
import {createTable, drawRandomNumber, highlightNumber, popupNumber} from "./tombola.js";

let alreadyGenerated = [];
let snowflakes_count = 300;

window.onload = function () {
    // Create snowflakes
    spawn_snow(snowflakes_count);
    spawnSnowCSS(snowflakes_count);

    // Create the table for Tombola
    createTable(9, 10);

}

// Function to run when the button is clicked
export function drawTombolaNumber() {
    let number = drawRandomNumber(alreadyGenerated);
    alreadyGenerated.push(number);
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
        console.log(alreadyGenerated)
        return;
    }
    alreadyGenerated = [];
    console.log("Tombola resettata");
}

// Add event listener to the button
document.getElementById("startButton").addEventListener("click", drawTombolaNumber);
document.getElementById("resetButton").addEventListener("click", resetTombola);