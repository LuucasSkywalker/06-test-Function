/*const notas = [7.7, 8.5, 4.6, 6.1, 5.8, 5.5, 8.1, 4.9]

const notasAprovadas = []
for (let i = 0; i <= notas.length; i++){
    if (notas[i] >= 6) {
    notasAprovadas.push(notas[i])
}}

console.log(notasAprovadas)

const notas2 = [7.7, 8.5, 4.6, 6.1, 5.8, 5.5, 8.1, 4.9]
const notasAprovadas2 = []

notas2.forEach((notas)=>{
    if (notas >= 6){
        notasAprovadas2.push(notas)
    }
    
    
    
})
console.log(notasAprovadas2)

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
console.log(list[0].Note) */


const NotaAlunos = [7.2,6.1,5.6,8.1,5.5,7.2]

const ResAlunos = NotaAlunos.filter((indice) =>{   // chamando um callback 'filter()'
  return indice >= 6
});
console.log(ResAlunos)



const Taboada = ((v1)=> {
  var res = v1
  
    for( var i = 0; i < res ; i++){
      console.log(`${res} * ${i} = ${res*i}`)
     
      if (res*i < 6) {
        console.log(`ERRO limite de ${res} erros, tente mais TARDE`)
      }

    }  
    
    
})

Taboada(7)

