const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

// 2 - create an HTML table
let table = document.createElement("table");

let headerRow = document.createElement("tr");

var keys = Object.keys(MOUNTAINS[0]);
keys.forEach(key => {
    let th = document.createElement("th");
    let heading = document.createTextNode(key);

    th.appendChild(heading);
    headerRow.append(th);

});


// append row to table
table.appendChild(headerRow);


// loop through objects in array
MOUNTAINS.forEach(mountain => {
    let tr = document.createElement("tr");

    // add height column
    let name = document.createElement("td");
    let nameText = document.createTextNode(mountain.name);
    name.appendChild(nameText);
    tr.appendChild(name);

    // add height column
    let height = document.createElement("td");
    let heightText = document.createTextNode(mountain.height);
    height.appendChild(heightText);
    tr.appendChild(height);

    // add  place column
    let place = document.createElement("td");
    let placeText = document.createTextNode(mountain.place);
    place.appendChild(placeText);
    tr.appendChild(place);

    //add new row to table
    table.appendChild(tr);
});

// add table to document
document.getElementById("mountains").appendChild(table);

