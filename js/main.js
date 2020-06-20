// --------------------------
// Collecting Info 
// --------------------------
const
    // ---------- selectors
    // slider 
    slider = document.querySelectorAll('.slider'),
    // items
    items = Array.from(document.querySelectorAll('.slider_items img')), // Array.from [ES6]
    // index
    slideIndexElm = document.querySelector('.slider_number .current'),
    slideIndexAllElm = document.querySelector('.slider_number .all'),
    // controls
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    indicators = document.getElementById('indicators'),

    // ---------- counts
    // Get Number of Slides
    itemsCount = items.length;


// Set full length of items 
slideIndexAllElm.textContent = itemsCount;

// Set Current slide
var currentSlide = 1;



// ----------------
//  pagination
// ----------------
// create UL 
const pagination = document.createElement('ul');

// Set id attr
pagination.setAttribute('id', 'pagination');

// Created li 
for (let i = 1; i <= itemsCount; i++) {
    // create li 
    var paginationList = document.createElement('li');

    // set item index
    paginationList.setAttribute('data-index', i);

    // set item index text 
    paginationList.appendChild(document.createTextNode(i));

    // append Item to the parent
    pagination.appendChild(paginationList);

}
// ADDED LIST TO THE PAGE
indicators.appendChild(pagination);
// created List Elm
const paginationCreatedUL = document.getElementById('pagination'),
    paginationCreatedList = Array.from(paginationCreatedUL.children);


// ----------------
//  Functions
// ----------------


// set the current slide index

function checker() {
    // set the slide number
    slideIndexElm.textContent = currentSlide;

    // remove active class from siblings
    disableSlides();

    // Add active class to the current slide 
    activateCurrentSlide();

    // check the current
    if (currentSlide === itemsCount) {
        nextBtn.classList.add('disable');
        prevBtn.classList.remove('disable');

    } else if (currentSlide === 1) {
        prevBtn.classList.add('disable');
        nextBtn.classList.remove('disable');
    } else {
        nextBtn.classList.remove('disable');
        prevBtn.classList.remove('disable');
    }
}

//  Active the current slide
function activateCurrentSlide() {
    // set active class on current slide
    items[currentSlide - 1].classList.add("active");
    // set active class to pagination
    paginationCreatedUL.children[currentSlide - 1].classList.add('active');
}

//  Disable the rest slides
function disableSlides() {
    // remove active class from siblings slides 
    items.forEach(item => {
        item.classList.remove('active');
    });
    // remove active class from siblings indicators 
    paginationCreatedList.forEach(page => {
        page.classList.remove('active');
    });
}
// prev 
function prevSlide() {
    // check the current
    if (currentSlide > 1) {
        currentSlide--;
        checker();
    }

}
// next
function nextSlide() {
    if (currentSlide < itemsCount) {
        currentSlide++;
        checker();
    }
}
// pagination currentSlider
function getPaginationIndex(elm) {
    return parseInt(elm.getAttribute('data-index'));
}
// ---------------------------
//  Triggers
// ---------------------------

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

for (let i = 0; i < paginationCreatedList.length; i++) {
    paginationCreatedList[i].onclick = function () {

        currentSlide = getPaginationIndex(this);
        checker();
    }
}

// ---------------------------
//  onload
// ---------------------------

checker();