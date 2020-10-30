const notas = [7.7, 8.5, 4.6, 6.1, 5.8, 5.5, 8.1, 4.9]

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
console.log(list[0].Note)