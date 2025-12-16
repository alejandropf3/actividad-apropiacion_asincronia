import promp_sync from "prompt-sync";
const tomar = promp_sync();

function tomarDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let nombre = tomar("Ingresa el nombre: ");
            let horas = parseInt(tomar("Ingresa las horas trabajadas: "));
            let pago = parseFloat(tomar("Ingresa el valor del pago por hora: $"));
            resolve({ nombre, horas, pago });
        }, 3000);
    });
}

function procesarDatos(info) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let total = info.pago * info.horas;
            console.log("Procesando los datos");
            resolve({ nombre: info.nombre, horas: info.horas, total: total });
        }, 3000);
    });
}

function mostrarDatos(resultado) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`El salario total de ${resultado.nombre}, por las ${resultado.horas} horas trabajadas, es de $${resultado.total}`);
            resolve();
        }, 3000);
    });
}

tomarDatos()
    .then(procesarDatos)
    .then(mostrarDatos);
