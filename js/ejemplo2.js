//obtenemos el formulario y el boton y los guardamos en una variable
const formulario = document.getElementById('formularioContacto');
const enviarBtn = document.getElementById('enviarBtn');

//utilizamos la variable del formulario y le agregamos un evento 
//evento submit al enviar el formulario se ejecute el codigo de la function
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  
  // obtenemos los valores de los inputs del formulario
    const nombreInput = document.getElementById('nombre');
    const nombreValor = nombreInput.value;
    const mensaje= document.getElementById("mensaje");
    const mensajeValor=mensaje.value;
    const correo= document.getElementById("correo");
    const correoValor=correo.value;
  
  // Mostrar mensaje de SweetAlert cuando el formulario se envía correctamente
  Swal.fire({
    icon: 'success',
    title: '¡Formulario Enviado!',
    text: `Gracias por tus comentarios ${nombreValor} , Tu mensaje ha sido enviado correctamente.`,
  });
  
  // Restablecer el formulario después del envío
  formulario.reset();
});

