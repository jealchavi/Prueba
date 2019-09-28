'use strict';

/* APARTADO 1 JAVASCRIPT */



// Identificamos el texto que deseamos cambiar
var texto = document.querySelector('.texto-header h2');

//Creamos un evento de tipo click para cambiar el texto una vez pulsado sobre él mediante una función anónima
texto.addEventListener('click', function () {
    this.innerHTML = 'Has pulsado sobre el título';
});


/* Apartado 2 de javascript: Creando un objeto */

// El primer paso es añadir un evento al formulario cuyi id es formularioContactos y extraer los datos de los inputs que introduce el usuario
var formularioContactos = document.querySelector('#formularioContactos')
formularioContactos.addEventListener('submit', validarFrm);

function validarFrm(e) {
    e.preventDefault();

    //Para evitar leer valores en blancos o evitar que el usuario teclee espacio usamos trim()
    var nombre = document.querySelector('#nombre').value.trim(),
        email = document.querySelector('#email').value.trim(),
        mensaje = document.querySelector('#mensaje').value.trim(),
        accion=document.querySelector('#accion').value;

        

    // Validamos que el frm no vaya vacío
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Todos los campos son obligatorios', 'error');
    } else {

        //Si el formulario contiene datos creamos un objeto de formData
        const datos = new FormData();

        // RESPUESTA 3:Añadimos al objeto datos mediante append lo que el usuario mado en el formulario
        datos.append('nombre', nombre);
        datos.append('email', email);
        datos.append('mensaje', mensaje);
        datos.append('accion',accion);

        if (accion==='enviar') {
            insertar(datos);
        }

        



    }


    function insertar(datos){

        /* Lamado a ajax.
        
        creación del objeto
        */
        const xhr=new XMLHttpRequest();

        /* Apertura de la conexion */
        xhr.open('POST','modelo-datos.php',true);

        /* Paso de datos */
        xhr.onload=function(){

             if(this.status===200){


                const respuesta=JSON.parse(xhr.responseText);
                //Imprimir en consola todos los datos del objeto
                console.log(respuesta);



                //Identificar el div donde está el formulario para añadirlo después
                var contenedor = document.querySelector('.formulario-contacto');

                //Creamos el div donde agregaremos los datos del contacto y el titulo
                var impresion = document.createElement('div'),
                    titulo = document.createElement('h2');


                titulo.innerHTML = "Datos insertados";
                impresion.appendChild(titulo);

                //Creamos la lista que contiene los datos
                var lista_datos = document.createElement('ul');
                lista_datos.innerHTML = `
                <li>${nombre}</li>
                <li>${email}</li>
                <li>${mensaje}</li>
                `;

                impresion.appendChild(lista_datos);
                contenedor.appendChild(impresion);
                  

                
                 
            }
        }

        /* Envío de datos-------------- */
        xhr.send(datos);

    }

}