
// === Ejercicio 2: Centro de Procesamiento de Órdenes ===

const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

// Tiempos simulados
const TIEMPOS = {
    verificacion: 1500,
    procesamiento: 2000,
    registro: 1000,
    notificacion: 500
};

// 1. PRIMERA PARTE: Callbacks (Ejemplo con una sola orden)
console.log("\n>>> INICIO PARTE 1: Callbacks (Orden 1) <<<");

function verificarCompraCallback(orden, callback) {
    console.log(`[Orden ${orden.id}] Verificando...`);
    setTimeout(() => {
        console.log(`[Orden ${orden.id}] Verificada.`);
        callback();
    }, TIEMPOS.verificacion);
}

function procesarCompraCallback(orden, callback) {
    console.log(`[Orden ${orden.id}] Procesando...`);
    setTimeout(() => {
        console.log(`[Orden ${orden.id}] Procesada.`);
        callback();
    }, TIEMPOS.procesamiento);
}

function registrarCompraCallback(orden, callback) {
    console.log(`[Orden ${orden.id}] Registrando...`);
    setTimeout(() => {
        console.log(`[Orden ${orden.id}] Registrada.`);
        callback();
    }, TIEMPOS.registro);
}

function notificarClienteCallback(orden, callback) {
    console.log(`[Orden ${orden.id}] Notificando...`);
    setTimeout(() => {
        console.log(`[Orden ${orden.id}] Notificada.`);
        callback();
    }, TIEMPOS.notificacion);
}

// Callback Hell Example
const startTimeCallback = Date.now();
verificarCompraCallback(ordenes[0], () => {
    procesarCompraCallback(ordenes[0], () => {
        registrarCompraCallback(ordenes[0], () => {
            notificarClienteCallback(ordenes[0], () => {
                const totalTime = (Date.now() - startTimeCallback) / 1000;
                console.log(`>>> FIN PARTE 1. Tiempo: ${totalTime}s`);

                // Iniciar siguiente parte
                iniciarPromesas();
            });
        });
    });
});


// 2. SEGUNDA PARTE: Promesas
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function procesarOrdenPromesa(orden) {
    return delay(TIEMPOS.verificacion)
        .then(() => {
            console.log(`[Orden ${orden.id}] Verificada (Promesa).`);
            return delay(TIEMPOS.procesamiento);
        })
        .then(() => {
            console.log(`[Orden ${orden.id}] Procesada (Promesa).`);
            return delay(TIEMPOS.registro);
        })
        .then(() => {
            console.log(`[Orden ${orden.id}] Registrada (Promesa).`);
            return delay(TIEMPOS.notificacion);
        })
        .then(() => {
            console.log(`[Orden ${orden.id}] Notificada (Promesa).`);
            return orden;
        });
}

function iniciarPromesas() {
    console.log("\n>>> INICIO PARTE 2: Promesas (Orden 2) <<<");
    const start = Date.now();
    procesarOrdenPromesa(ordenes[1])
        .then(() => {
            const time = (Date.now() - start) / 1000;
            console.log(`>>> FIN PARTE 2. Tiempo: ${time}s`);
            iniciarAsyncAwait();
        });
}

// 3. TERCERA PARTE: Async/Await
async function procesarOrdenAsync(orden) {
    const start = Date.now();
    await delay(TIEMPOS.verificacion);
    // console.log(`[Orden ${orden.id}] Verificada.`);
    await delay(TIEMPOS.procesamiento);
    // console.log(`[Orden ${orden.id}] Procesada.`);
    await delay(TIEMPOS.registro);
    // console.log(`[Orden ${orden.id}] Registrada.`);
    await delay(TIEMPOS.notificacion);
    // console.log(`[Orden ${orden.id}] Notificada.`);
    const total = (Date.now() - start) / 1000;
    return { ...orden, tiempo: total };
}

async function iniciarAsyncAwait() {
    console.log("\n>>> INICIO PARTE 3: Async/Await <<<");

    // Secuencial
    console.log("--- Procesamiento Secuencial ---");
    const startSec = Date.now();
    for (const orden of ordenes) {
        const res = await procesarOrdenAsync(orden);
        console.log(`Orden ${res.id} completada en ${res.tiempo}s`);
    }
    console.log(`Tiempo Total Secuencial: ${(Date.now() - startSec) / 1000}s`);

    // Paralelo
    console.log("\n--- Procesamiento Paralelo ---");
    const startPar = Date.now();
    const promesas = ordenes.map(orden => procesarOrdenAsync(orden));
    const resultados = await Promise.all(promesas);

    resultados.forEach(res => {
        console.log(`Orden ${res.id} completada en ${res.tiempo}s`);
    });
    console.log(`Tiempo Total Paralelo: ${(Date.now() - startPar) / 1000}s`);
}
