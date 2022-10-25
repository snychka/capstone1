

let mountainList = document.getElementById('mountainList');
let mountain = document.getElementById('mountain');

// appends an li to ul with next prefix: value.
// returns the added li
function addListItem(ul, prefix, value) {
    const li = document.createElement("li");
    const text = document.createTextNode(
        `${prefix}: ${value}`);
    li.appendChild(text);
    ul.appendChild(li);
    return li;
}

function displayMountain() {

    clearList(mountain);
    let chosenMountain = mountainList.value;
    let result = mountainsArray.find(mountain => mountain.name === chosenMountain);

    addListItem(mountain, "Name", result.name);
    addListItem(mountain, "Description", result.desc);
    addListItem(mountain, "Elevation", result.elevation);

    const imgNode = addListItem(mountain, "Image", "");

    imgNode.appendChild(document.createElement("br"));
    const img = new Image(335, 220);
    img.src = "assets/" + result.img;
    imgNode.appendChild(img);

}

populateDropdown(mountainList, mountainsArray.map(mount => mount.name).sort());

window.onload = function () {
    mountainList.onchange = displayMountain;
}