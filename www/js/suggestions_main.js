/**
 * Created by h205p2 on 6/2/16.
 */

var names = [
    "Bongo Burger",
    "Naan n\' Curry",
    "Saigon Express",
    "Toss Noodle Bar"
];

var images = [
    "bongo",
    "naancurry",
    "saigon",
    "toss"
];

var typeOfFood = [
    'burgers',
    'indian',
    'vietnamese',
    'noodles'
];

function newSuggestion(){

    var index = Math.floor(Math.random() * names.length);

    var suggestionImage = document.getElementById("suggestionImage");
    suggestionImage.setAttribute("src", "img/" + images[index] + ".jpg");

    var suggestionName = document.getElementById("restoName");
    var name = document.createTextNode(names[index]);
    suggestionName.appendChild(name);

    var suggestionType = document.getElementById("foodType");
    var type = document.createTextNode(typeOfFood[index]);
    suggestionType.appendChild(type);

}

window.onload = function(){
    newSuggestion();
};