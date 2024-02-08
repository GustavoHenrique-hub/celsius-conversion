function fahrenheit(){
    var celsius = document.getElementById("celsius")
    var tempCelsius = Number(celsius.value)
    var tempfahrenheit = 1.8 * tempCelsius + 32;
    var resultado = `${tempfahrenheit} ºF e ${tempCelsius + 273} K `
    document.getElementById('resultado').innerText = resultado
}