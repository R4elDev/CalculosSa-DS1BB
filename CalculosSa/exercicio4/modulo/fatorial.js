function calculoDeFatorial(valorRecebido){
    let fatorial = valorRecebido
    let contador = fatorial
    let resultado = String(fatorial)
    let numeroInicial = 1

    if(validarDados(fatorial)){

        while(contador >= 2){
            numeroInicial *= contador
            contador -= 1
            resultado = resultado + ' x ' + contador 
    
        }
    }

    return resultado + ' = ' + numeroInicial
}


function validarDados(valorRecebido){
    //Criação das variaveis ultilizadas na funcção
    let fatorial = valorRecebido
    let status = true

    //Verificação de espaços vazios
    if( fatorial === '' ){
        console.log('* ERRO * --> TODOS OS CAMPOS DEVEM SER PREENCHIDOS')
        status = false
    //Verificando se a nota é um numero
    }else if( isNaN(fatorial)){
        console.log('* ERRO * --> NÃO É PERMITIDO STRINGS')
        status = false
    //Verificando se o número esta entre 0 e 100
    }else if(fatorial === 0){
        console.log('* ERRO * NÃO EXISTE O FATORIAL DE 0')
        status = false
    }else if(fatorial == 1){
        console.log('NÃO É POSSÍVEL CALCULAR O FATORIAL DE 1 - DIGITE UM VALOR MAIOR QUE 1! ')
    }
    return status
}

