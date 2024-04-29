// Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

// Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

function sumarArreglo(array, posicion1, posicion2){
    let suma = 0
    array.slice(posicion1, posicion2)
    for (i=posicion1; i<array.length; i++){
            suma += array[i]
            if(array[i]==posicion2){
                break
            }   
        }
    return suma
    }

console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0