
const fabriCarros = [{name:'Volkswagem: GOL', Year: 8.8},
                     {name:'Toyota: Corolla', Year: 5.4},
                     {name:'Fiat: Uno', Year: 3.1},
                     {name:'Fiat: Strada', Year: 2.9},
                     {name:'Toyota: Ettios', Year: 9.8}]

 const lista = []
 fabriCarros.forEach((montadora, indice)=> {
  if (montadora.Year >= 6){
     lista.push[montadora]
  }
 
 }) ;
 console.log(lista.length)


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