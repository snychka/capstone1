
// populates the bootstrap drop-down at selector
// with the passed-in array, items
function populateDropdown(selector, items) {
    const ul = document.querySelector(selector);
    items.forEach(item => {
        ul.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
    });
}

let state, parkType;
 
// displays the parks in selector.
// uses global var. state 
function displayParks(selector) {
    let stateResults = nationalParksArray.filter(park => park.State === state);
    let typeResults = nationalParksArray.filter(park => park.LocationName.includes(parkType));

    let results = [];
    if (stateResults.length > 0 && typeResults.length > 0) {
        results = Array.from(new Set(stateResults.filter(item => typeResults.includes(item)))); 
        state = ""; parkType = "";
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
    state = event.clickEvent.target.innerHTML;
    displayParks('#parks');
});

// gets the selected park type, stores it in global var parkType, triggers displaying parks
const parkTypesDropdown = document.getElementById('parkTypesDropdown');
parkTypesDropdown.addEventListener('hide.bs.dropdown', event => {
    parkType = event.clickEvent.target.innerHTML;
    displayParks('#parks');
});


populateDropdown('#statesDropdown .dropdown-menu', locationsArray);
populateDropdown('#parkTypesDropdown .dropdown-menu', parkTypesArray);
