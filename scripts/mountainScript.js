

let mountainsList = document.getElementById('mountainsList');

populateDropdown(mountainsList, mountainsArray.map(mount => mount.name).sort());