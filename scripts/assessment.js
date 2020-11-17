// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS

var storyText =  'It was :temperature: outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs :weight:, and it was a hot day.'
var insertx = ['Willie The Goblin','Big Daddy','Father Christmas']
var inserty = ['the soup kitchen','Disneyland','the White House']
var insertz = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']




// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    document.querySelector('html').style.backgroundColor = randomValueFromArray(['red','yellow','green']);
     if(customName.value !== '') {
         let name = customName.value;
         newStory = newStory.replace('Bob', name);
     }
     let weight = '300 pounds';
     let temperature = '94 fahrenheit';
     if(document.getElementById("uk").checked) {
         weight = Math.round(300 / 14) + ' stone';
         temperature = Math.round((94 - 32) / 1.8) + ' centigrade';
     }
    newStory = newStory.replace(':insertx:', randomValueFromArray(insertx));
    newStory = newStory.replace(':inserty:', randomValueFromArray(inserty));
    newStory = newStory.replace(':insertz:', randomValueFromArray(insertz));
     newStory = newStory.replace(':temperature:', temperature);
     newStory = newStory.replace(':weight:', weight);

     story.textContent = newStory;
     story.style.visibility = 'visible';
}