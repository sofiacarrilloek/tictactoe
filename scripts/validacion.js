var campo1 = document.getElementById("username");
var campo2 = document.getElementById("password");
var boton = document.getElementById("iniciar");

boton.addEventListener("click", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Verificar si los campos están llenos correctamente
  if (campo1.value && campo2.value) {
    // Cambiar de pestaña
    window.location.href = "index.html";
  } else {
    // Mostrar mensaje de error o realizar alguna acción adicional
    alert("Por favor, completa ambos campos correctamente.");
  }
});

window.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("sonido");
    audio.play();
  });