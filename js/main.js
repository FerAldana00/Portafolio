let txtNombre = document.getElementById("nombre");
const btn = document.getElementById("btnEnviar");
let txtNumber = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");
let asunto = document.getElementById("asunto");
let email = document.getElementById("email");

function validarNombre(){
    if( txtNombre.value == null || txtNombre.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtNombre.value))) { 
        return false;
    }
    return true;
}//validarNombre

function telefono(){
    if( !(/^[1-9]\d*$/.test(txtNumber.value))){ 
        return false;
    }
    return true;
}//funcion telefono

function validarMensaje(){
    if (mensaje.value==0){
        return false;
    }//mensaje 0
    return true;
}//validarMensaje

function validarCorreo(){
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (! validEmail.test(email.value)){
        return false;
    }
    return true;
}//validarCorreo

function validarAsunto(){
    if (asunto.value==0){
        return false;
    }//mensaje 0
    return true;
}//validarMensaje

document.getElementById('form')
.addEventListener('submit',function(event){
    let isValid = true;
    event.preventDefault();
    txtNombre.style.border="solid thin green";
    txtNumber.style.border="solid thin green";
    email.style.border="solid thin green";
    mensaje.style.border="solid thin green";
    asunto.style.border="solid thin green";

    if (! validarMensaje()){
        Swal.fire({
            title: 'El campo "Mensaje" es necesario',
            text: 'Por favor no olvides escribir el mensaje de tu correo.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok'
          })
        mensaje.style.border="solid thin red";
        isValid = false;
    }//If validarMansaje <3

    if (! validarAsunto()){
        Swal.fire({
            title: 'El campo "Asunto" es necesario',
            text: 'Por favor no olvides escribir el asunto de tu correo.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok'
          })
        asunto.style.border="solid thin red";
        isValid = false;
    }//If validarAsunto <3

    if (! validarCorreo()){
        Swal.fire({
            title: 'El campo "E-mail" es necesario',
            text: 'Por favor escribe tu e-mail en el siguiente formato: tu_correo@dominio.com',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok'
          })
        email.style.border="solid thin red";
        isValid = false;
    }//If txtNombre <3

    if (! telefono()){
        Swal.fire({
            title: 'El campo "Teléfono" es necesario',
            text: 'Por favor escribe tu teléfono únicamente con números, recuerda no empezar con cero.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok'
          })
        txtNumber.style.border="solid thin red";
        isValid = false;
    }//telefono

    if (! validarNombre()){
        Swal.fire({
            title: 'El campo "Nombre completo" es necesario',
            text: 'Por favor escribe tu nombre únicamente con letras.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok'
          })
        txtNombre.style.border="solid thin red";
        isValid = false;
    }//Nombre

    let completo = ((validarNombre())+(telefono())+(validarCorreo())+(validarMensaje())+(validarAsunto()));
    if (!completo){
        Swal.fire({
            title: 'No puedo enviar nada, disculpa',
            text: 'No olvides llenar todos los campos antes de enviar.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Ok'
          })
    }

    if (isValid){
          btn.value = 'Send Email';
          Swal.fire({
            title: 'Enviado, gracias',
            text: 'Disfruta la página, disfruta el arte. Te contactaremos pron',
            icon: 'success',
            confirmButtonColor: "#E4C247",
            confirmButtonText: '¡Super! gracias.'
          });

        txtNombre.value="";
        txtNumber.value="";
        email.value="";
        mensaje.value="";
        asunto.value="";
        }//isValid
    });//btn "enviar"