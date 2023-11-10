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
