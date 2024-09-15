function fazerTabuada(primeiraTabuada,ultimaTabuada,contadorInicial,contadorFinal){
    let tabuadaInicial = Number(primeiraTabuada)
    let tabuadaFinal = Number(ultimaTabuada)
    let inicio = Number(contadorInicial)
    let final = Number(contadorFinal)
    let status = false
    let resultado 

    if(validarDados(tabuadaInicial,tabuadaFinal,inicio,final)){
        while(tabuadaInicial <= tabuadaFinal){

            console.log(`TABUADA DO --> ${tabuadaInicial}`)
    
            while(inicio <= final){
                status = true
                resultado = Number(tabuadaInicial) * Number(inicio)
                console.log(`${tabuadaInicial} * ${inicio} = ${resultado}`)
                inicio += 1
            }
    
            inicio = contadorInicial
            console.log('-==-=-=-=-=-=-=-=-=-=-=-=-=')
            tabuadaInicial += 1
        }

    }
    return status
}


function validarDados(primeiraTabuada,ultimaTabuada,contadorInicial,contadorFinal){
    //Criação das variaveis ultilizadas na funcção
    let tabuadaInicial = primeiraTabuada
    let tabuadaFinal = ultimaTabuada
    let inicio = contadorInicial
    let final = contadorFinal
    let status = true

    //Verificação de espaços vazios
    if( tabuadaInicial == '' || tabuadaFinal == '' || inicio == '' || final == ''){
        console.log('* ERRO * --> TODOS OS CAMPOS DEVEM SER PREENCHIDOS')
        status = false
    //Verificando se a nota é um numero
    }else if( isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(inicio) || isNaN(final) ){
        console.log('* ERRO * --> NÃO É PERMITIDO STRINGS')
        status = false
    //Verificando se o número esta entre 0 e 100
    }else if(tabuadaInicial >= 2 && tabuadaInicial >= 100 || tabuadaFinal >= 2 && tabuadaFinal >= 100 ){
        console.log('* ERRO * AS TABUADAS DEVEM ESTAR ENTRE 2 e 100 !')
        status = false
    }else if(tabuadaFinal < tabuadaInicial){
        console.log('* ERRO * AS PRIMEIRA TABUADA TEM QUE SER MENOR QUE A SEGUNDA !')
    }else if(inicio < 1 || inicio >= 50 && final < 1 || final >= 50 ){
        console.log('*ERRO * A TABUADA SÓ PODE SER CALCULADA ENTRE 1 e 50')
    }

    return status
}
