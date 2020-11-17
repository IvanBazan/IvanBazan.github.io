// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS

var storyText =  'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
var insertx = ['Willie The Goblin','Big Daddy','Father Christmas']
var inserty = ['the soup kitchen','Disneyland','the White House']
var insertz = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']




// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    if(customName.value !== '') {
        let name = customName.value;
    }
    if(document.getElementById("uk").checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);
        console.log(weight, temperature)
    }
    storyText = storyText.replace(':insertx:', randomValueFromArray(insertx));
    storyText = storyText.replace(':inserty:', randomValueFromArray(inserty));
    storyText = storyText.replace(':insertz:', randomValueFromArray(insertz));
    story.textContent = storyText;
    story.style.visibility = 'visible';
}