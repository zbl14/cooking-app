//Business Logic
function cToF(celsius) {
  return celsius * 9 / 5 + 32;
}

function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function cupToMil(cups) {
  return cups * 236.588236;
}
function milToCup(milliliter) {
  return milliliter / 236.588236;
}
//User Interface Logic
$(document).ready(function() {
  $("form#cupsToMil").submit(function(event) {
  const cups = parseInt($("#cups").val());
  const milliliter = parseInt($("#milliter").val());
  const result = cupToMil(cups);
  //const milliliters = parseFloat($("#milliliter"));
  $("#outputCup").text(result);
  //$("#outputMil").text(milliliters);S
  // const celsius = parseInt(prompt("What is the temperature in celsius?"))
//const fahrenheit = parseInt(prompt("What is the temperature in fahrenheit?"));
  //alert(cToF(celsius));
  //alert(fToC(fahrenheit));
  });
});

