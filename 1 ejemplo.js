function actualizarPrecio() {
  const selectServicio = document.getElementById('servicioSelect');
  console.log(`Nuevo precio base: S/ ${selectServicio.value}`);
}

function calcularTotal() {
  const selectServicio = document.getElementById('servicioSelect');
  const inputCantidad = document.getElementById('cantidadInput');

  const precioServicio = parseFloat(selectServicio.value);
  const cantidad = parseFloat(inputCantidad.value);
  const totalEstimado = precioServicio * cantidad;

  console.log(`Precio: S/ ${precioServicio} | Personas: ${cantidad} | Total: S/ ${totalEstimado}`);
  alert(`El total estimado es: S/ ${totalEstimado}`);
}

function saludar() {
  const inputNombre = document.getElementById('nombreInput');
  const textoSaludo = document.getElementById('chatSaludo');
  const nombre = inputNombre.value;

  console.log(`Nombre ingresado: ${nombre}`);
  textoSaludo.textContent = nombre === "" ? "¡Hola! Bienvenida a Mia Elegancia." : `¡Hola ${nombre}! Bienvenida a Mia Elegancia.`;
}

function elegirMetodo() {
  const selectPago = document.getElementById('metodoPago');
  console.log(`Método elegido: ${selectPago.value}`);
}

function verInstrucciones() {
  const selectPago = document.getElementById('metodoPago');
  const instrucciones = selectPago.value;
  alert(`Instrucciones de pago: ${instrucciones}`);
}

function pagarTarjeta() {
  const nombre = document.getElementById('tarjetaNombre').value;
  const numero = document.getElementById('tarjetaNumero').value;
  const vence = document.getElementById('tarjetaVence').value;
  const cvv = document.getElementById('tarjetaCvv').value;
  const monto = parseFloat(document.getElementById('tarjetaMonto').value);

  const datosCompletos = nombre !== "" && numero !== "" && vence !== "" && cvv !== "" && monto > 0;
  const mensaje = datosCompletos
    ? `Pago de demostración por S/ ${monto} a MIA SPA ELEGANCIA S.A.C. No se procesó ningún cobro ni se guardó ningún dato.`
    : "Completa todos los campos y escribe un monto mayor a 0.";

  console.log(`Datos completos: ${datosCompletos}`);
  alert(mensaje);
}
