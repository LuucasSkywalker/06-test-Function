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
  const res2 = ex03(2)
  console.log(res2)

  /******************************************* */
//criando uma função dentro do array

const name = [(name1)=>{return name1}];
console.log(name[0]('Lucas, Larissa, AnnaBelle'))


    




