// função bind e this Objeto
//O bind é responsavel por amarrar o metodo sempre que for chamado

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

function person3 (){
    
    this.age = 0
    setInterval(()=>{
        this.age++
        console.log(this.age)
       
    },1000)
}
new person3
