
// === Ejercicio 3: Simulador de Consulta de Usuarios y Roles ===

const usuarios = [101, 102, 103, 104];

// Tiempos simulados
const TIEMPOS = {
    usuario: 1200,
    seguridad: 800,
    roles: 2000,
    registro: 600
};

// --- Parte 1: Versión Bloqueante (Simulada) ---
console.log("\n>>> PARTE 1: Versión Bloqueante (Explicación demostrativa) <<<");
console.log("NOTA: Una versión sincrónica usando loops 'while(new Date() < end)' congelaría todo el hilo de ejecución.");
console.log("No se ejecutará código bloqueante real para no detener el script.");

// --- Parte 2 & 3: Lógica Asincrónica ---

function consultarUsuario(id) {
    return new Promise(resolve => setTimeout(() => resolve({ id, nombre: `Usuario ${id}` }), TIEMPOS.usuario));
}

function consultarSeguridad(usuario) {
    return new Promise(resolve => setTimeout(() => resolve({ ...usuario, seguridad: "OK" }), TIEMPOS.seguridad));
}

function consultarRoles(usuario) {
    return new Promise(resolve => setTimeout(() => resolve({ ...usuario, roles: ["admin", "ventas"] }), TIEMPOS.roles));
}

function registrarAcceso(usuario) {
    return new Promise(resolve => setTimeout(() => resolve(usuario), TIEMPOS.registro));
}

// Implementación con Async/Await (Más limpia y requerida en el punto 3)
async function flujoCompletoUsuario(id) {
    const inicio = Date.now();

    // Flujo secuencial POR usuario
    let usuario = await consultarUsuario(id);
    usuario = await consultarSeguridad(usuario);
    usuario = await consultarRoles(usuario);
    await registrarAcceso(usuario);

    const fin = Date.now();
    const tiempoTotal = ((fin - inicio) / 1000).toFixed(1) + " segundos";

    return { ...usuario, tiempoTotal };
}

async function ejecutarEjercicio3() {
    console.log("\n>>> PARTE 3: Versión Async/Await (Paralela entre usuarios) <<<");
    const inicioGlobal = Date.now();

    // Ejecutamos todos los flujos en paralelo
    const promesas = usuarios.map(id => flujoCompletoUsuario(id));
    const resultados = await Promise.all(promesas);

    const finGlobal = Date.now();
    const tiempoTotalGlobal = ((finGlobal - inicioGlobal) / 1000).toFixed(1) + " segundos";

    console.log("Resultados individuales:");
    console.log(resultados);

    console.log("\n--- Registro Final ---");
    console.log(`Tiempo total del grupo: ${tiempoTotalGlobal}`);
    console.log(`Usuarios consultados: ${resultados.length}`);
}

ejecutarEjercicio3();
