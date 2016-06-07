/**
 * Created by h205p2 on 6/3/16.
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

var restoDescription = [
    'This joint is a Berkeley High favorite. Here, you can get a good burger at a fair price. The fries are not much to write home about. Be advised that service might take a while.',
    'Though quite a ways from school, the food this restaurant serves is delicious. Recommended for students with time in their hands.',
    'Saigon Express serves some great Vietnamese food for near-bottom dollar. If you\'re in a hurry, grab a tasty $5 sandwich.',
    'One of the most popular stops for students, this restaurant is ideal if you have enough money but don\'t feel like going too far from school. Service might be a bit slow.'
];

var address = [
    '2154 Center St',
    '2366 Telegraph Ave',
    '2045 Shattuck Ave',
    '2272 Shattuck Ave'
]

var coordinates = [
    '37.8702719,-122.2666115',
    ''
]

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

    var suggestionDescription = document.getElementById("description");
    var description = document.createTextNode(restoDescription[index]);
    suggestionDescription.appendChild(description);

}

function init_map(){
    var myOptions = {
        zoom:15,center:new google.maps.LatLng(37.8680072,-122.2684179), mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,position: new google.maps.LatLng(37.8680072,-122.2684179)
    });
    infowindow = new google.maps.InfoWindow({
        content:'<strong>Toss</strong><br>2272 Shattuck Ave<br>'
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
}google.maps.event.addDomListener(window, 'load', init_map);

window.onload = function(){
    newSuggestion();
};