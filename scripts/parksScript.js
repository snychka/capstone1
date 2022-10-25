
let list = document.getElementById('list');
let parks = document.getElementById('parks');


// displays the parks in parks.
function displayParksOd() {
    clearList(parks);
    let state = statesList.value;
    let stateResults = [];
    if (state.length > 0) {
        stateResults = nationalParksArray.filter(park => park.State === state);
    }

    let parkType = parkTypesList.value;
    let typeResults = [];
    if (parkType.length > 0) {
        typeResults = nationalParksArray.filter(park => park.LocationName.includes(parkType));
    }

    let results = [];
    if (stateResults.length > 0 && typeResults.length > 0) {
        results = Array.from(new Set(stateResults.filter(item => typeResults.includes(item))));
    } else {
        results = stateResults.length > 0 ? stateResults : typeResults;
    }

    results.forEach(park => {
        const li = document.createElement("li");
        const text = document.createTextNode(`${park.LocationName}`);
        li.appendChild(text);
        parks.appendChild(li);
    });

}

// https://stackoverflow.com/questions/18333427/how-to-insert-a-row-in-an-html-table-body-in-javascript
//
// adds selectedParks to a table
function displayParks(selectedParks) {

    function addCell(row, value) {
        const cell = row.insertCell();
        cell.appendChild(document.createTextNode(value))
    }

    selectedParks.forEach(park => {
        const row = parks.insertRow();

        addCell(row, park.LocationName);
    });


}
/*
    LocationName: "Acadia National Park",
    Address
    City: "Bar Harbor",
    State: "Maine",
    Phone: "(207) 288-3338",
    Visit: "https://www.nps.gov/acad/index.htm",

*/


function displayAll() {
    clearDropDown(list);
    displayParks(nationalParksArray);
}


function populateWithStates() { populateDropdown(list, locationsArray); }
function populateWithTypes() { populateDropdown(list, parkTypesArray); }


window.onload = function () {
    // list.onchange = 
    states.onclick = populateWithStates;
    types.onclick = populateWithTypes;
    all.onclick = displayAll;

}
