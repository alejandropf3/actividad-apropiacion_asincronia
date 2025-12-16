
function esperarSegundos() { //funcion para esperar segundos
    return new Promise((resolve) => { //retorna una promesa
        setTimeout(() => { //esperar 2 segundos
            resolve("Proceso completado tras 2 segundos"); //resolver promesa
        }, 2000); //esperar 2 segundos
    });
}

async function ejecutarProceso() { //funcion para ejecutar proceso
    console.log("Iniciando espera...");
    const resultado = await esperarSegundos(); //esperar 2 segundos
    console.log(resultado); //imprimir resultado
}

ejecutarProceso(); //ejecutar proceso
