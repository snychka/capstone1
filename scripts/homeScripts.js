
// populates the bootstrap drop-down at selector
// with the passed-in array, items
function populateDropdown(selector, items) {
    //const ul = document.querySelector('.dropdown-menu');
    const ul = document.querySelector(selector);
    items.forEach(item => {
        ul.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
    });
}

const statesDropdown = document.getElementById('statesDropdown');
statesDropdown.addEventListener('hide.bs.dropdown', event => {
  console.log(event.clickEvent.target.innerHTML);
});

populateDropdown('#statesDropdown .dropdown-menu', locationsArray);
