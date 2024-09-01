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
