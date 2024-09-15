function geradorDeListas(numeroInicial,numeroFinal){
    let inicio = numeroInicial
    let final = numeroFinal
    let contadorPar = 0
    let contadorImpar = 0
    

    console.log('Lista de números PARES')
    for (let contador = inicio; contador <= final; contador += 1 ){
        if(contador % 2 === 0){
            console.log(contador)
            contadorPar += 1
        }
    }

    console.log(`Quantidade de números pares encontrados --> ${contadorPar}`)

    console.log('Lista de números IMPARES')
    for (let contador = inicio ; contador <= final; contador += 1){
        if(contador % 2 !== 0){
            console.log(contador)
            contadorImpar += 1
        }
    }

    console.log(`Quantidade de números pares encontrados --> ${contadorImpar}`)

}

gerenciador(2,10)

function validarDados(numeroInicial,numeroFinal)