import promp_sync from "prompt-sync";
const tomar = promp_sync();

function tomarDatos() { //funcion para tomar datos
    return new Promise((resolve, reject) => { //retorna una promesa
        setTimeout(() => {
            let nombre = tomar("Ingresa el nombre: "); //tomar datos
            let horas = parseInt(tomar("Ingresa las horas trabajadas: "));
            let pago = parseFloat(tomar("Ingresa el valor del pago por hora: $"));

            if (isNaN(horas) || isNaN(pago)) { //validar datos
                reject(new Error("Error: Las horas y el pago deben ser números válidos.")); //rechazar promesa
            } else {
                resolve({ nombre, horas, pago }); //resolver promesa
            }
        }, 3000);
    });
}

function procesarDatos(info) { //funcion para procesar datos
    return new Promise((resolve, reject) => { //retorna una promesa
        setTimeout(() => {
            if (!info || isNaN(info.horas) || isNaN(info.pago)) { //validar datos
                reject(new Error("Error: Datos inválidos para procesar.")); //rechazar promesa
            } else {
                let total = info.pago * info.horas; //calcular total
                console.log("Procesando los datos");
                resolve({ nombre: info.nombre, horas: info.horas, total: total });
            }
        }, 3000);
    });
}

function mostrarDatos(resultado) { //funcion para mostrar datos
    return new Promise((resolve) => { //retorna una promesa
        setTimeout(() => {
            console.log(`El salario total de ${resultado.nombre}, por las ${resultado.horas} horas trabajadas, es de $${resultado.total}`);
            resolve();
        }, 3000);
    });
}

tomarDatos() //tomar datos
    .then(procesarDatos) //procesar datos
    .then(mostrarDatos) //mostrar datos
    .catch(error => { //capturar error
        console.error(error.message);
    });
