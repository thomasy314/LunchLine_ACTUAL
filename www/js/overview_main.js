var restaurant = restaurants[index];

function newSuggestion(){

    /*var suggestionImage = document.getElementById("suggestionImage");
    suggestionImage.setAttribute("src", "img/" + images[index] + ".jpg");*/

    $("#name").text(getValue(restaurants[index]).name);
    $("#price").text("Price: " + getValue(restaurants[index]).price);
    $("#distance").text("Blocks: " + getValue(restaurants[index]).distance);
    $("#rating").text("Rating: " + getValue(restaurants[index]).rating);
    $("#line").text("Line length: " + getValue(restaurants[index]).line);

}

/*function init_map(){

    var x = xCoordinates[index];
    var y = yCoordinates[index];

    var myOptions = {
        zoom:15,center:new google.maps.LatLng(x,y), mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,position: new google.maps.LatLng(x,y)
    });
    infowindow = new google.maps.InfoWindow({
        content:'<strong>names[index]</strong><br>address[index]<br>'
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
}google.maps.event.addDomListener(window, 'load', init_map);*/

window.onload= function(){
    newSuggestion();
};