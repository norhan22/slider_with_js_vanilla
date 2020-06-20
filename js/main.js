// --------------------------
// 1# Collecting Info 
// --------------------------
const
    // selectors
    // slider 
    slider = document.querySelectorAll('.slider'),
    // items
    items = Array.from(document.querySelectorAll('.slider_items img')), // Array.from [ES6]
    // controls
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    indicators = document.getElementById('indicators'),

    // Numbers
    // Get Number of Slides
    itemsCount = items.length;

// Set Current slide
var currentSlide = 1;

// ----------------
//  Functions
// ----------------
function prevSlide() {
    currentSlide--;
    console.log("prev");
}

function nextSlide() {
    currentSlide++;
    console.log("next");
}

// ----------------
//  Events
// ----------------

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

// ----------------
//  pagination
// ----------------
// create UL 
const pagination = document.createElement('ul');

// Set id attr
pagination.setAttribute('id', 'pagination');

// Created li 
for (let i = 1; i < itemsCount; i++) {
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