
import promp_sync from "prompt-sync";
const tomar = promp_sync();


let nombre; //Inicializo las variables
let horas;
let pago;
let total;

function tomarDatos(callback){ //Creo la funcion para tomar los datos
    setTimeout(() => {
        nombre = tomar("Ingresa el nombre: "); //Solicito los datos
        horas = parseInt(tomar("Ingresa las horas trabajadas: "));
        pago = parseFloat(tomar("Ingresa el valor del pago por hora: $"))
        callback();
    }, 3000);
}

function procesarDatos(callback){ //Creo la funcion para procesar los datos
    setTimeout(() => {
        total = pago * horas; //Realizo el calculo del total
        console.log("Procesando los datos")
        callback();
    }, 3000);
}

function mostrarDatos(callback){ //Creo la funcion para mostrar los datos
    setTimeout(() => {
        console.log(`El salario total de ${nombre}, por las ${horas} horas trabajadas, es de $${total}`); //Imprimo los datos
        callback();
    },3000);
}


// Encadenamiento que genera el "Callback Hell"
// El cuerpo de la primera callback es la segunda llamada, 
// y el cuerpo de la segunda callback es la tercera llamada, etc.
tomarDatos(() => {
    procesarDatos(() =>{
        mostrarDatos(() => {
            console.log("Fin del proceso");
        });
    });
});

