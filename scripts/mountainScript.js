

let mountainList = document.getElementById('mountainList');
let mountain = document.getElementById('mountain');

function addListItem(ul, prefix, value) {
    const li = document.createElement("li");
    const text = document.createTextNode(
        `${prefix}: ${value}`);
    li.appendChild(text);
    ul.appendChild(li);
}

function displayMountain() {

    clearList(mountain);
    let chosenMountain = mountainList.value;
    let result = mountainsArray.find(mountain => mountain.name === chosenMountain);


    addListItem(mountain, "Name", result.name);
    addListItem(mountain, "Description", result.desc);
    addListItem(mountain, "Elevation", result.elevation);
    /*
    const description = document.createElement("li");
    const text = document.createTextNode(
        `Name: ${result.name}`);
    name.appendChild(text);
    moutains.appendChild(name);
    */
}

populateDropdown(mountainList, mountainsArray.map(mount => mount.name).sort());