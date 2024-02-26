$(document).ready(function(){

  // Cambia el comportamiento del formulario por defecto
  $("#formModal").on('submit', function(e){
    console.log('Estoy enviando un formulario');

    e.preventDefault();
  })
})