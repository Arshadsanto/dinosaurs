
// taking data from json file

var dinos = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": 372,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
];
// Dino calss creating for Dino object
class Dino{
constructor(species,weight,height,diet,where,when,fact,image) {
    this.specis = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
}
}
// Create Human class
class Human{
    constructor(species,weight,height,diet,where,when,fact,image) {
    this.specis = Human.species;//i have to edit---------------Arshad
    this.weight = Human.weight;
    this.image = `images/${species}.png`;
    this.height = Human.height;
    this.diet = Human.diet;
    this.where = Human.where;
    this.when = Human.when;
    this.fact = Human.fact;
    this.image =Human.image;
    }
}
// Getting Human Data DOM
const humanInputData = document.querySelector('#dino-compare');
var human = { "species" : "Human","fact":"You are Human"};
function humanData() {
    human.name = humanInputData.name.value;
    human.height = parseInt(prompt(humanInputData.feet.value)) * 12 + parseInt(prompt(humanInputData.inches.value));
    human.weight = parseInt(prompt(humanInputData.weight.nodeValue));
    human.diet = humanInputData.diet.value.toLowerCase();
    removeForm = humanInputData.style.display ="none";

    //  adding human to Grid
   function addItem(){
    dinos.splice(4, 0, human);
}
    addItem();
}

const button = document.querySelector("#btn");
button.addEventListener("click", humanData, false);
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function comparison1(){
        dinos.filter(function height(arr){
        for (let i = 0; i<dinos.length; i++){
         let arr = dinos[i];
            if(arr.height === human.height) {
            arr.result = `This Dino and you are of the same height. You are both " ${(arr.height)} inches tall.`;
            }
        else if (arr.height > human.height) {
            arr.result = `Dino is   ${(arr.height - human.height)}   inches taller than you.`;
            }
            else {
                arr.result = `You are not taller than this dino! This dino is  ${(arr.height)} inches tall.`;
            }

        }
    })
}
comparison1(); 

// Create Dino Compare Method 2

function comparison2(){
    dinos.filter(function weight(arr){
        for (let i = 0; i<dinos.length; i++){
            let arr = dinos[i];
            if(arr.weight === human.weight) {
            arr.result =  `This Dino and you are of the same weight. You are both  ${(arr.weight)} lbs in weight.`;
            }
        else if (arr.weight > human.weight) {
            arr.result = `Dino is  ${(arr.weight - human.weight)} lbs heavier than you.`;
            }
            else {
                arr.result = `You are heavier than this dino! This dino is only  ${(arr.weight)}   lbs heavy.`;
            }
            return arr.weight;
        }
    
    })
}
comparison2(); 

// Create Dino Compare Method 3
function comparison3(){
    dinos.filter(function diet(arr){
        for (let i = 0; i<dinos.length; i++){
           let arr = dinos[i];
            if(arr.diet === human.diet) {
            arr.result =  `You & This Dino take the same diet. You are both ${(arr.diet)}.`;
            }
        else if (arr.diet > human.diet) {
            arr.result = "You eat less than this Dino. This dino is a " + arr.diet + " and you are a " + human.diet + ".";
            }
            else {
                arr.result = `You eat more than this dino! This dino is ${(arr.diet)}inches tall.`;
            }
            return arr.diet;
        }
    })
}
comparison3(); 

// random method for comparison 
function randomMethod(){
const arrCompare = [comparison1(),comparison2(),comparison3()];
const random = arrCompare[(Math.random() * arrCompare.length)];
console.log(random);
}
button.addEventListener("click", randomMethod, false);

// Generate Tiles for each Dino in Array
function createGrid(){
dinos.filter(function(dino) {
const div = document.createElement('div');
div.className = 'grid-item';
const heading = document.createElement('h3');
heading.innerHTML = dino.species;
const image = document.createElement('img');
image.src= "images\/" + dino.species + ".png";
const text = document.createElement('p');
text.innerHTML = dino.result;

    // Add tiles to DOM
const grid = document.getElementById("grid");
grid.appendChild(div);
div.appendChild(heading);
div.appendChild(image);
div.appendChild(text);

})
function humanName(){
    var name = grid.children[4].firstChild;
    if( name.innerHTML = human.name){
     return true;
    }
}
humanName();

}
button.addEventListener("click", createGrid, false);