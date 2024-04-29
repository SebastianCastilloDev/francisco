// Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

function contarRango(numero1, numero2){
    contador=numero1
    while (contador < numero2){
        contador++
    }
    return contador-numero1-1
}
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
