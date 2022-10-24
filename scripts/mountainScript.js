

let mountainsList = document.getElementById('mountainsList');
let moutains = document.getElementById('mountains');

function displayMountain() {

    clearList(mountains);
    let chosenMountain = mountainsList.value;
    let result = mountainsArray.find(mountain => mountain.name === chosenMountain);

    const li = document.createElement("li");
    const text = document.createTextNode(
        `Name: ${result.name}`);
    li.appendChild(text);
    moutains.appendChild(li);
}

populateDropdown(mountainsList, mountainsArray.map(mount => mount.name).sort());