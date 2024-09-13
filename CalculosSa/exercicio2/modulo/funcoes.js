//Função feita apenas para validar as notas sem exame
function calcularMedia(nota1,nota2,nota3,nota4){
    let primeiraNota = nota1
    let segundaNota = nota2
    let terceiraNota = nota3
    let quartaNota = nota4
    let media

    //Fazendo a troca de , por .
    primeiraNotaStr = String(primeiraNota).replace(',','.')
    SegundaNotaStr = String(segundaNota).replace(',','.')
    TerceiraNotaStr = String(terceiraNota).replace(',','.')
    QuartaNotaStr = String(quartaNota).replace(',','.')

    //Alterando o tipo para evitar o erro nas proximas verificações
    primeiraNota = Number(primeiraNotaStr)
    segundaNota = Number(SegundaNotaStr)
    terceiraNota = Number(TerceiraNotaStr)
    quartaNota = Number(QuartaNotaStr)

    if(validarDados(primeiraNota,segundaNota,terceiraNota,quartaNota)){
        media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4
    }

    return media
}
//Função feita apenas para validar os dados das notas sem o exame
function validarDados(nota1,nota2,nota3,nota4){

    //Criação das variaveis ultilizadas na funcção
    let primeiraNota = nota1
    let segundaNota = nota2
    let terceiraNota = nota3
    let quartaNota = nota4
    let status = true

    //Fazendo a troca de , por .
    primeiraNotaStr = String(primeiraNota).replace(',','.')
    SegundaNotaStr = String(segundaNota).replace(',','.')
    TerceiraNotaStr = String(terceiraNota).replace(',','.')
    QuartaNotaStr = String(quartaNota).replace(',','.')

    //Alterando o tipo para evitar o erro nas proximas verificações
    primeiraNota = Number(primeiraNotaStr)
    segundaNota = Number(SegundaNotaStr)
    terceiraNota = Number(TerceiraNotaStr)
    quartaNota = Number(QuartaNotaStr)

    //Verificação de espaços vazios
    if( primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == ''){
        console.log('* ERRO * --> TODOS OS CAMPOS DEVEM SER PREENCHIDOS')
        status = false
    //Verificando se a nota é um numero
    }else if( isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota) ){
        console.log('* ERRO * --> NÃO É PERMITIDO STRINGS')
        status = false
    //Verificando se o número esta entre 0 e 100
    }else if(primeiraNota < 0 || primeiraNota > 100 || segundaNota < 0 || segundaNota > 100 || terceiraNota < 0 || terceiraNota > 100 || quartaNota < 0 || quartaNota > 100){
        console.log('* ERRO * AS NOTAS DEVEM ESTAR ENTRE 0 e 100 !')
        status = false
    }

    return status
}

function statusDoAluno(valorMedia){
    let media = valorMedia
    let status = ''

    //Parte para calcular a media do aluno
    if(media >= 70){
        status = 'APROVADO'
    }else if(media >= 50){
        status = 'REPROVADO'
    //Caso especifico caso entre em exame
    }else if(media < 50 && media <= 69){
        status = 'EXAME'
    }

    return status
}

//Função feita para validar a nota do exame
function gestaoDoExame(nota5,valorMedia){
    quintaNota = nota5
    media = valorMedia
    let status = ''
    let novaMedia

    //Fazendo a troca de , por .
    quintaNotaStr = String(quintaNota).replace(',','.')

    //Alterando o tipo para evitar o erro nas proximas verificações
    quintaNota = Number(quintaNotaStr)

    if(validarDadosExame(quintaNota)){
        novaMedia = (quintaNota + media) / 2

        if(novaMedia > 60){
            status = 'APROVADO NO EXAME'
        }else{
            status = 'REPROVADO NO EXAME'
        }
    }

    return status



}
//Função feita pra validar os dados do exame
function validarDadosExame(nota5){
    quintaNota = nota5
    let status = true

    //Fazendo a troca de , por .
    quintaNotaStr = String(quintaNota).replace(',','.')

    //Alterando o tipo para evitar o erro nas proximas verificações
    quintaNota = Number(quintaNotaStr)

    //Verificação de espaços vazios
    if( quintaNota == ''){
        console.log('* ERRO * --> O CAMPO DEVE SER PREENCHIDO')
        status = false
    //Verificando se a nota é um numero
    }else if( isNaN(quintaNota)){
        console.log('* ERRO * --> NÃO É PERMITIDO STRINGS')
        status = false
    //Verificando se o número esta entre 0 e 100
    }else if(quintaNota < 0 || quintaNota > 100 ){
        console.log('* ERRO * AS NOTAS DEVEM ESTAR ENTRE 0 e 100 !')
        status = false
    }

    return status

}


