// Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

function multiplicarArreglo (numeros){
    let multiplicación = 1
    for (i=0; i < numeros.length ; i++){
        multiplicación*=numeros[i]
    }
    return multiplicación
}
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1