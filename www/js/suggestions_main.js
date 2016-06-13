/**
 * Created by h205p2 on 6/2/16.
 */

//initializes array of restaurants
var restaurants = [];
user = {
    price : 0,
    distance : 0,
    line : 0,
    rating : 0,
    name : "Dave",
    mostImportant : "price"
};

//var user = {};

var index=0;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3yMZB8SYXUh04zkxElyC_-HaSHtTXGsc",
    authDomain: "lunchline.firebaseapp.com",
    databaseURL: "https://lunchline.firebaseio.com",
    storageBucket: "project-3518982349201918439.appspot.com"
};
firebase.initializeApp(config);


//populates drop down box with restaurants
firebase.database().ref('restaurants/').on('value', function(snapshot) {
    //console.log(snapshot.val());
    $.each(snapshot.val(), function(key, value) {
        //restaurants.push(value);
        //console.log(restaurants[0]);
        $('select[name=restaurants]').append($("<option></option>")
            .attr("value",key)
            .text(key));
    });
});

function loadValues(){
    firebase.database().ref('restaurants/').on('value', function(snapshot) {
        var num = 0;
        $.each(snapshot.val(), function(key, value) {
            restaurants.push(key);
            //console.log(restaurants[num]);
            num++;
        })
    });
}


//gets specific restaurant outputs data to page
function getRestaurantInfo() {
    loadValues();
    //console.log(restaurants);
    firebase.database().ref('restaurants/').on('value', function(snapshot) {
        /*var num = 0;
         $.each(snapshot.val(), function(key, value) {
         restaurants.push($('#displayRestaurants').val());
         console.log(restaurants[num]);
         num++;
         if(key == restaurants[0].name) {
         $('#output').empty();
         $('#output').append("<h1>" + key + "<h1>");
         $('#output').append("<br>" + "distance=" + value.distance + "<br>");
         $('#output').append("rating=" + value.rating + "<br>");
         $('#output').append("price=" + value.price + "<br>");
         $('#output').append("line=" + value.line);
         }
         });
         printNames()*/
        //console.log(getWant(restaurants[0], "price"));
        var takeRest = restaurants;
        //console.log(takeRest);
        var tempRestaurants = [];

        var leastPrice = restaurants[0];

        while(takeRest.length > 1) {
            var num = 0;
            for (var i = 0; i < takeRest.length; i++) {
                //console.log("least: " + leastPrice);
                //console.log(getWant(leastPrice, mostImportant));
                //console.log(restaurants[i].name + " " + getWant(restaurants[i], mostImportant));
                if (getWant(leastPrice, mostImportant) > getWant(restaurants[i], mostImportant)) {
                    //console.log("<------Change------------------------------------------------->");
                    leastPrice = restaurants[i];
                    num = i;
                }
            }
            //console.log(num);
            //console.log(takeRest.indexOf(leastPrice));
            if ((getWant(user, mostImportant) - 5) < getWant(leastPrice, mostImportant)) {
                tempRestaurants.push(leastPrice);
            }
            //console.log(leastPrice + " || " + getWant(leastPrice, mostImportant));
            takeRest.splice(num, 1);
            //console.log(takeRest);
            leastPrice = restaurants[0]
            //console.log("Least: " + leastPrice.name);
        }


        restaurants = tempRestaurants;
        //return tempRestaurants;
       // console.log(restaurants);


        $(function(){
            $("#name").text(getValue(restaurants[index]).name);
            $("#price").text("Price: " + getValue(restaurants[index]).price);
            $("#distance").text("Blocks: " + getValue(restaurants[index]).distance);
            $("#rating").text("Rating: " + getValue(restaurants[index]).rating);
            $("#line").text("Line length: " + getValue(restaurants[index]).line);
        });

        index++;

    });
}


function changeRestaurant(){
    $(function(){
        //if(restaurants[index] ==)
        $("#name").text(getValue(restaurants[index]).name);
        $("#price").text("Price: " + getValue(restaurants[index]).price);
        $("#distance").text("Blocks: " + getValue(restaurants[index]).distance);
        $("#rating").text("Rating: " + getValue(restaurants[index]).rating);
        $("#line").text("Line length: " + getValue(restaurants[index]).line);
    });

    index++;
}

