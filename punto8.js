
// --- Ejercicio 1: Simulación de "consulta de usuario" ---

console.log("=== EJERCICIO 1: Consulta de Usuario ===");

// Version con Callbacks
function buscarUsuarioCallback(callback) {
    setTimeout(() => {
        console.log("Callback: Usuario encontrado");
        callback();
    }, 1000);
}

function consultarPermisosCallback(callback) {
    setTimeout(() => {
        console.log("Callback: Permisos consultados");
        callback();
    }, 2000);
}

function generarReporteCallback(callback) {
    setTimeout(() => {
        console.log("Callback: Reporte generado");
        callback();
    }, 1000);
}

function ejecutarCallbacks() {
    console.log("\n--- Inicio Callbacks ---");
    buscarUsuarioCallback(() => {
        consultarPermisosCallback(() => {
            generarReporteCallback(() => {
                console.log("--- Fin Callbacks ---");
                ejecutarPromesas(); // Encadenamos el siguiente ejemplo
            });
        });
    });
}

// Version con Promesas
function buscarUsuarioPromesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promesa: Usuario encontrado");
            resolve();
        }, 1000);
    });
}

function consultarPermisosPromesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promesa: Permisos consultados");
            resolve();
        }, 2000);
    });
}

function generarReportePromesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promesa: Reporte generado");
            resolve();
        }, 1000);
    });
}

function ejecutarPromesas() {
    console.log("\n--- Inicio Promesas ---");
    buscarUsuarioPromesa()
        .then(consultarPermisosPromesa)
        .then(generarReportePromesa)
        .then(() => {
            console.log("--- Fin Promesas ---");
            ejecutarAsyncAwait(); // Encadenamos el siguiente ejemplo
        });
}

// Version con Async/Await
async function ejecutarAsyncAwait() {
    console.log("\n--- Inicio Async/Await ---");
    await buscarUsuarioPromesa();
    await consultarPermisosPromesa();
    await generarReportePromesa();
    console.log("--- Fin Async/Await ---");
    console.log("\n=== FIN EJERCICIO 1 ===");
}

// Iniciar la secuencia
ejecutarCallbacks();
