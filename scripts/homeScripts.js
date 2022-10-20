
function populateDropdown(items) {
    const div = document.querySelector('.dropdown-menu');
    items.forEach(item => {
        // <li><a class="dropdown-item" href="#">state 1 </a></li>
        div.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
    });
}

populateDropdown(locationsArray);