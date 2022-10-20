
// populates the bootstrap drop-down at selector
// with the passed-in array, items
function populateDropdown(selector, items) {
    const ul = document.querySelector(selector);
    items.forEach(item => {
        ul.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
    });
}

let state;

// displays the parks in selector.
// uses global var. state 
function displayParks(selector) {
    let stateResults = nationalParksArray.filter(park => park.State === state);
    const ul = document.querySelector(selector);
    ul.innerHTML = ''; // beyond the scope
    stateResults.forEach(park => {
        ul.innerHTML += `<li>${park.LocationName}</li>`;
    });
}


// https://stackoverflow.com/questions/70561282/how-to-link-event-logic-to-bootstrap-5-dropdown-clicks
// https://getbootstrap.com/docs/5.2/components/dropdowns/#events
// gets the selected state, stores it in global var state, triggers displaying the states
const statesDropdown = document.getElementById('statesDropdown');
statesDropdown.addEventListener('hide.bs.dropdown', event => {
    state = event.clickEvent.target.innerHTML;
    displayParks('#parks');
});


populateDropdown('#statesDropdown .dropdown-menu', locationsArray);
populateDropdown('#parkTypesDropdown .dropdown-menu', parkTypesArray);
