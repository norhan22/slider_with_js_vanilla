// --------------------------
// 1# Collecting Info 
// --------------------------
const
    // selectors
    // slider 
    slider = document.querySelectorAll('.slider'),
    // items
    items = Array.from(document.querySelectorAll('.slider_container .items img')), // Array.from [ES6]
    // controls
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    indicators = document.getElementById('indicators'),
    pagination = document.createElement('ul').setAttribute('id', 'pagination'),
    paginationList = document.createElement('li'),

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