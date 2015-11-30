$("#form1").submit(function(event) { 

  var form = $("#form1")
    $.ajax({
      url: form.attr('action'),
      type: form.attr('type'),
      data: form.serialize(),
      success: function(data) {
        result = jQuery.parseJSON(data);
        if (result.ok != undefined && result.ok == true) {
          form.html('<h4 class="form-success">El formulario ha sido enviado con éxito</h4>');
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
