const body = document.body;

const nav = body.querySelector('#nav');
const toggle = body.querySelector('#toggle');
const slidebar = body.querySelector('#slidebar');

const moderateCyan = 'hsl(176, 50%, 47%)';

console.log(slidebar)
// console.dir(toggle)


function callbackParams(callback) {
    callback();
}

// Toggle navbar when hamburger/close is clicked
function toggleNav() {
    nav.classList.toggle('toggle-nav');
}

function slidebarColor(slidebar) {
    let amountBacked = body.querySelector('.amount-backed .main span').textContent;
    let totalAmount = body.querySelector('.amount-backed .sub span').textContent;
    
    amountBacked = amountBacked.replace(',', '');
    totalAmount = totalAmount.replace(',', '');
    
    backedPercent = (amountBacked/ totalAmount * 100)

    slidebar.style.background = 
    `linear-gradient(to right, ${moderateCyan} 0%, ${moderateCyan} ${backedPercent}%, hsl(0, 0%, 92%) ${backedPercent}%)`

}

slidebarColor(slidebar);
toggle.addEventListener('change', toggleNav)



