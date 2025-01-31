//listas de amigos y amigos sorteados
let amigos = [];
let amigosSorteados = [];

//funcion para mostrar un mensaje con la fuente en rojo y el borde INPUT id="amigo" de HTML
function mostrarMensaje(mensaje) {
    //cambiar el color de la fuente y el mensaje en el input
    document.getElementById('amigo').style.color = 'red';
    document.getElementById('amigo').value = mensaje;
    //boder rojo en el input
    document.getElementById('amigo').style.border = '3px solid red';
    //cuando este el error en el input no permitir que se ingrese otro nombre
    document.getElementById('amigo').disabled = true;
    //habilitar el input despues de 2 segundos
    setTimeout(function() {
        document.getElementById('amigo').disabled = false;
        //quitar el borde
        document.getElementById('amigo').style.border = 'none';
        //limpiar el mensaje en el input
        document.getElementById('amigo').value = "";
        //cambiar el color de la fuente y el mensaje en el input
        document.getElementById('amigo').style.color = 'black';
    }, 2000);


    //limpiar al dar click en el input
    //document.getElementById('amigo').addEventListener('click', function() {
        //quitar el borde
    //    document.getElementById('amigo').style.border = 'none';
        //limpiar el mensaje en el input
     //   document.getElementById('amigo').value = "";
        //cambiar el color de la fuente y el mensaje en el input
      //  document.getElementById('amigo').style.color = 'black';
    //});
}
//funcion para borrar los amigos y volver a uniciar el sorteo
function borrarAmigos() {
    //borrar los amigos y amigos sorteados
    amigos = [];
    amigosSorteados = [];
    //limpiar la lista de amigos en el HTML
    document.getElementById('listaAmigos').innerHTML = "";
    //limpiar el resultado en el HTML
    document.getElementById('resultado').textContent = "";
}
//funcion que agrega un amigo al array amigos
 function agregarAmigo() {
   
    //validar si el nombre ingresado esta en el array y enviar una alerta
    if (amigos.includes(amigos.find(amigo => amigo === document.getElementById('amigo').value.trim().toUpperCase()))) {
        mostrarMensaje("El amigo ya fue agregado.");
        return false;
    }
    
    //validar si el nombre de amigo ingresado tiene caracteres especiales y enviar una alerta
    if (document.getElementById('amigo').value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        mostrarMensaje("No agregar caracteres especiales.");
        return false;
    }

    //validar si el nombre ingresado tiene Espacios sin tener otro dato despues del espacio y enviar una alerta
    if (document.getElementById('amigo').value.match(/\s$/)) {
        mostrarMensaje("El nombre no puede terminar con un espacio.");
        return false;
    }

    //validar si el nombre de amigo ingresado tiene numeros y enviar una alerta
    if (document.getElementById('amigo').value.match(/\d/)) {
        mostrarMensaje("El nombre no puede contener numeros.");
        return false;
    }
    //validar si el campo input esta vacio y enviar una alerta
    if (document.getElementById('amigo').value == "") {
        mostrarMensaje("El campo no puede estar vacio.");
        return false;
    }

    //convertir el nombre del amigo a mayusculas y añadirlo al array amigos
    amigos.push(document.getElementById('amigo').value.trim().toUpperCase());
    //despues de añadir el nombre del amigo al array, limpiar el campo input
    document.getElementById('amigo').value = "";  
    mostrarAmigos();
 }
 //funcion que recorre el array y agrega cada nombre a un elemnto <li> dentro del HTML
    function mostrarAmigos() {
        //Utilizar document.getElementById('id') para seleccionar la lista donde se van a agregar los amigos
        let lista = document.getElementById('listaAmigos');
        //Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados
        lista.innerHTML = "";
        //Bucle for para recorre el array y agregar cada nombre a un elemento <li> dentro del HTML
        for (let i = 0; i < amigos.length; i++) {
            //Crear un elemento <li> y asignarle el nombre del amigo en la posicion i
            let elemento = document.createElement('li');
            elemento.textContent = amigos[i];
            //Agregar el elemento <li> a la lista
            lista.appendChild(elemento);
        }  
    }
//Funcion que selecione de manera aleatoria uno de los amigos del array usando math.random y math.floor para un indice aleatorio
    function sortearAmigo() {
        //validar si el array esta vacio y enviar una alerta
        if (amigos.length == 0) {
            mostrarMensaje("No hay amigos para seleccionar");
            return false;
        }
        //validar que el array amigosSorteados sea igual al array amigos e indicar que ya se sortearon todos los amigos
        if (amigosSorteados.length == amigos.length) {
            mostrarMensaje("Ya se sortearon todos los amigos");
            amigosSorteados = [];
        }
        //seleccionar un amigo aleatorio que no haya sido sorteado usando do while
        let indice;
        do {
            indice = Math.floor(Math.random() * amigos.length);
        } while (amigosSorteados.includes(indice)); //validar que el indice no este en el array amigosSorteados
        //mostrar el nombre del amigo seleccionado en el HTML
        document.getElementById('resultado').textContent = amigos[indice];
        //Añadir el amigo seleccionado al array amigosSorteados
        amigosSorteados.push(indice);
        //Seleccionar un amigo de manera aleatoria
        //let indice = Math.floor(Math.random() * amigos.length);
        //Mostrar el nombre usando document.getElementById('resultado').textContent
        //document.getElementById('resultado').textContent = amigos[indice];
    }

    // Agregar un eventListener para detectar cuando el usuario presiona ENTER
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {  // Verificar si la tecla presionada es ENTER
        event.preventDefault();  // Evitar que se haga un submit si el campo está dentro de un formulario
        agregarAmigo();  // Llamar la función para agregar el amigo
    }
});