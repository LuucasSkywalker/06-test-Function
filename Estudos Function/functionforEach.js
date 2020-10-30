//RASCULHOS FOREACH
/*o método forEach() permite executar uma função para cada item de um array.
uma função forEach esperá um parâmetro obrigatório, ou sejá quando usar um
forEach deve ser passar pelo menos um parâmetro dentro forEach(parâmetro) */


//Valor retornado: Verde Amarelo Azul Branco
cores = ["Verde", "Amarelo", "Azul", "Branco"];

function imprimir(item) {
    console.log(item);
}

cores.forEach(imprimir);

//---------------------------------------------------------------------**
//Valor retornado: 0 2 4 6 8 10 12 14 16 18 20
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2);

//---------------------------------------------------------------------**
//Valor retornado: 55
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;

function somar(item) {
    total += item;
}

numeros.forEach(somar);
console.log(total);

//---------------------------------------------------------------------**
//Array retornado: ["Fiat", "Ford"]
marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
marcasIniciadasComF = [];
novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);

//---------------------------------------------------------------------**
//Array retornado: ["ALBERTO", "ALEX", "SANDRO", "ROBERTA"]
nomes = ["Alberto", "Alex", "Sandro", "Roberta"];

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes);

//---------------------------------------------------------------------**.
//Valor retornado: Ana Roberta
nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
tamanhoNome = 0;
nome = "";

function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}

nomes.forEach(maiorNome);
console.log(nome);

//---------------------------------------------------------------------**.
//Armazenando no ARRAY list os elementos aprovados do listApro1 usando o forEach
const listaApro1 = [{name:'Lucas', Note: 9.6},
                   {name:'Larissa', Note: 7.2},
                   {name:'Cleyri', Note: 5.6},
                   {name:'Annabelle', Note: 5.1}]

const list = []
listaApro1.forEach((aprovados, indice, nota)=> {
  if (aprovados.Note >= 7){
      list.push(aprovados)
  }
});
console.log(list.length)