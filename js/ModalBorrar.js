// devinimos los tres eventos del formulario
document.getElementById("MiFormulario").addEventListener("submit", submit);
document.getElementById("ok").addEventListener("click", enviar);
document.getElementById("ko").addEventListener("click", cancelar);

// Funcion que se ejecuta al pulsar el botón enviar el formulario
function submit(e) {
  // Cancelams el envio a la espera de que valide el formulario
  e.preventDefault();

  // Mostramos la capa con el formulario de validacion
  document.getElementById("capa").style.display = "block";
}

// Funcion que se ejecuta al pulsar el boton Enviar de cuadro de dialogo
function enviar() {
  // Escondemos la capa
  document.getElementById("capa").style.display = "none";

  // Enviamos el formulario
  /* var agregarArticulo = document.querySelector("#MiFormulario"); */

  /* agregarArticulo.addEventListener("submit", function(event) { */
  // No envíe el formulario
  document.forms["MiFormulario"].submit(event => {
    event.preventDefault();

    /*  const $MiFormulario = document.querySelector("#MiFormulario");
  $MiFormulario.addEventListener("submit", event => { */
    /* event.preventDefault(); */
  });
}

// Funcion que se ejecuta al pulsar el boton Cancelar de cuadro de dialogo
function cancelar(e) {
  // Simplemente escondemkos el formulario
  document.getElementById("capa").style.display = "none";
}

/* function pregunta() {
  if (!confirm("¿Esta seguro de que desea borrar los articulos de la lista?")) {
    e.preventDefault();
  }
} */

/* function pregunta() {
  return Swal.fire({
    title: "Estas seguro?",
    text: "No podrar recuperarlo!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar"
  }).then(result => {
    if (
      !confirm("¿Esta seguro de que desea borrar los articulos de la lista?")
    ) {
      e.preventDefault();

      Swal.fire("Elminado!", "Tu lista fue eliminada.", "success");
    }
  });
} */
