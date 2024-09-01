/* Tudo em java script praticamente é função
objeto é função..
Array é uma função..
qualquer CLASSE é função..
*/

console.log(typeof Object)

console.log(typeof Array)
//********************************************************* */
// função padrão
function fun1 (){};

//armazenar função em uma variável
const fun2 = function (){};

// função anônima/ não tem nenhum nome
const anonimato = function (){};

const fruits = ['banana', 'apple', 'orange', 'lemon']  
for ( const fruit of fruits){  //Usando (for of) para percorrer um array
    console.log(fruit)    
}

//armazenar função em um array
const valorarray  = [function (nameadmin){return nameadmin}];
    console.log(valorarray[0]('Lucas Cavalcante')); 

// duas FUNCÕES dentro de um array
const boletoArray = [function(conta, conta2){ return `${conta} e ${conta2}`},
                     function(boleto){return boleto}];
console.log(boletoArray[0](433, 988), boletoArray[1](798) );
console.log(boletoArray.length)

boletoArray.forEach


    //ou usar arrow function
 const array = [(nameadmin) => {return nameadmin}];
    console.log(valorarray[0]('Lucas Cavalcante'));   

//Uma função pode retornar/ ou conter outra função
function soma (a,b){
    return (c) =>{console.log(a+b+c)}
}
soma(4,4)(2);

/*********************************************************** */
                         
function add (n3, n4){
    return n3 + n4; 
}
const somar = add(4,6);
console.log(somar);


function color (cor1, cor2){
    return `suas cores são ${cor1} e ${cor2}`;
}
console.log(color('verde','preto'));


function people (name1, name2){
    return `duas pessoas no mesmo lugar ${name1} e ${name2}`;
};
const byname = people('Lucas', 'Larissa');
console.log(byname);


function calc (a,b){
    return a+b;
}
console.log(calc(2,2));

//******************************************************* */

//ARROW function amarzenada na variavel const
const tipe = (n1, n2)=>{
    return n1 + n2;
};
const res4 = tipe(5,8)
console.log(res4);


const price = (value1,value2) => {
    return `valor1:${value1}$ e valor 2:${value2}$`;
}
console.log(price(45.25, 55.99))


const price2 = (value3,value4) => {
    console.log(value3 , value4)
}
price2(44, 15);

/********************************************************** */

// ARROW function sem ser amarzenada em uma variável,
add = (a) => {return  a * a}
console.log(add(2));

//outra forma como contem apenas um parametro pode tirar o corpo
add = a => a*a   //quando usado assim sem corpo o return é automatico
console.log(add(2));


/********************************************************** */
let n1 = 12

function ex01 (){
   if (n1 >= 12){
     return `${n1*2}`
   }  
 }
 const res = ex01();
   console.log(res)



 const ex02 = function (a1,b2){
    if (a1 >= 4){
        return  a1*b2
       
    }; 
        
 };
 const res1 = ex02(4,4)
 console.log(`sua resposta ${res1}`)

const ex03 = (c1) =>{
    return   `${c1 * res1}`
}
  const res2 = ex03(2);
  console.log(res2);

  /******************************************* */
//criando uma função dentro do array
const name = [(name1)=>{return name1}];
console.log(name[0]('Lucas, Larissa, AnnaBelle'));

/*********************************************** */
//amarzenar dentro do atributo de um objeto
const obj = {}
obj.falar = function (){return 'opa'};
console.log(obj.falar());

/*********************************************** */

//parâmetro padrão, estrategia 1 para gerar VALOR padrão
function soma (a,b,c) {
    a=a || 1   // colocando valor padrão 1 usando o "OU ||" para cada parâmetro
    b=b || 1
    c=c || 1
    return a+b+c
};
console.log(soma(2), soma (4,2));   //mesmo se tiver somento 1 parâmetro retornará 1

//parâmetro novo es2015
function somar2 (a=1,b=1,c=1) {
    return a+b+c
};
console.log(soma(2)); //retorna 4, pois função só recebeu um parâmetro com (2),

//--------------------------------------------- . . .

// Funções CONSTRUTORAS 

/*
Em JavaScript, ( Number ) é um objeto que permite trabalhar com valores numéricos. 
Ele pode ser usado tanto como um tipo primitivo quanto como um objeto.
Em JavaScript, ( Number.prototype ) é uma propriedade do construtor Number que 
permite adicionar métodos e propriedades a todos os objetos Number1. (prototype) é 
um mecanismo pelo qual objetos herdam propriedades e métodos uns dos outros.
Em Number Isso significa que qualquer instância de Number herdará esses métodos e propriedades.
Por exemplo, você pode adicionar um método personalizado a Number.prototype 
para calcular a metade de um número:

*/ 
Number.prototype.metade = function (){
    return this   / 2
};
const numero = 200
console.log(numero.metade())

// -------------------------------------------------- . . .
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const NotasFacul = function(notasF){
    if (notasF.entre(9, 10)){
       return console.log('Excelente, voçê está de parabéns')
    } else if (notasF.entre(8, 8.99)){
       return console.log('parabéns pela nota')
    } else if (notasF.entre(6, 7.99)){
        return console.log('parabéns, continue se esforçando')
    } else {
    console.log('reprovado, estude mais !')
    }
}
NotasFacul(2)

/*Em JavaScript, o prototype é um mecanismo pelo qual objetos herdam
 propriedades e métodos uns dos outros. Cada função construtora tem 
 uma propriedade chamada prototype, que é usada para adicionar 
 métodos e propriedades que serão compartilhados por todas as 
 instâncias criadas por essa função
 Herança: Todos os objetos em JavaScript herdam de um protótipo. 
 Por exemplo, objetos de data herdam de Date.prototype, 
 e objetos de array herdam de Array.prototype.
Adição de métodos: Você pode adicionar novos métodos a um construtor 
de objetos usando a propriedade prototype. Por exemplo:
JavaScript
 */ 