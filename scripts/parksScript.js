
// populates the select element
// with the passed-in array, items
function populateDropdown(element, items) {
    items.forEach(item => {
        element.appendChild(new Option(item, item))
    });
}


let statesList = document.getElementById('statesList');
let parkTypesList = document.getElementById('parkTypesList');
let parks = document.getElementById('parks');

// https://stackoverflow.com/questions/42853028/removing-li-from-ul-in-for-loop-js
function clearList(ul) {
    const length = ul.children.length;
    for (let i = 0; i < length; i++) {
        ul.removeChild(ul.children[0]);
    }
}

// displays the parks in parks.
function displayParks() {
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


populateDropdown(statesList, locationsArray);
populateDropdown(parkTypesList, parkTypesArray);


