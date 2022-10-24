
// populates the select element
// with the passed-in array, items
function populateDropdown(element, items) {
    items.forEach(item => {
        element.appendChild(new Option(item, item))
    });
}

/*
let state, parkType;

function setState(val) {
    state = val;
    document.getElementById("state").textContent = val === "" ? "(non-chosen)" : val;
}

function setParkType(val) {
    parkType = val;
    document.getElementById("parktype").textContent = val === "" ? "(non-chosen)" : val;
}
 
// displays the parks in selector.
// uses global var. state 
function displayParks(selector) {
    let stateResults = nationalParksArray.filter(park => park.State === state);
    let typeResults = nationalParksArray.filter(park => park.LocationName.includes(parkType));

    let results = [];
    if (stateResults.length > 0 && typeResults.length > 0) {
        results = Array.from(new Set(stateResults.filter(item => typeResults.includes(item))));
        //setState(""); setParkType("");
    } else {
        results = stateResults.length > 0 ? stateResults : typeResults;
    }

    const ul = document.querySelector(selector);
    ul.innerHTML = ''; 
    results.forEach(park => {
        ul.innerHTML += `<li>${park.LocationName}</li>`;
    });

}


// https://stackoverflow.com/questions/70561282/how-to-link-event-logic-to-bootstrap-5-dropdown-clicks
// https://getbootstrap.com/docs/5.2/components/dropdowns/#events
// gets the selected state, stores it in global var state, triggers displaying the parks 
const statesDropdown = document.getElementById('statesDropdown');
statesDropdown.addEventListener('hide.bs.dropdown', event => {
    // side-effect: if both dropdowns have values, null park type
    if (parkType !== "" && state !== "") {setParkType("");}
    setState(event.clickEvent.target.innerHTML);
    displayParks('#parks');
});

// gets the selected park type, stores it in global var parkType, triggers displaying parks
const parkTypesDropdown = document.getElementById('parkTypesDropdown');
parkTypesDropdown.addEventListener('hide.bs.dropdown', event => {
    // side-effect: if both dropdowns have values, null state
    if (parkType !== "" && state !== "") {setState("");}
    setParkType(event.clickEvent.target.innerHTML);
    displayParks('#parks');
});
*/

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


