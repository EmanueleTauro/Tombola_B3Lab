import {smorfia} from "./smorfia.js";

// Function to generate numbers from 1 to 90
function generateNumbers(rows, cols) {
    let numbers = [];
    for (let i = 1; i <= rows * cols; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Function to create the table with square cells
export function createTable(rows, cols) {
    let table = document.getElementById("numberTable");
    let numbers = generateNumbers(rows, cols);

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();

        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = numbers[i * cols + j];
        }
    }
}

// Function to generate random numbers for the tombola
export function drawRandomNumber(alreadyGenerated) {
    if (alreadyGenerated.length === 90) {
        return "FINISHED";
    }
    let number = Math.floor(Math.random() * 90) + 1;
    while (alreadyGenerated.includes(number)) {
        number = Math.floor(Math.random() * 90) + 1;
    }
    return number
}

// Function that makes the number appear as red and bold in the table
export function highlightNumber(number) {
    let table = document.getElementById("numberTable");
    let rows = table.rows;
    let cols = rows[0].cells.length;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        for (let j = 0; j < cols; j++) {
            let cell = row.cells[j];
            if (cell.textContent === number.toString()) {
                //cell.style.color = "#ff0000";
                cell.style.backgroundColor = "#e99c37";
                cell.style.fontWeight = "bold";
                return;
            }
        }
    }
}

// Function that makes a popup appear when a number is drawn
export function popupNumber(number) {
    let popup = document.getElementById("popup");
    let popupText = document.getElementById("popupText");
    let popupNumber = document.getElementById("popupNumber");

    // Show the popup
    popup.style.display = "block";
    popupNumber.textContent = "Numero: " + number;
    popupText.textContent = smorfia[number];
    // Hide the popup after 3 seconds
    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);
}
