exports.misFunciones = function(miArray){
    let suma = 0;
    for(let i = 0;  i < miArray.length; i++){
        suma += miArray[i];
    }
    console.log(suma);
    return suma;
}