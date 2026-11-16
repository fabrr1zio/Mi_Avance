function actualizarPrecio() {
  const selectServicio = document.getElementById('servicioSelect');
  console.log(`Nuevo precio base: S/ ${selectServicio.value}`);
}

function calcularTotal() {
  const selectServicio = document.getElementById('servicioSelect');
  const inputCantidad = document.getElementById('cantidadInput');
  const modalCotizacion = document.getElementById('modal-cotizacion');

  const precioServicio = parseFloat(selectServicio.value);
  const nombreServicio = selectServicio.options[selectServicio.selectedIndex].text;
  const cantidad = parseInt(inputCantidad.value, 10);

  // Validación básica para evitar cantidades vacías o menores a 1
  if (!Number.isFinite(cantidad) || cantidad < 1) {
    alert("Por favor, ingresa una cantidad válida de personas (mínimo 1).");
    inputCantidad.focus();
    return;
  }

  const totalEstimado = precioServicio * cantidad;

  // Insertar los datos dinámicos en el modal
  document.getElementById('resumenServicio').textContent = nombreServicio;
  document.getElementById('resumenPersonas').textContent = cantidad === 1 ? "1 persona" : `${cantidad} personas`;
  document.getElementById('resumenTotal').textContent = `S/ ${totalEstimado.toFixed(2)}`;

  // Mostrar el modal usando tus mismas clases de la Sesión 14
  modalCotizacion.classList.add("is-visible");
  modalCotizacion.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Control de cierre para el modal de cotización
const modalCotizacion = document.getElementById("modal-cotizacion");

if (modalCotizacion) {
  const cerrarModalCotizacion = () => {
    modalCotizacion.classList.remove("is-visible");
    modalCotizacion.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  };

  // Cerrar al hacer clic en la X, el botón "Aceptar y cerrar" o el fondo oscuro
  modalCotizacion.addEventListener("click", (e) => {
    if (e.target.closest("[data-modal-close]")) {
      cerrarModalCotizacion();
    }
  });

  // Cerrar con la tecla Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalCotizacion.classList.contains("is-visible")) {
      cerrarModalCotizacion();
    }
  });
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
  const nombre = document.getElementById("tarjetaNombre").value.trim();
  const numero = document.getElementById("tarjetaNumero").value.trim();
  const vence = document.getElementById("tarjetaVence").value.trim();
  const cvv = document.getElementById("tarjetaCvv").value.trim();
  const monto = parseFloat(document.getElementById("tarjetaMonto").value);
  // Validar los campos
  if (
    nombre === "" ||
    numero === "" ||
    vence === "" ||
    cvv === "" ||
    !Number.isFinite(monto) ||
    monto <= 0
  ) {
    alert("Completa todos los campos e ingresa un monto válido.");
    return;
  }
  // Confirmación de demostración
  alert(
    `¡Simulación completada!\n\n` +
    `Comercio: MIA SPA ELEGANCIA S.A.C.\n` +
    `Monto: S/ ${monto.toFixed(2)}\n\n` +
    `No se realizó ningún cobro ni se guardaron datos.`
  );
}

// --------- Sesión 14 ----------
const menuBtn = document.querySelector(".hamburguesa");
const navMenu = document.querySelector(".nav");
const navBackdrop = document.querySelector(".nav-backdrop");

menuBtn.addEventListener("click", () => {
  const isActive = navMenu.classList.toggle("is-active");
  menuBtn.classList.toggle("is-active");
  navBackdrop.classList.toggle("is-active");
  menuBtn.setAttribute("aria-expanded", isActive);
  document.body.style.overflow = isActive ? "hidden" : "auto";
});

const cerrarMenu = () => {
  navMenu.classList.remove("is-active");
  menuBtn.classList.remove("is-active");
  navBackdrop.classList.remove("is-active");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "auto";
};

// Cerrar al elegir un enlace, al tocar el fondo oscuro o con la tecla Escape
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", cerrarMenu);
});
navBackdrop.addEventListener("click", cerrarMenu);
window.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarMenu(); });

// Si la ventana se agranda hasta el diseño de escritorio, cerrar el menú y devolver el scroll
window.addEventListener("resize", () => { if (window.innerWidth >= 768) cerrarMenu(); });

// CONTROL DEL MODAL DE PAGO CON TARJETA

const modalTarjeta = document.getElementById("pago-tarjeta");
const botonTarjeta = document.querySelector(
  '[data-modal-open="pago-tarjeta"]'
);

if (modalTarjeta && botonTarjeta) {

  // Abrir ventana modal
  const abrirModalTarjeta = () => {

    modalTarjeta.classList.add("is-visible");

    modalTarjeta.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    document.getElementById("tarjetaNombre").focus();

  };

  // Cerrar ventana modal
  const cerrarModalTarjeta = () => {

    modalTarjeta.classList.remove("is-visible");

    modalTarjeta.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "auto";

    botonTarjeta.focus();

  };

  // Evento para abrir
  botonTarjeta.addEventListener(
    "click",
    abrirModalTarjeta
  );

  // Evento para cerrar con X o fondo oscuro
  modalTarjeta.addEventListener("click", (e) => {

    if (e.target.closest("[data-modal-close]")) {
      cerrarModalTarjeta();
    }

  });

  // Cerrar con tecla Escape
  window.addEventListener("keydown", (e) => {

    if (
      e.key === "Escape" &&
      modalTarjeta.classList.contains("is-visible")
    ) {
      cerrarModalTarjeta();
    }

  });

} else {

  console.error(
    "No se encontró el botón o el modal de tarjeta."
  );

}
