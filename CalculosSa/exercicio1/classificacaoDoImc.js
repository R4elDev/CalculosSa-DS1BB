function Imc(valor1,valor2){
    let peso = valor1
    let altura = valor2
    let imc
    let status = false

    pesoStr = String(peso).replace(',','.')
    alturaStr = String(altura).replace(',','.')

    peso = Number(pesoStr)
    altura = Number(alturaStr)

    //Fazendo a conta do imc
    if(validarDados(peso,altura)){

        imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2)
    }

    if(imc <= 18.5){
        console.log(`IMC --> ${imc} | Classificação --> ABAIXO DO PESO`)
        status = true
    }else if(imc >= 18.5 || imc <= 24.9){
        console.log(`IMC --> ${imc} | Classificação --> PESO NORMAL`)
        status = true
    }else if(imc >= 25 || imc <= 29.9 ){
        console.log(`IMC --> ${imc} | Classificação --> ACIMA DO PESO( SOBREPRESO )`)
        status = true
    }else if(imc >= 30 || imc <= 34.9){
        console.log(`IMC --> ${imc} | Classificação --> OBESIDADE I`)
        status = true
    }else if(imc >= 35 || imc <= 39){
        console.log(`IMC --> ${imc} | Classificação --> OBESIDADE II`)
        status = true
    }else if(imc >= 40){
        console.log(`IMC --> ${imc} | Classificação --> OBESIDADE III`)
        status = true
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

