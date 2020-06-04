let counter = 0;

function incrementCounter(value) {
    counter += value;
    console.log('the new value of counter is: ', counter);
}

// get the clickable-span span, add an event "onclick" 
// that would add text, to the content div

// i need to speak with the DOM
// DOM = Document Object Model

// SPEAKING WITH THE DOM :

const spanEl = document.getElementById('clickable-span');
spanEl.addEventListener('click', appendtext);
spanEl.addEventListener('click', appendtext2);
// spanEl.style = "font-weight: bold";
spanEl.classList.add('buttons');

const text = ' text ';
function appendtext() {
    // (div with id "content").text += text;
    console.log('inside appendText function');
    const divEl = document.getElementById('content');
    // this sets all innerHTML of the divEl into a string
    divEl.innerText = divEl.innerText + text;
}

function appendtext2() {
    console.log('inside appendText function');
    const divEl = document.getElementById('content');
    // divEl.innerHTML += `
    //     <span class="red-elements">
    //         <img src="deckel-vacknin.jpg" alt="deckel" >
    //         ${text}
    //     </span>
    // `;
    const newSpan = document.createElement('span');
    newSpan.innerText = text;
    divEl.appendChild(newSpan);
}

// timeout and intervals
// accepts a function (as first param), and an interval (as second param)

// setInterval(function() {
//     const clockSpan = document.getElementById('clock');
//     const date = new Date();
//     clockSpan.innerText = date.toLocaleTimeString();
// }, 1000); //runs every 1000 miliseconds

// setTimeout(function() {
//     const clockSpan = document.getElementById('clock');
//     const date = new Date();
//     clockSpan.innerText = date.toLocaleTimeString();
// }, 1000); //runs once after 1000 miliseconds

// clearing timeout/interval

let intervalId;
let gameCounter = 0;
function startClock() {
    intervalId = setInterval(function () {
        const clockSpan = document.getElementById('clock');
        // const date = new Date();
        // clockSpan.innerText = date.toLocaleTimeString();
        clockSpan.innerText = gameCounter++;
    }, 1); //runs every 1000 miliseconds
}

function toggleClock() {
    if (intervalId) {
        clearInterval(intervalId);
        // clearTimeout(timeoutId);
        intervalId = null;
    } else {
        startClock();
    }
}
startClock();