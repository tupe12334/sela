let counter = 0;

function incrementCounter(value) {
    counter += value;
    console.log('the new value of counter is: ', counter);
}

// get the clickable-span span, add an event "onclick" 
// that would add text, to the content div

// i need to speak with the DOM
// DOM = Document Object Model

const spanEl = document.getElementById('clickable-span');
spanEl.addEventListener('click', appendtext);
// spanEl.style = "font-weight: bold";
spanEl.classList.add('buttons');

const text = ' text ';
function appendtext() {
    // (div with id "content").text += text;
    console.log('inside appendText function');
    const divEl = document.getElementById('content');
    divEl.innerText += text;
}
