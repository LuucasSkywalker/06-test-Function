/* Tudo em java script praticamente é função
objeto é função..
Array é uma função..
qualquer CLASSE é função..
*/

console.log(typeof Object)

console.log(typeof Array)
//********************************************************* */
// função padrão

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

//função arrow function amarzenada na variavel const

const tipe = (n1, n2)=>{
    return n1 + n2;
};
const res = tipe(5,8)
console.log(res);


const price = (value1,value2) => {
    return `valor1:${value1}$ e valor 2:${value2}$`;
}
console.log(price(45.25, 55.99))


const price2 = (value3,value4) => {
    console.log(value3 , value4)
}
price2(44, 15);

/********************************************************** */

//function da forma literal, sem parametro 

function ex01 (){
   let n1 = 12
   let n2 = 12
   return console.log(n1+n2)
    
}
