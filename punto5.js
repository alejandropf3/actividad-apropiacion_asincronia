
import promp_sync from "prompt-sync";
const tomar = promp_sync();

function tomarDatos(callback){ //Creo la funcion para tomar los datos
    setTimeout(() => {
        let nombre = tomar("Ingresa el nombre: "); //Solicito los datos
        let horas = parseInt(tomar("Ingresa las horas trabajadas: "));
        let pago = parseFloat(tomar("Ingresa el valor del pago por hora: $"))
        callback(nombre, horas, pago);
    }, 3000);
}

function procesarDatos(nombre, horas, pago, callback){ //Creo la funcion para procesar los datos
    setTimeout(() => {
        let total = pago * horas; //Realizo el calculo del total
        console.log("Procesando los datos")
        callback(nombre, horas,total);
    }, 3000);
}

function mostrarDatos(nombre3, horas3,total2){ //Creo la funcion para mostrar los datos
    setTimeout(() => {
        console.log(`El salario total de ${nombre3}, por las ${horas3} horas trabajadas, es de $${total2}`); //Imprimo los datos
    },3000);
}
