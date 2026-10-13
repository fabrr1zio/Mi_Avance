let carrito = [];
let subtotal = 0;
let descuento = 0;

function agregar(nombre, precio) {
    carrito.push({nombre, precio});
    calcular();
}

function calcular() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    subtotal = 0;

    carrito.forEach((item, index) =>{
        subtotal += item.precio;

        const li = document.createElement("li");
        li.innerHTML = `
      ${item.nombre} - S/ ${item.precio}
      <button onclick="eliminar(${index})">X</button>  
        `;
        lista.appendChild(li);
    });

    let totalConDescuento = subtotal - (subtotal * descuento / 100);
    
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
     document.getElementById("descuento").textContent = descuento + "%";
      document.getElementById("total").textContent = totalConDescuento.toFixed(2);

}

function eliminar(index) {
    carrito.slice(index, 1);
    calcular();
}

function vaciar(){
    carrito = [];
    subtotal = 0;
    descuento = 0;
    document.getElementById("cupon").value = "";
    calcular();
}

function aplicarCupon() {
    let codigo = document.getElementById("cupon").value;

    if ( codigo === "DESCUENTO10") {
        descuento = 10;
        alert ("Cupón aplicado: 10% de descuento");
    }
    else if (codigo === "OFERTA20") {
        descuento = 20;
        alert ("Cupón aplicado: 20% de descuento");
    }
    else if (codigo === "VIP30") {
        descuento = 30;
        alert("Cupón aplicado: 30% de descuento");
    }
    else{
        alert("Cupón inválido");
        descuento = 0;
    }
    calcular();
}