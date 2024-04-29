// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

function numeroDeCaracteres(texto, letra){
    texto.toLowerCase()
    let contador = 0
    for (i=0; i<texto.length; i++){
        if (texto[i]==letra){
            contador++
        }
    }
    return contador
}
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4