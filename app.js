const body = document.body;

const toggle = body.querySelector('#toggle');
const slidebar = body.querySelector('#slidebar');
const bookmarkBtn = body.querySelector('.bookmark-btn');
const bookmarkIconMobile = body.querySelector('.bookmark-icon-mobile');
const backProjectBtn = body.querySelector('.back-project-btn');
const modalCloseIcon = body.querySelector('.icon-close');
const checkboxArr = body.querySelectorAll('.checkbox');
const titles = body.querySelectorAll('.title');

const moderateCyan = 'hsl(176, 50%, 47%)';
const darkCyan = 'hsl(176, 72%, 28%)';
const darkGray = 'hsl(0, 0%, 48%)';

// console.log(checkedArr);
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
    const overlay = body.querySelector('#overlay');
    
    modalCard.classList.toggle('toggle-modal-card');
    overlay.style.display = 'block';
}

function closeModalCard() {
    const modalCard = body.querySelector('#modal-card');
    const overlay = body.querySelector('#overlay');
    
    modalCard.classList.toggle('toggle-modal-card');
    overlay.style.display = 'none';
}

function toggleRewardCardFocus(checkbox) {
    // access card corresponding to the checkbox
    const card = checkbox.parentElement.parentElement;
    const pledgeAmtDiv = checkbox.parentElement.nextElementSibling;

    if (checkbox.checked) {
        card.style.border = `3px solid ${moderateCyan}`;
        pledgeAmtDiv.style.display = 'grid';
        
    } else if (!checkbox.checked) {
        card.style.border = '1px solid hsl(0, 0%, 89%)';
        pledgeAmtDiv.style.display = 'none';
    }
}


function checkboxRules(checkbox) {
    // TODO
    // dont let user select > 1 card  
    // selecting a new card will unselect the prev selected card 
    const card = checkbox.parentElement.parentElement;
    const pledgeAmtDiv = checkbox.parentElement.nextElementSibling;

    if (checkbox.checked) {
        selectedCard.push(card);
        checkboxes.push(checkbox);
        pledgeAmtDivs.push(pledgeAmtDiv);
        

        if (selectedCard.length > 1 && checkboxes.length > 1 && pledgeAmtDivs.length > 1) {
            // unselect the previously selected card
            selectedCard[0].style.border = '1px solid hsl(0, 0%, 89%)';
            checkboxes[0].checked = false
            pledgeAmtDivs[0].style.display = 'none'
            // remove first element
            selectedCard = selectedCard.filter((card, i) => i === selectedCard.length-1)
            checkboxes = checkboxes.filter((card, i) => i === checkboxes.length-1)
            pledgeAmtDivs = pledgeAmtDivs.filter((card, i) => i === pledgeAmtDivs.length-1)
        } 
    } else {
        selectedCard.pop();
        checkboxes.pop();
        pledgeAmtDivs.pop();
    }
}

function titleHover(title) {
    
}

// TODO Execute Actions ====================== // 

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


let selectedCard = [], checkboxes = [], pledgeAmtDivs = [];
checkboxArr.forEach(function(checkbox) {
    checkbox.addEventListener('click', function callbackParams() {
        toggleRewardCardFocus(this);
        checkboxRules(this);
    });
})

titles.forEach(function(title) {
    title.addEventListener('mouseenter', function() {
        // TODO
        // checkbox border changed when .title is being hovered 
        checkbox = this.previousElementSibling
        checkbox.style.border = `1px solid ${moderateCyan}`
    })
    title.addEventListener('mouseleave', function() {
        // TODO
        // checkbox border changed when .title is being hovered 
        checkbox = this.previousElementSibling
        checkbox.style.border = `1px solid hsl(0, 0%, 85%)`;
    })
})