function getValue(restaurant){
    var rest = null;
    firebase.database().ref('restaurants/').on('value', function(snapshot) {
        $.each(snapshot.val(), function (key, value) {
            restaurants.push($('#displayRestaurants').val());
            if (key == restaurant) {
                rest = value;
                console.log(rest);
            }

        });
    });
    return rest;
}

function getWant(restaurantIn, mostImportant){
    var restaurant;
    var want = -1;
    //console.log(restaurantIn);
    firebase.database().ref('restaurants/').on('value', function(snapshot) {
        if(restaurantIn != user) {
            $.each(snapshot.val(), function (key, value) {
                if (key == restaurantIn) {
                    restaurant = value;
                }
            });
        }else{
            restaurant = user;
        }

        if (mostImportant == "price") {
            want = Math.pow(parseFloat(restaurant.price), 2) + parseFloat(restaurant.distance) + parseFloat(5 - restaurant.rating) + parseFloat(restaurant.line);
        } else if (mostImportant == "distance") {
            want = Math.pow(parseFloat(restaurant.distance), 2) + parseFloat(restaurant.price) + parseFloat(5 - restaurant.rating) + parseFloat(restaurant.line);
        } else if (mostImportant == "rating") {
            want = Math.pow(parseFloat(restaurant.rating), 2) + parseFloat(restaurant.distance) + parseFloat(5 - restaurant.price) + parseFloat(restaurant.line);
        } else if (mostImportant = "line") {
            want = Math.pow(parseFloat(restaurant.line), 2) + parseFloat(restaurant.distance) + parseFloat(5 - restaurant.rating) + parseFloat(restaurant.price);
        }
        //want = Math.round(parseFloat(want));
        //console.log(want + " || " + restaurant.name);

    });


    return want;
}

//get user info
function getUserInfo(){
    user.price = getParameterByName('price');
    user.distance = getParameterByName('distance');
    user.line = getParameterByName('line');
    user.rating = getParameterByName('rating');
    user.name = getParameterByName('name');
    //user.mostImportant = getParameterByName("mostImportant");
    console.log("price" + user.price);
    console.log("distance" + user.distance);
    console.log("line" + user.line);
    console.log("rating" + user.rating);
    console.log("name" + user.name);
}

//print rest names
function printNames(){
    var thing = [];
    for(var i = 0; i < restaurants.length; i++){
        //console.log(restaurants[i].name);
        thing.push(restaurants[i].name);
        //console.log(thing);
    }
    console.log(thing);
}



//$('#updateRestaurants')  is the same as document.getElementById("updateRestaurants")
function updateRestaurant() {
    var newDistance = $('#newDistance').val();
    var newRating = $('#newRating').val();
    var newPrice = $('#newPrice').val();
    var newLine = $('#newLine').val();

    if(newDistance.length > 0) {
        firebase.database().ref('restaurants/' + $('#updateRestaurants').val()).update({
            distance: newDistance
        });
    }

    if(newRating.length > 0) {
        firebase.database().ref('restaurants/' + $('#updateRestaurants').val()).update({
            rating: newRating
        });
    }

    if(newPrice.length > 0) {
        firebase.database().ref('restaurants/' + $('#updateRestaurants').val()).update({
            price: newPrice
        });
    }

    if(newLine.length > 0) {
        firebase.database().ref('restaurants/' + $('#updateRestaurants').val()).update({
            line: newLine
        });
    }


}

function addRestaurant() {
    var name = document.getElementById("name").value;  // in jQuery $('#name').val()
    var distance = document.getElementById("distance").value;
    var rating = document.getElementById("rating").value;
    var price = document.getElementById("price").value;
    var line = document.getElementById("line").value;


    //create new restaurant
    firebase.database().ref('restaurants/' + name).set({
        distance: distance,
        rating: rating,
        price: price,
        line: line
    });

}

window.onload = function(){
    getUserInfo();
    getRestaurantInfo();
};

function test(){
    console.log("Hello");
}


$("#bigYellowButton").on("click", getRestaurantInfo);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}