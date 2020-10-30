/* ESTUDO SOBRE //CALLBACKS// */


//---------------------------------------------------------------------**
/*FUNÇÕES CALLBACK */
/*Callback é uma função que é usada como "callback". Ela é tipicamente passada como
argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma 
parte de código receber uma resposta de que estava à espera.*/

const school = ['Nivo das Neves','Mather Izabel','Supletivo'] //array 

function schoolDistrict (name, indice ){  /*função nomeada schollDistrict com os
                                          os parâmetros do array, [name,indice]
                                          */
    console.log(`${indice}, ${name}`)
}
    school.forEach(schoolDistrict)       /* O método forEach() permite executar uma função 
                                         para cada item de um array. Veja sobre forEach
                                         na paste Estudos Function */


//CRIANDO UMA EXECUÇÃO NO ARRAY SEM CALLBACK

//SEM CALLBACK
const notas = [7.7, 8.5, 4.6, 6.1, 5.8, 5.5, 8,1, 4.9] //array com notas diferentes

const notasAprovadas = []          //array vazío para armazenar elementos dentro
for (let i in notas)               //usando um for in para percorrer o array notas
if (notas[i] >= 6) {               //usando um if para usar a condição do valor que é aprovado 
    notasAprovadas.push(notas[i])  //usando o push para armazenar os valores aprovados no array
}
console.log(notasAprovadas)        //valor retornado 7.7, 8.5, 6.1, 8.1

//USANDO O MESMO EXEMPLO ACIMA UTILIZANDO O FOR
const notas = [7.7, 8.5, 4.6, 6.1, 5.8, 5.5, 8.1, 4.9]

const notasAprovadas = []
for (let i = 0; i <= notas.length; i++){
    if (notas[i] >= 6) {
    notasAprovadas.push(notas[i])
}}

console.log(notasAprovadas)


//CRIANDO UMA EXECUÇÃO NO ARRAY COM CALLBACK
const notas = [7.7, 8.5, 4.6, 6.1, 5.8, 5.5, 8.1, 4.9]

const notasAprovadas = []
notasAprovadas = notas.filter()   /* O método filter() cria um novo array com todos os elementos 
                                  que passaram no teste implementado pela função fornecida. Ele irá 
                                  filtrar elementos do array através de um critério 'true' e 'false'.*/ 


const listaApro = [{name:'Lucas', Note: 9.6},
                   {name:'Larissa', Note: 7.2},
                   {name:'Cleyri', Note: 5.6},
                   {name:'Annabelle', Note: 5.1}]


function aprovados (name,indice){
 console.log(indice, name)
 
}
listaApro.forEach(aprovados);


//FAZENDO UM FOREACH USANDO ARROW FUNCTION
const listaApro1 = [{name:'Lucas', Note: 9.6},
                   {name:'Larissa', Note: 7.2},
                   {name:'Cleyri', Note: 5.6},
                   {name:'Annabelle', Note: 5.1}]


listaApro1.forEach((aprovados, indice)=> {  /* Usando um forEach numa função arrow function
                                            não precisa declarar um nome, poís o forEach
                                            precisa de um parâmetro aleatório, então deixa
                                            um que condiz com o código a ser execultado */
console.log(indice, aprovados)
});


//Armazenando no ARRAY list os elementos aprovados do listApro2 usando o forEach
const listaApro2 = [{name:'Lucas', Note: 9.6},
                   {name:'Larissa', Note: 7.2},
                   {name:'Cleyri', Note: 5.6},
                   {name:'Annabelle', Note: 5.1}]

const list = []
listaApro2.forEach((aprovados, indice)=> {
  if (aprovados.Note >= 7){
      list.push(aprovados)
  }
});
console.log(list[0].Note)  //irá trazer o resultado 