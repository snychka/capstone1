"use strict";

// populates the dropdown element
// with the passed-in array, items.
// clears all elements first, then adds a default element
function populateDropdown(element, items) {
    clearElement(element);
    element.appendChild(new Option("Make a selection", ""));
    items.forEach(item => {
        element.appendChild(new Option(item, item));
    });
}

// https://stackoverflow.com/questions/42853028/removing-li-from-ul-in-for-loop-js
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild#simple_examples
// for a ul, the following should work!
//   function clearList(ul) { let a = Array.from(ul.children); a.forEach(x => ul.removeChild(x)); }
//
// generic, clears an element of its children
function clearElement(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }

}

// clears a ul
function clearList(ul) { clearElement(ul); }

// clears a drop-down, adding a default option after.
function clearDropDown(list) { clearElement(list); list.appendChild(new Option("(No items to select)", "")); }