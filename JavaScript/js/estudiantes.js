$(document).ready(function() {
  var estudiantes = [];

  $('#registro-estudiante').submit(function(event) {
    event.preventDefault();
    
    var ci = $('#ci').val();
    var nombre = $('#nombre').val();
    var fecha = $('#fecha').val();
    var direccion = $('#direccion').val();

    var estudiante = {
      ci: ci,
      nombre: nombre,
      fecha: fecha,
      direccion: direccion
    };

    estudiantes.push(estudiante);

    $('#ci').val('');
    $('#nombre').val('');
    $('#fecha').val('');
    $('#direccion').val('');

    mostrarEstudiantes();
  });

  function mostrarEstudiantes() {
    $('#lista-estudiantes').empty();

    for (var i = 0; i < estudiantes.length; i++) {
      var estudiante = estudiantes[i];
      var row = $('<tr>');
      row.append($('<td>').text(estudiante.ci));
      row.append($('<td>').text(estudiante.nombre));
      row.append($('<td>').text(estudiante.fecha));
      row.append($('<td>').text(estudiante.direccion));
      $('#lista-estudiantes').append(row);
    }
  }
});