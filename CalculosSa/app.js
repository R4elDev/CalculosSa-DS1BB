/*********************************************************************************
 * Objetivo --> Juntar todos os exercicios em um app só
 * Data --> 27/09/2024
 * Autor --> Israel
 * Versão --> 2.0
 *********************************************************************************/

//Parte para chamar as funções
const { stat } = require('fs')
var imc = require('./exercicio1/modulo/classificacaoDoImc.js')
var media = require('./exercicio2/modulo/media.js')
var tabuada = require('./exercicio3/modulo/tabuada.js')
var fatorial = require('./exercicio4/modulo/fatorial.js')
var lista = require('./exercicio5/modulo/listas.js')

// Chamando a biblioteca para poder interagir no terminal
var readline = require('readline')

var entradaDeDados = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

// Parte responsável pela criação do menu 
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=')
console.log('Bem vindo ao programa de soluções da CÁLCULOS SA')
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log('Escolha uma das opções abaixo: ')
console.log('-- Classificação do IMC [ 1 ]')
console.log('-- Gerenciador de médias [ 2 ]')
console.log('-- Criador de Tabuada [ 3 ]')
console.log('-- Fatorial [ 4 ]')
console.log('-- Gerador de pares e impares [ 5 ]')

// Primeira entrada de dados para entrar dentro das condicionais
entradaDeDados.question('--> ', function (resposta) {
   let contador = resposta

// Condicinais do menu
   if (contador == 1) {
      console.log('-=-=-=-=-=-=-=-=-=-==-=-')
      console.log('Classificação do IMC')
      console.log('-=-=-=-=-=-=-=-=-=-=-=-')

      entradaDeDados.question('Digite o seu peso -->', function (valor1) {
         let peso = valor1

         entradaDeDados.question('Digite a sual altura -->', function (valor2) {
            let altura = valor2

            let resultado = imc.valorDoImc(peso,altura)

            let classificacao = imc.categoria(resultado)

            console.log(classificacao)
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
            entradaDeDados.close()

         })
      })
   }else if(contador == 2){
      console.log('-=-=-=-=-=-=-=-=-=-==-=-=')
      console.log('Gerenciador de médias')
      console.log('-=-=-=-=-=-=-=-=-=-==-=-=')

      entradaDeDados.question('Digite o nome do aluno(a) --> ', function(nomeAluno){
         let nome = nomeAluno

         entradaDeDados.question('Qual o sexo do aluno? Masculino --> [ 1 ] - Feminino --> [ 2 ] : ', function(sexoAluno){
            let sexoA = sexoAluno

            entradaDeDados.question('Escreva o nome do curso --> ',function(cursoNome){
               let curso = cursoNome

               entradaDeDados.question('Escreva o nome da disciplina --> ', function(disciplinaNome){
                  let disciplina = disciplinaNome

                  entradaDeDados.question('Escreva o nome do professor --> ',function(professorNome){
                     let professor = professorNome

                     entradaDeDados.question('Qual o sexo do professor? Masculino --> [ 1 ] - Feminino --> [ 2 ] : ',function(sexoProfessor){
                        let sexoP = sexoProfessor

                        entradaDeDados.question('Primeira nota --> ', function(nota1){
                           let primeiraNota = nota1
                           
                           entradaDeDados.question('Segunda nota --> ', function(nota2){
                              let segundaNota = nota2
                        
                              entradaDeDados.question('Terceira nota --> ', function(nota3){
                                 let terceiraNota = nota3
                        
                                 entradaDeDados.question('Quarta nota --> ', function(nota4){
                                    let quartaNota = nota4
                                    let mediaCalculada = media.calcularMedia(primeiraNota,segundaNota,terceiraNota,quartaNota)
                                    let status = media.statusDoAluno(mediaCalculada)
                        
                                    if(status == 'EXAME'){
                                       entradaDeDados.question('Digite o valor da nota do exame --> ',function(nota5){
                                          let quintaNota = nota5
                        
                                          let exame = media.gestaoDoExame(quintaNota,mediaCalculada)
                     
                                          if(sexoA == 1){
                                             console.log('-=-=-=-=-=-=-=-=-=-=')
                                             console.log(`O aluno ${nome} foi ${status} na disciplina ${disciplina}`)
                                             console.log(`Curso: ${curso}`)
                                             console.log(`Professor: ${professor}`)
                                             console.log(`Notas do aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`)
                                             console.log(`Média Final: ${mediaCalculada}`)
                                             console.log(`Média final do Exame: ${exame}`)
                                          }else if(sexoA == 2){
                                             console.log('-=-=-=-=-=-=-=-=-=-=')
                                             console.log(`A aluna ${nome} foi ${status} na disciplina ${disciplina}`)
                                             console.log(`Curso: ${curso}`)
                                             console.log(`Professora: ${professor}`)
                                             console.log(`Notas do aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`)
                                             console.log(`Média Final: ${mediaCalculada}`)
                                             console.log(`Média final do Exame: ${exame}`)
                                          }
                                       })
                                    }else{
                                       if(sexoA == 1){
                                          console.log('-=-=-=-=-=-=-=-=-=-=')
                                          console.log(`O aluno ${nome} foi ${status} na disciplina ${disciplina}`)
                                          console.log(`Curso: ${curso}`)
                                          console.log(`Professor: ${professor}`)
                                          console.log(`Notas do aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`)
                                          console.log(`Média Final: ${mediaCalculada}`)
                                          console.log(`Média final do Exame: 0`)
                                       }else if(sexoA == 2){
                                          console.log('-=-=-=-=-=-=-=-=-=-=')
                                          console.log(`A aluna ${nome} foi ${status} na disciplina ${disciplina}`)
                                          console.log(`Curso: ${curso}`)
                                          console.log(`Professora: ${professor}`)
                                          console.log(`Notas do aluno: ${primeiraNota}, ${segundaNota}, ${terceiraNota}, ${quartaNota}`)
                                          console.log(`Média Final: ${mediaCalculada}`)
                                          console.log(`Média final do Exame: 0`)
                                       }
                                    }
                        
                        
                                 })
                              })
                           })
                        })
                     })
                  })

               })
            })
         })

      })
   }else if(contador == 3){
      console.log('-=-=-=-=-=-=-=-=-=-==-=-=')
      console.log('Criador de tabuadas')
      console.log('-=-=-=-=-=-=-=-=-=-==-=-=')
      entradaDeDados.question('Digite a tabuadaInicial --> ', function(tabuadaInicial){
         let primeiraTabuada = tabuadaInicial

         entradaDeDados.question('Digite a tabuadaFinal -->', function(tabuadaFinal){
            let ultimaTabuada = tabuadaFinal

            entradaDeDados.question('Digite o valor inicial --> ', function(contadorInicial){
               let inicioCont = contadorInicial

               entradaDeDados.question('Digite o valor final --> ', function(contadorFinal){
                  let finalCont = contadorFinal

                  tabuada.fazerTabuada(primeiraTabuada,ultimaTabuada,inicioCont,finalCont) 
               })
            })
         })
      })

   }else if(contador == 4){
      console.log('-=-=-=-=-=-=-=-=-=-==-=-=')
      console.log('Fatorial')
      console.log('-=-=-=-=-=-=-=-=-=-==-=-=')
      entradaDeDados.question('Digite o número do fatorial --> ', function(valorRecebido){
         let recebidoValor = valorRecebido

         fatorial.calculoDeFatorial(recebidoValor)
      })
   }else if(contador == 5){
      console.log('-=-=-=-=-=-=-=-=-=-==-=-=')
      console.log('Gerador de pares e impares')
      console.log('-=-=-=-=-=-=-=-=-=-==-=-=')
      console.log('Escolha uma das opções')
      console.log('-- SOMENTE CALCULAR OS PARES [ 1 ]')
      console.log('-- SOMENTE CALCULAR OS IMPARES [ 2 ]')
      console.log('-- CALCULAR AMBOS [ 3 ]')
      entradaDeDados.question('--> Escolha a opção desejada : ', function(opcao){
         let escolha = opcao
         
         if(escolha == 1){
            entradaDeDados.question('Digite o numero inicial de contagem --> ', function(valorInicial){
               let inicio = valorInicial

               entradaDeDados.question('Digite o numero final --> ',function(valorFinal){
                  let final = valorFinal

                  lista.geradorPares(inicio,final)
                  entradaDeDados.close()
               })
            })
         }else if(escolha == 2){
            entradaDeDados.question('Digite o numero inicial de contagem --> ', function(primeiroValor){
               let inicio = primeiroValor

               entradaDeDados.question('Digite o numero final --> ',function(segundoValor){
                  let final = segundoValor

                  lista.geradorimpares(inicio,final)
                  entradaDeDados.close()
               })
            })
         }else if(escolha == 3){
            entradaDeDados.question('Digite o numero inicial de contagem --> ', function(valor1){
               let inicio = valor1

               entradaDeDados.question('Digite o numero final --> ',function(valor2){
                  let final = valor2

                  lista.geradorDeListas(inicio,final)
                  entradaDeDados.close()
               })
            })
         }
      })
   }
})