const cliente = {
    nombre : "mati",
    edad : 24,
    calcularEdad: function(){
        return this.edad
    }
}

console.log(cliente);
cliente.apellido = "habibo";
console.log(cliente);
delete cliente.nombre;
console.log(cliente);