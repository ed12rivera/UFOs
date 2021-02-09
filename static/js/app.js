// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Create a function to build a table out of our data
function buildTable(data) {
    // Begin by clearing any existing data
    tbody.html("");
    
    // Loop through each object in the data 
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

function handleClick() {
    // select datetime id from html tags
    // .property("value") stores the value into the variable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime ===date);
    };

    // Rebuild the table using the filtered data.
    // @ NOTE: If no date was entered, tehn filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Create an event to listen for a button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

