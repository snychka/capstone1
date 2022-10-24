
// populates the select element
// with the passed-in array, items
function populateDropdown(element, items) {
    items.forEach(item => {
        element.appendChild(new Option(item, item))
    });
}