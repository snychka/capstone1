
// populates the select element
// with the passed-in array, items
function populateDropdown(element, items) {
    items.forEach(item => {
        element.appendChild(new Option(item, item))
    });
}

// https://stackoverflow.com/questions/42853028/removing-li-from-ul-in-for-loop-js
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild#simple_examples
// for a ul, the following should work!
//   function clearList(ul) { let a = Array.from(ul.children); a.forEach(x => ul.removeChild(x)); }
function clearList(ul) {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}