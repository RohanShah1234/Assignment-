var x= setInterval(function(){
var dest = new Date("Aug 15, 2023, 10:00:00").getTime();
var now = new Date().getTime();
var diff = dest - now;
var days = Math.floor(diff/(1000*60*60*24));

var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
var sec = Math.floor((diff%(1000*60))/(1000));
document.getElementById("demo").innerHTML= days +"d "+ hours +"h "+ minutes+"m "+ sec+"s ";
},1000)