const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }
});

list.onclick = function() {
    const listItem = document.createElement('li');
    const listContent = prompt('What content do you want the list item to have?');
    listItem.textContent = listContent;
    if (listContent != null) list.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        const listContent = prompt('Enter new content for your list item');
        this.textContent = listContent;
    }
}

var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess() {
    alert('I am a placeholder');
}