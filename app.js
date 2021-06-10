const body = document.body;

const toggle = body.querySelector('#toggle');
const slidebar = body.querySelector('#slidebar');
const bookmarkBtn = body.querySelector('.bookmark-btn');
const bookmarkIconMobile = body.querySelector('.bookmark-icon-mobile');
const backProjectBtn = body.querySelector('.back-project-btn');
const modalCloseIcon = body.querySelector('.icon-close');


const moderateCyan = 'hsl(176, 50%, 47%)';
const darkCyan = 'hsl(176, 72%, 28%)';
const darkGray = 'hsl(0, 0%, 48%)';

// console.log(bookmarkBtn);
// console.dir(toggle)


// TODO ALL FUNCTIONS DEFINED HERE // 
function callbackParams(callback) {
    callback();
}

// Toggle navbar when hamburger/close is clicked
function toggleNav() {
    const nav = body.querySelector('#nav');
    
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

function bookmarkToggle(bkmkBtn) {
    let bkmkBtnColor = window.getComputedStyle(bkmkBtn).backgroundColor;
    const bookmarkText = body.querySelector('.bookmark-btn span');

    // Define in RGB form becoz if statement ony works with RGB
    // bgColor
    let lightSky = 'rgb(244, 246, 250)';
    let lightGrey = 'rgb(235, 235, 235)';
    // textColor
    let darkCyanRGB = 'rgb(20, 123, 116)';
    let darkGreyRGB = 'rgb(122, 122, 122)';
    
    // to bookmark
    if (bkmkBtnColor === lightGrey) {   
        bkmkBtn.style.color = darkCyanRGB;
        bkmkBtn.style.backgroundColor = lightSky;
        bookmarkText.textContent = bookmarkText.textContent + 'ed'
        body.querySelector('#circle').style.fill = darkCyan;        
        body.querySelector('#icon').style.fill = 'white';        
    }
    // to un-bookmark 
    else if (bkmkBtnColor === lightSky) {
        bkmkBtn.style.color = darkGreyRGB;
        bkmkBtn.style.backgroundColor = lightGrey;
        bookmarkText.textContent = bookmarkText.textContent.substr(0, bookmarkText.textContent.length-2);
        body.querySelector('#circle').style.fill = 'rgb(47, 47, 47)';        
        body.querySelector('#icon').style.fill = 'rgb(177, 177, 177)'  
    }
}

function bookmarkToggleMobile(bkmkIcon) {
    let circleBgColor = window.getComputedStyle(bkmkIcon.children[0].children[0]).fill;
    let circle = bkmkIcon.children[0].children[0];

    // to bookmark
    if (circleBgColor === 'rgb(47, 47, 47)') {
        circle.style.fill = darkCyan;
        circle.nextElementSibling.style.fill = 'white';
    } // to un-bookmark
    else if (circleBgColor === 'rgb(20, 123, 116)') {
        circle.style.fill = 'rgb(47, 47, 47)';
        circle.nextElementSibling.style.fill = 'rgb(177, 177, 177)';
    }
}

function openModalCard() {
    const modalCard = body.querySelector('#modal-card');
    modalCard.classList.toggle('toggle-modal-card');
    console.log("open modal card");
}

function closeModalCard() {
    const modalCard = body.querySelector('#modal-card');
    modalCard.classList.toggle('toggle-modal-card');
    console.log("close modal card");
}
// TODO ====================== // 




slidebarColor(slidebar);

toggle.addEventListener('change', toggleNav)

bookmarkBtn.addEventListener('click', function callbackParams() {
    bookmarkToggle(this);
});

bookmarkIconMobile.addEventListener('click', function callbackParams() {
    bookmarkToggleMobile(this);
})

backProjectBtn.addEventListener('click', openModalCard);
modalCloseIcon.addEventListener('click', closeModalCard);