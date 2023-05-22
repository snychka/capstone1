"use string";

let location_select = document.getElementById("location");
let parks_tbody = document.getElementById("parks_table"); 


function display_parks_by_location(event) {
    
    function find_parks(state) {
        return nationalParksArray.filter(park => park.State === state);
    }
    
    function insert_parks_into_table(tbody, parks) {
        parks.forEach(park => {
            let row = tbody.insertRow();
            let state_cell = row.insertCell();
            let name_cell = row.insertCell();
            state_cell.appendChild(document.createTextNode(park.State));
            name_cell.appendChild(document.createTextNode(park.LocationName));
            /*
            let row = document.createElement('tr');
            let state_cell = document.createElement('td');
            let name_cell = document.createElement('td');
            let state = document.createTextNode(park.State);
            let name = document.createTextNode(park.LocationName);
            state_cell.appendChild(state);
            name_cell.appendChild(name);
            row.appendChild(state_cell);
            row.appendChild(name_cell);
            parks_table.appendChild(row);
            */
        });
    }

    // uncertain if safe/recommended
    function clear_table(tbody) {
        tbody.innerHTML = '';
    }

    let target_state = event.srcElement.value;
    let parks = find_parks(target_state);
    clear_table(parks_tbody);
    insert_parks_into_table(parks_tbody, parks);
}

location_select.addEventListener("change", display_parks_by_location);

function populate_select(select, data) {
    data.forEach(element => {
        var option = document.createElement("option");
        option.textContent = element;
        option.value = element;
        select.appendChild(option);
    });
}

populate_select(location_select, locationsArray);