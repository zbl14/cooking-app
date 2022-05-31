function cToF(celsius) {
  return celsius * 9 / 5 + 32;
}

function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

const celsius = parseInt(prompt("What is the temperature in celsius?"))
const fahrenheit = parseInt(prompt("What is the temperature in fahrenheit?"));

alert(cToF(celsius));
alert(fToC(fahrenheit));