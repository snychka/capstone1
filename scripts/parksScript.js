
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

    parks.innerHTML = "";

    function addCell(row, child) {
        const cell = row.insertCell();
        cell.appendChild(child);
    }

    function addTextCell(row, text) { addCell(row, document.createTextNode(text)); }

    // https://stackoverflow.com/questions/4772774/how-do-i-create-a-link-using-javascript
    // https://stackoverflow.com/questions/804256/how-do-i-add-target-blank-to-a-link-within-a-specified-div
    function addLinkCell(row, link, linkText) {
        let a = document.createElement('a');
        a.appendChild(document.createTextNode(linkText));
        a.setAttribute("target", "blank");
        a.href = link;
        addCell(row, a);
    }

    selectedParks.forEach(park => {
        const row = parks.insertRow();

        addTextCell(row, park.LocationName);
        addTextCell(row, park.Address);
        addTextCell(row, park.City);
        addTextCell(row, park.State);
        addTextCell(row, park.Phone);
        park.Visit ? addLinkCell(row, park.Visit, "Click for more details!") : addTextCell(row, "No further details")
    });


}

function displayAll() {
    clearDropDown(list);
    displayParks(nationalParksArray);
}

function getParksByState() {
    let state = list.value;
    stateResults = nationalParksArray.filter(park => park.State === state);
    return stateResults;
}

function displayParksByState() {
    displayParks(getParksByState());
}


function filterParks() {
    displayParksByState();
}

function populateWithStates() { populateDropdown(list, locationsArray); }
function populateWithTypes() { populateDropdown(list, parkTypesArray); }


window.onload = function () {
    list.onchange = filterParks;
    states.onclick = populateWithStates;
    types.onclick = populateWithTypes;
    all.onclick = displayAll;

}
