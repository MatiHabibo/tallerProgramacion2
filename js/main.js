const miLista = [45,33,20,15,-1,-33,100,12,-2];
const otraLista = miLista;
//otraLista[3] = 0;

console.log(miLista);
console.log(otraLista);

let sumaTotal = 0;
for(let i = 0; i < miLista.length; i++){
    if( miLista[i] > 30){
        sumaTotal += miLista[i];
    }

}
console.log(sumaTotal)

let mayores30 = 0;
for(let i = 0; i < miLista.length; i++){
    if( miLista[i] > 30){
        mayores30 ++;
    }

}
console.log(mayores30)