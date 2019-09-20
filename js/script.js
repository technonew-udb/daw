// Obtener referencia al input y a la imagen

const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
  $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $seleccionArchivos.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $imagenPrevisualizacion.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  $imagenPrevisualizacion.src = objectURL;
});




    //CREANDO VALIDACION DEL FORMULARIO
    function validacion(){
      var Formulario = document.form1;
      /*--------------------------------------------------*/
      var nombre = document.getElementById('name').value;
  var expreg2 = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
  
  if(expreg2.test(nombre)== false){
      alert("Ingrese solo letras");
      Formulario.name.focus();
     }else if (Formulario.name.value==""){
       alert("ERROR. Ingrese nombre")
       Formulario.name.focus();
     }
      /*--------------------------------------------------*/
  var email = document.getElementById('email').value;
  var expreg =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (Formulario.email.value == ""){
      alert("ERROR. Ingrese correo");
      Formulario.email.focus();
      //alert("La dirección de email " + email + " es correcta.");
     } else if(expreg.test(email) == false){
      alert("La dirección de correo " + email + " es incorrecta, utilice formato: algo@dominio.com");
      Formulario.email.focus();
     }

     /*--------------------------------------------------*/
     var apellido = document.getElementById('apellido').value;
     var expreg3 = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
     
     if(expreg3.test(apellido)== false){
         alert("Ingrese solo letras");
         Formulario.apellido.focus();
        }else if (Formulario.apellido.value==""){
          alert("ERROR. Ingrese apellido")
          Formulario.apellido.focus();
        }else 
    /*--------------------------------------------------*/
    var password = document.getElementById('pass').value;
    var expreg4 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

    if(expreg4.test(password) == false){
      alert("La contraseña debe tener entre 8 y 10 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos");
      Formulario.pass.focus();
    }else if(Formulario.pass.value=="" ){
      alert("ERROR. Ingrese contraseña");
          Formulario.pass.focus();
        }else{
          alert("Contraseña: Es aceptable");
          

        }
    
  }
    