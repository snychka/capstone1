
let location_select = document.getElementById("location");

function populate_select(select, data) {
    data.forEach(element => {
        var option = document.createElement("option");
        option.textContent = element;
        option.value = element;
        select.appendChild(option);
    });
}

populate_select(location_select, locationsArray);
