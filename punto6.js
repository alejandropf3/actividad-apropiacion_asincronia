
function simularProceso() {
    return new Promise((resolve, reject) => {
        // Generamos un número aleatorio entre 0 y 1
        const aleatorio = Math.random();

        // Simulamos 50% de probabilidad de éxito
        if (aleatorio < 0.5) {
            resolve("Proceso completado correctamente");
        } else {
            reject("Error: El proceso ha fallado");
        }
    });
}

simularProceso() //simular proceso
    .then((mensaje) => { //capturar exito
        console.log("Éxito:", mensaje);
    })
    .catch((error) => { //capturar error
        console.log("Error:", error);
    });
