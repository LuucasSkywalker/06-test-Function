// função bind e this Objeto
/*O bind é responsavel por amarrar o metodo sempre que for chamado
ou referenciar como exemplo abaixo "person"*/

const person = {
    hello: 'good morning',
    speak(){
        return this.hello  //referênciando THIS a person
    }
};
console.log(person.speak());    //retorna "good morning"

//ou usar assim
const person1 = {
    hello: 'good morning',
    speak(){
      return console.log(this.hello);
    }
};
person1.speak();         //também retorna "good morning"


//problema em armazenar o objeto person dentro de uma variável
const speak = person1.speak
speak();  // retorna undefined, pois a const "speak" não referência o this de objeto
//O bind é responsavel por amarrar o metodo sempre que for chamado
//usar assim então para ter acesso ao objeto armazenado na variável
const speak2 = person1.speak.bind(person1)
speak2();  //retorna "good morning"


/************************************************** */
/*usando function normal pode variar pois o quem ta invocando
o THIS é o temporazidor do SETINVERVAL,exemplo abaixo */
function person3 (){
    this.age = 0
    setInterval(function(){   //usando função normal
        this.age++
        console.log(this.age)   //returna NAN pois quem invoca o this 
                                //é o temporizador do setInterval não o 
                                //person3
    },1000)
};
new person3

/*UMA OBESERVAÇÃO: se usar o "bind()" poderá amarrar o this.person3 e
funcionará, pois o bind é usado para refenciar o person3*/
function person4 (){
      this.age = 0
      setInterval(function(){
      this.age++
      console.log(this.age)
      }.bind(this),1000)  //utilizando o "bind(this)" para referenciar o person4
};
new person4


//o this não varia quem ta chamando usando ARROW function . Exemplo Abaixo
function person5 (){
    
    this.age = 0
    setInterval(()=>{   //usando ARROW function
        this.age++
        console.log(this.age)   /*usando a arrow function ele já referencia o this
                                 o this person5 ou qualquer outro, sem precisar do
                                 do "bind()"*/ 
       
    },1000)
}
new person5

//---------------------------------------------------------------------**
/*FUNÇÕES ANÔNIMAS*/
//IMPORTANTE, UMA FUNÇÃO ARROW FUNCTION SEMPRE É ANÔNIMA

const soma = function (x,y) {  /*uma função anônima não possui um nome para ser
                               ser chamada, então usa o parênteses () se for 
                               passar algum parâmentro, se não usa uma const
                               para armazenar a função anônima*/
return x + y
}
(2,2); //como tem parâmetros passa o () com valor dentro
console.log(soma)

const soma2 = function (a1,b2,soma)  { /*Outra função anônima com parâmetros e
                                       pegando em um dos parâmetros uma variável
                                       que contem uma função anônima logo acima*/ 
return a1+b2+soma
}
(3,3,soma) //passando valor do parâmetro anônima
console.log(soma2)

//---------------------------------------------------------------------**
/*FUNÇÕES CALLBACK */
//CALLBACK É UMA FUNÇÃO QUE IRÁ RETORNAR QUANDO UM EVENTO ACONTECER

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
console.log(list.length)




                                         
                                    



