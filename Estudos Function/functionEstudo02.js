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
                                    



