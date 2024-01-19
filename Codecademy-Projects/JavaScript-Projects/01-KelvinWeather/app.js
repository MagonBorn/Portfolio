// Current temperature in kelvin
const kelvin = 293;

// Temperature in celsius derived from kelvin
const celsius = kelvin - 273;

// Temperature in farenheit derived from celsius and formula
let farenheit = celsius * (9/5) + 32;

// Temperature of farenheit rounded down to nearest whole number
farenheit = Math.floor(farenheit);

// Temperature in newtons dervied from celsius rounded down to the nearest whole number
let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${farenheit} degrees farenheit`);
console.log(`The temperature is ${newton} degrees newton`);