/**
 * Created by h205p2 on 5/27/16.
 */


var mostImportant = "price";

price = 0;
distance = 0;
line = 0;
rating = 0;
name = "Dave";

function storeInput()
{
    //stores user parameters like line, money, and distance
    price = document.getElementById("userDollars").value;

    distance = document.getElementById("userBlocks").value;

    line = document.getElementById("userLine").value;



    //checks and stores user preference between time, money, and distance
    /*if (document.getElementById('pref1').checked) {
        mostImportant = document.getElementById('pref1').value;
    } else if (document.getElementById('pref2').checked) {
        mostImportant = document.getElementById('pref2').value;
    } else if (document.getElementById('pref3').checked) {
        mostImportant = document.getElementById('pref3').value;
    }*/

    console.log("price: " + price);
    console.log("distance: " + distance);
    console.log("rating: " + rating);
    console.log("line: " + line);
    console.log("mostImportant: " + mostImportant);

    //alert('minutes: ' + minutes + ', dollars: ' + dollars + ', blocks: ' + blocks);
    //alert(preference);
    document.location.href = "suggestion.html?price=" + price + "&distance=" + distance + "&line=" + line + "&rating=" + rating + "&name=" + name;

}