$("#form1").submit(function(event) { 

  var form = $("#form1")
    $.ajax({
      url: form.attr('action'),
      type: form.attr('type'),
      data: form.serialize(),
      success: function(data) {
        result = jQuery.parseJSON(data);
        if (result.ok != undefined && result.ok == true) {
          form.html('<div class="form-success"><h3 class="form-title">El formulario ha sido enviado con éxito</h3><h3 class="form-title">Muchas gracias por ponerse en contacto conmigo</h3></div>');
        } else {
          if (result.name != undefined) {
            $("#name").addClass("form-error")
          }
          if (result.email != undefined) {
            $("#email").addClass("form-error")
          }
          if (result.phone != undefined) {
            $("#textArea").addClass("form-error")
          }
        }
      }
    });
  event.preventDefault();
});

$("#l1").click(function(){
	$("#l1").addClass("seccion");
	$("#l2").removeClass("seccion");
	$("#l3").removeClass("seccion");
	$("#bs-menu").removeClass("in");
});

$("#l2").click(function(){
	$("#l2").addClass("seccion");
	$("#l1").removeClass("seccion");
	$("#l3").removeClass("seccion");
	$("#bs-menu").removeClass("in");
});

$("#l3").click(function(){
	$("#l3").addClass("seccion");
	$("#l2").removeClass("seccion");
	$("#l1").removeClass("seccion");
	$("#bs-menu").removeClass("in");
});
