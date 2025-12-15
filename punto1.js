
// import promp_sync from "prompt-sync";
// const tomar = promp_sync();

console.log("Inicio"); /*Imprimo el mensaje de inicio*/

setTimeout(() => { /*Muevo a segundo plano la operacion*/
    let suma = 3 + 2; //Realizo la suma
    console.log(`\nLuego de que terminen todos los procesos imprimo la suma: ${suma}`); //Imprimo un mensaje
}, 2);

console.log(`\nFin`) //Imprimo un mensaje final