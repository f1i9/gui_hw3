
function generateTable() {
    const min_row = parseInt(document.getElementById('min-row').value);
    const max_row = parseInt(document.getElementById('max-row').value);
    const min_col = parseInt(document.getElementById('min-col').value);
    const max_col = parseInt(document.getElementById('max-col').value);


    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

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
