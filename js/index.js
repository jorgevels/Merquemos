$(document).ready(function() {
  $(document).on("click", ".add", function() {
    /* var articulos = document.querySelector("#artículo"); */
    /* var room = 0; */
    var htmlAppend = "";

    /* var chekc = $("#Chekc").val();
    var articulos = $("#Articulos").val();
    var articulosDate = $("#articulosDate option:selected").val();
    var cantidadDate = $("#cantidadDate option:selected").val(); */

    /* room++;
    var parentDiv = document.getElementById("education_fields"); // point to the parent Div
    var childDiv = document.createElement("div"); // create child div on the fly
    childDiv.setAttribute("class", "form-group removeclass" + room); // add a dynamic class to the child div
    childDiv.innerHTML = */ htmlAppend +=
      "<tr>";
    htmlAppend +=
      '<td><input type="checkbox" name="chekc"  class="form-controls">';
    htmlAppend += '<label for="i"></label></td>';
    htmlAppend +=
      '<td><input list="Articulos" type="text" name="articulos" placeholder="Ingresar articulo" class="form-control item_name" id="MiFormulario" /></td>';
    htmlAppend +=
      '<td><select class="form-control item_cant"><option value="">1</option><option value="">2</option><option value="">3</option><option value="">4</option><option value="">5</option><option value="">6</option > <option value="">7</option> <option value="">8</option> <option value="">9</option> <option value="">10</option> <option value="">11</option> <option value="">12</option> <option value="">13</option> <option value="">14</option> <option value="">15</option> <option value="">16</option> <option value="">17</option> <option value="">18</option> <option value="">19</option> <option value="">20</option> <option value="">21</option> <option value="">22</option> <option value="">23</option> <option value="">24</option> <option value="">25</option> <option value="">26</option> <option value="">27</option> <option value="">28</option> <option value="">29</option> <option value="">30</option> <option value="">31</option> <option value="">32</option> <option value="">33</option> <option value="">34</option> <option value="">35</option> <option value="">36</option> <option value="">37</option> <option value="">38</option> <option value="">39</option><option value="">40</option><option value="">41</option><option value="">42</option><option value="">43</option><option value="">44</option><option value="">45</option><option value="">46</option><option value="">47</option><option value="">48</option><option value="">49</option><option value="">50</option><?php echo fill_unit_select_box($connect); ?></select></td>';
    htmlAppend +=
      '<td><select  class="form-control item_unit"><option value="">LB</option><option value="">KL</option><option value="">BL</option><option value="">PK</option><option value="">LT</option><?php echo fill_unit_select_box($connect); ?></select></td>';
    htmlAppend +=
      '<td><button type="button" name="remove" class="btn btn-danger btn-sx remove"><span class="glyphicon glyphicon-trash"></span></button></td></tr>';
    $("#item_table").append(htmlAppend);

    /* parentDiv.appendChild(childDiv); //  append or inject dynamic fields to the parent div
    var StoredDiv = $(".removeclass" + room).html();
    manage_append(room, StoredDiv, "add"); //  store the dynamic fields to local storage
    $("#Chekc").val(" "); // then reset all fields
    $("#Articulos").val(" ");
    $("#articulosDate").val(" ");
    $("#cantidadDate").val(0); */

    /* function remove_education_fields(rid) {
      manage_append(rid, 0, "delete");
      $(".removeclass" + rid).remove();
    } */
    // add and remove dynamic fields from local storage
    /* function manage_append(room, html, action) {
      if (action === "add") {
        localStorage.setItem(room, html); //
      } else {
        localStorage.removeItem(room);
      }
    } */

    // restore dynamic fields from local storage
    /* $(function() {
      for (var i = 0, len = localStorage.length; i < len; ++i) {
        $("#education_fields").append(
          localStorage.getItem(localStorage.key(i))
        );
      }
    }); */

    contarInputs();

    var cboxes = document.getElementsByTagName("input");
    for (var i = 0; i < cboxes.length; i++) {
      var valor = cboxes[i].checked;
      if (cboxes[i].className == "form-controls") {
        if (!cboxes[i].addEventListener) {
          cboxes[i].attachEvent("onclick", contar);
        } else {
          cboxes[i].addEventListener("click", contar, false);
        }
      }
    }

    function contar() {
      var totales = "";
      var contador = 1;
      const casillas = document.getElementsByTagName("input");
      for (var i = 0; i < casillas.length; i++) {
        var valor = casillas[i].checked;
        var clase = casillas[i].className;
        if (clase == "form-controls") {
          if (valor == true) {
            totales = contador++;
          }
        }
      }
      document.getElementById("totales").value = totales;
    }
  });

  function contarInputs() {
    var inputs = $("input[name^=articulos]");
    var count = inputs.length;

    document.getElementById("count").value = count;
  }

  $(document).on("click", ".remove", function() {
    var inputs = $("input[name^=articulos]");
    var count = inputs.length;

    var totales = "";
    var contador = 1;
    const casillas = document.getElementsByTagName("input");
    for (var i = 0; i < casillas.length; i++) {
      var valor = casillas[i].checked;
      var clase = casillas[i].className;
      if (clase == "form-controls") {
        if (valor == true) {
          totales = contador++;
          document.getElementById("totales").value = totales - 1;
        }
        if (valor == false) {
          totales = totales;
          document.getElementById("totales").value = totales - 0;
        }
      }
    }

    $(this)
      .closest("tr")
      .remove();
    document.getElementById("count").value = count - 1;
  });
  //  append or inject dynamic fields to the parent div
});

// add and remove dynamic fields from local storage
