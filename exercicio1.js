//INICIO EXERCICIO  1

var arrayOriginal = [7,5,3,9,6,4,1];
var arrayNovo = [7,5,3,9,6,4,1];
var valorASerSubstituido = 9;
var valorDeSubstituicao = 5;
var valorASerRemovido = 4;
var somatorioLista = 0;

console.log(arrayOriginal);

for(var i = 0; i < arrayNovo.length; i++){
   if(arrayNovo[i] == valorASerSubstituido){
        arrayNovo[i] = valorDeSubstituicao;
    }

    if(arrayNovo[i] == valorASerRemovido){
        arrayNovo.splice(arrayNovo[i], 1);
   }

    somatorioLista = (Number)(somatorioLista + arrayNovo[i]);
}


console.log(`Lista original: ${arrayOriginal}`);
console.log(`Lista nova: ${arrayNovo.toString()}`);
console.log(`Somatorio: ${somatorioLista}`);
