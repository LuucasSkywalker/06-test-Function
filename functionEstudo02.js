// função bind e this Objeto
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

