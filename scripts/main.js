var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/cat1.png');
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
        window.location.href = '2.html';
    }
};

var myButton = document.getElementById('changeButton');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

let button3 = document.getElementById('b3')

button3.onclick = function () {
    window.location.href = '3.html';
}

let linkBar = document.querySelector('svg')

let textLink = linkBar.childNodes[9]
textLink.onmouseover = function () {
    const randomColor = randomValueFromArray(['purple', 'red', 'blue','white']);
    textLink.setAttribute('fill', randomColor);
}
textLink.onmouseout = function () {
    textLink.setAttribute('fill', 'white');
}
textLink.onclick = function () {
    window.location.href = '1.html';
}

let bigCircle = linkBar.childNodes[3]
let circle = linkBar.childNodes[5]

circle.onmouseover = function () {
    circle.setAttribute('r', '45%');
    const oldR = parseInt(bigCircle.getAttribute('r'));
    bigCircle.setAttribute('r', oldR + 1 + "%" );

}
circle.onmouseout = function () {
    circle.setAttribute('r', '50%');
    const random = Math.floor(100 - Math.random() * 15) + '%';
    circle.setAttribute('cy', random);
}
circle.onclick = function () {
    window.location.href = '2.html';
}

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}