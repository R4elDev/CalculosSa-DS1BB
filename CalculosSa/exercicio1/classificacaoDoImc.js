function Imc(valor1,valor2){
    let peso = valor1
    let altura = valor2
    let imc
    let status = false

    pesoStr = String(peso).replace(',','.')
    alturaStr = String(altura).replace(',','.')

    peso = Number(pesoStr)
    altura = Number(alturaStr)

    
    if(validarDados(peso,altura)){

        //Fazendo a conta do imc
        imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2)
    }

    return status
}

function validarDados(valor1,valor2){
    let peso = valor1
    let altura = valor2
    let status = true

    pesoStr = String(peso).replace(',','.')
    alturaStr = String(altura).replace(',','.')

    peso = Number(pesoStr)
    altura = Number(alturaStr)

    if(peso == '' || altura == ''){
        console.log('* ERRO * --> TODOS OS CAMPOS DEVEM SER PREENCHIDOS')
        status = false
    }else if( isNaN(peso) || isNaN(altura) ){
        console.log('* ERRO * --> NÃO É PERMITIDO STRINGS')
        status = false
    }


    return status
}

function classificacaoIMC(valorImc){
    let imc = valorImc
    let classificacao = ''

    if(imc <= 18.5){
        classificacao = `IMC --> ${imc} | Classificação --> ABAIXO DO PESO`
    }else if(imc >= 18.5 && imc <= 24.9){
        classificacao = `IMC --> ${imc} | Classificação --> PESO NORMAL`
    }else if(imc >= 25 && imc <= 29.9 ){
        classificacao = `IMC --> ${imc} | Classificação --> ACIMA DO PESO ( SOBREPRESO )`
    }else if(imc >= 30 && imc <= 34.9){
        classificacao = `IMC --> ${imc} | Classificação --> OBESIDADE I`
    }else if(imc >= 35 && imc <= 39){
        classificacao = `IMC --> ${imc} | Classificação --> OBESIDADE II`
    }else if(imc >= 40){
        classificacao = `IMC --> ${imc} | Classificação --> OBESIDADE III`
    }

    return classificacao
}

