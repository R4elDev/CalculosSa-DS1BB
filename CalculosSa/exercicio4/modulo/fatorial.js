function calculoDeFatorial(valorRecebido){
    let fatorial = valorRecebido
    let contador = fatorial
    let resultado = String(fatorial)
    let numeroInicial = 1
    while(contador >= 2){
        numeroInicial *= contador
        contador -= 1
        resultado = resultado + ' x ' + contador 

    }

    return resultado + ' = ' + numeroInicial
}

console.log(calculoDeFatorial(5))