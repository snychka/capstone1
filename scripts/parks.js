let location_select = document.getElementById("location");
let parks_table = document.getElementById("parks_table");

function find_park(event) {
    let target_state = event.srcElement.value;
    let parks = nationalParksArray.filter(park => park.State === target_state);
    parks.forEach(park => {
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
    });
}

location_select.addEventListener("change", find_park);

function populate_select(select, data) {
    data.forEach(element => {
        var option = document.createElement("option");
        option.textContent = element;
        option.value = element;
        select.appendChild(option);
    });
}

populate_select(location_select, locationsArray);