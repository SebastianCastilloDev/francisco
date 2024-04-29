// Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

function removerCeros (numeros){
    for (i=0; i < numeros.length; i++){
        if (numeros[i]==0){
            let arraysincero = numeros.filter(numeros => numeros != 0)
            return arraysincero
        }else{
            return numeros
        }
    }
}
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []