/* $(document).ready(function() {
  $("#ejecuta").click(function(e) {
    alertify.confirm(
      "Eliminar datos",
      "¿Seguro que deseas eliminar?",
      function() {
        alertify.success("Ok");
      },
      function() {
        alertify.error("Cancel");
      }
    );
  });
}); */
/* 
const $advertencia = document.getElementById("advertencia");
$advertencia.addEventListener("click"),
  function pregunta(e) {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podrar recuperarlo!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar"
    }).then(result => {
      if (result.document.html.submit()) {
        Swal.fire("Eliminado!", "Tu lista fue eliminada.", "success");
      }
    });
    e.preventDefault();
  }; */

/* const $item_table = document.getElementById("#item_table"); */

/* document.getElementById("MiFormulario").addEventListener("submit", submit); */
/* document.getElementById("#item_table").addEventListener("remove");
 */
function pregunta(e) {
  if (!confirm("¿Esta seguro de que desea borrar los articulos de la lista?")) {
    e.preventDefault();
  }
}

/* Swal.fire({
    title: "Estas seguro?",
    text: "No podrar recuperarlo!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar"
  }).then(result => {
    if (result.value) {
            $(item_tables).remove(e);

      Swal.fire("Elminado!", "Tu lista fue eliminada.", "success");
    }
  });
  e.preventDefault();
}
 */

/* document.getElementById("#delete").addEventListener("delete"); */

/* $("#btnPromt").click(function() {
  swal({
    title: "Seguro que quieres hacer esto?",
    text: "Esta acción ya no se podrá deshacer, Así que piénsalo bien.",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, estoy seguro",
    cancelButtonText: "Cancelar"
  }).then(result => {
    if (result.document.html.submit()) {
      Swal.fire("Eliminado!", "Tu lista fue eliminada.", "success");
    }
  });
});
 */
/* $(document).ready(function() {
  $("#btnPromt").click(function() {
    alertify.confirm(
      "This is a confirm dialog.",
      function() {
        alertify.success("Ok");
      },
      function() {
        alertify.error("Cancel");
      }
    );
  });
});
 */
