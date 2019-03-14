function displayName(username){
    console.log(`Hello, ${username}!`);
}

displayName("Jason Tilghman");

//[°C] = ([°F] − 32) × ​5⁄9	   [°F] = [°C] × ​9⁄5 + 32
function celsiusToFahrenheit(tempInCelsius){
    const tempInFahrenheit = tempInCelsius * (9/5) + 32;
    console.log(`${tempInCelsius} degrees Celsius = ${tempInFahrenheit} degrees Fahrenheit`);
}
function fahrenheitToCelsisus(tempInFahrenheit){
    const tempInCelsius = (tempInFahrenheit - 32) * 5/9;
    console.log(`${tempInFahrenheit} degrees Fahrenheit = ${tempInCelsius} degrees Celsius`);

}

celsiusToFahrenheit(60);
fahrenheitToCelsisus(212);
