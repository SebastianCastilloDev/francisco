// Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
const texto = "eoZiugBf&g9"

function contrasenaValida (texto){
    return texto == "2Fj(jjbFsuj" || texto == "eoZiugBf&g9"
}
console.log(contrasenaValida(texto))