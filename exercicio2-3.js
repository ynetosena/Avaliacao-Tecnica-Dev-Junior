
//RESPOSTA EXERCICIO 2: 85


//EXERCICIO 3

var numero = 9;
var array = [2, 7, 11, 15];

  for(var i = 0; i < array.length; i++){
     for(var j = 0; j < array.length; j++){
         var soma = array[i] + array[j];
         if(soma == numero){
             console.log(`A soma é ${array[i]} + ${array[j]} = ${numero}`);
             
             //quebra o loop
             i = array.length;
         }
     }
 }