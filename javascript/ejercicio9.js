
function numeroDeAes(texto){
    let contador = 0
    for ( i = 0; i<texto.length; i++){
        if (texto[i]=="a"){
            contador++
        }
    }
    return contador 
}
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0