// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

function sumarRango(num1, num2){
    let suma = 0
    if (num1==num2){
        return 0
    }else{
    while(num1 <= num2) {
            suma += num1
            num1++
        }
    }
    return suma
}
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0