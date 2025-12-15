import promp_sync from "prompt-sync";
const tomar = promp_sync();

let pedido = tomar("¿Cual es tu pedido?: "); //Solicito el ingreso de datos

function procesarPedido(Callback){ //Creo la funcion para procesar el pedido
    setTimeout(() => { //Paso el proceso a segundo plano
        console.log("Pedido entregado") //Imprimo el mensaje de confirmacion
    }, 3000); 
    Callback(); //llamamos la callback
}

let pago = parseInt(tomar("Ingrese el pago: $")) //Solicito el valor del pedido

procesarPedido(() => { //llamo a la funcion
console.log(`Tu pedido ${pedido} esta en proceso, pagaste el valor de: ${pago}`);
});

