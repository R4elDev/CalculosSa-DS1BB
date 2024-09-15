// Função para realizar a criação das tabuadas
function fazerTabuada(primeiraTabuada,ultimaTabuada,contadorInicial,contadorFinal){
    // Parte reservada para a criação de variáveis
    let tabuadaInicial = Number(primeiraTabuada)
    let tabuadaFinal = Number(ultimaTabuada)
    let inicio = Number(contadorInicial)
    let final = Number(contadorFinal)
    let status = false
    let resultado 

    // Condicional que chama a função validar dados
    if(validarDados(tabuadaInicial,tabuadaFinal,inicio,final)){

        // Repetição que contém o limite da tabuada
        while(tabuadaInicial <= tabuadaFinal){

            console.log(`TABUADA DO --> ${tabuadaInicial}`)
            
            // Repetição que cria as tabuadas
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

// Função feita para validar a entrada de dados
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
    //Verificando se o valor da tabuana final é menor que o da tabuada inicial
    }else if(tabuadaFinal < tabuadaInicial){
        console.log('* ERRO * AS PRIMEIRA TABUADA TEM QUE SER MENOR QUE A SEGUNDA !')
    }else if(inicio < 1 || inicio >= 50 && final < 1 || final >= 50 ){
        console.log('*ERRO * A TABUADA SÓ PODE SER CALCULADA ENTRE 1 e 50')
    }

    return status
}
