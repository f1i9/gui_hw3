/* 
File: index.js
GUI Assignment: Homework 3
Content: This file contains JavaScript functions for generating and displaying a multiplication table 
based on user inputs from an HTML form. The `generateTable` function captures minimum and maximum 
row and column values, validates input, and dynamically builds an HTML table containing the products 
of each cell. The function also restricts the table size to a maximum difference of 100 rows and 
columns. Additionally, `clearFields` resets the input fields and clears the table display. 
Event listeners on input fields allow table generation with the Enter key.
Alireza Jahanban, UMass Lowell Computer Science, Alireza_Jahanban@student.uml.edu
Copyright (c) 2024 by Jahanban. All rights reserved. 
This code is free to use by anyone for business or educational purposes with credit to the author.
Written in Oct 2024.
*/


function generateTable() {
    const min_row = parseInt(document.getElementById('min-row').value);
    const max_row = parseInt(document.getElementById('max-row').value);
    const min_col = parseInt(document.getElementById('min-col').value);
    const max_col = parseInt(document.getElementById('max-col').value);


    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = "";

    if (! (isNaN(min_row) || isNaN(max_row) || isNaN(min_col) || isNaN(max_col)) ) {

        if ( (max_row - min_row <= 100) && (max_col - min_col <= 100) ) {
            const table = document.createElement('table');
            const headerRow = table.insertRow();
    
            const header1 = headerRow.insertCell();
            header1.textContent = "#";
    
            for (let i = min_col; i <= max_col; i++) {
                const header1 = headerRow.insertCell();
                header1.textContent = `${i}`;
            }
    
            for (let i = min_row; i <= max_row; i++) {
                const row = table.insertRow();
                const multiplierCell = row.insertCell();
                multiplierCell.textContent = `${i}`;
                for (let j = min_col; j <= max_col; j++) {
                    const multiplierCell = row.insertCell();
                    multiplierCell.textContent = `${i * j}`;
                }
            }
            tableContainer.appendChild(table);
        } else {
            tableContainer.innerHTML = '<p>The difference between numbers cannot be larger than 100.</p>';
        }

    } else {
        tableContainer.innerHTML = '<p>Please enter four numbers.</p>';
    }
}

function clearFields() {
    const inputs = document.querySelectorAll('#inputbox input');
    inputs.forEach(input => input.value = '');

    document.getElementById("tableContainer").innerHTML = "";
}

document.querySelectorAll("#inputbox input").forEach(input => {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            generateTable();
        }
    });
});
