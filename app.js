const body = document.body;
const nav = body.querySelector('#nav');
const toggle = body.querySelector('#toggle');

// console.dir(toggle)


function callbackParams(callback) {
    callback();
}

// Toggle navbar when hamburger/close is clicked
function toggleNav() {
    nav.classList.toggle('toggle-nav');
}

toggle.addEventListener('change', toggleNav)


