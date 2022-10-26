"use strict";

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

// function that can "fetch" the sunrise/sunset times
// from the spec
async function getSunsetForMountain(lat, lng) {
    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
}


//async function displayMountain() {
function displayMountain() {

    clearList(mountain);
    let chosenMountain = mountainList.value;
    let result = mountainsArray.find(mountain => mountain.name === chosenMountain);

    addListItem(mountain, "Name", result.name);
    addListItem(mountain, "Description", result.desc);
    addListItem(mountain, "Elevation", result.elevation);

    const imgNode = addListItem(mountain, "Image", "");

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image#examples
    imgNode.appendChild(document.createElement("br"));
    const img = new Image(335, 220);
    img.src = "assets/" + result.img;
    imgNode.appendChild(img);


    // Fetch the sunset/sunrise times for a specific mountain
    // based on the spec
    getSunsetForMountain(result.coords.lat, result.coords.lng).then(data => {
        addListItem(mountain, "Sunrise/sunset (UTC)", `${data.results.sunrise}/${data.results.sunset}`);
    });

    // below is async await -- no then -- way to deal with promises.
    // also need to make this displayMountain func async, since using await.
    //
    //let data = await getSunsetForMountain(result.coords.lat, result.coords.lng);
    //addListItem(mountain, "Sunrise/sunset (UTC)", `${data.results.sunrise}/${data.results.sunset}`);

}

populateDropdown(mountainList, mountainsArray.map(mount => mount.name).sort());

window.onload = function () {
    mountainList.onchange = displayMountain;
}