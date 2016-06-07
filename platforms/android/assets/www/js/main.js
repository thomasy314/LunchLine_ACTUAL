/**
 * Created by h205p2 on 5/27/16.
 */

var minutes;
var dollars;
var blocks;
var preference;

function storeInput()
{
    //stores user parameters like time, money, and distance
    minutes = (document.getElementById("userMinutes").value);
    if(minutes == "" || minutes < 0){
        minutes = 0;
    }
    dollars = document.getElementById("userDollars").value;
    if(dollars == "" || dollars < 0){
        dollars = 0;
    }
    blocks = document.getElementById("userBlocks").value;
    if(blocks == "" || dollars < 0){
        dollars = 0;
    }

    //checks and stores user preference between time, money, and distance
    if (document.getElementById('pref1').checked) {
        preference = document.getElementById('pref1').value;
    } else if (document.getElementById('pref2').checked) {
        preference = document.getElementById('pref2').value;
    } else if (document.getElementById('pref3').checked) {
        preference = document.getElementById('pref3').value;
    }

    //alert('minutes: ' + minutes + ', dollars: ' + dollars + ', blocks: ' + blocks);
    //alert(preference);
}