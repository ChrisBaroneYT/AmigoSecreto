//listas de amigos y amigos sorteados
let amigos = [];
let amigosSorteados = [];

//funcion que agrega un amigo al array amigos
 function agregarAmigo() {
    //validar si el nombre de amigo ingresado tiene espacios y enviar una alerta
    if (document.getElementById('amigo').value.includes(" ")) {
        alert("El nombre no puede contener espacios");
        return false;
    }
    
        //validar si el nombre de amigo ingresado tiene numeros y enviar una alerta
    if (document.getElementById('amigo').value.match(/\d/)) {
        alert("El nombre no puede contener numeros");
        return false;
    }
    //validar si el campo input esta vacio y enviar una alerta
    if (document.getElementById('amigo').value == "") {
        alert("El campo no puede estar vacio");
        return false;
    }

    //añadir el nombre del amigo al array
    amigos.push(document.getElementById('amigo').value);
    //despues de añadir el nombre del amigo al array, limpiar el campo input
    document.getElementById('amigo').value = "";
    console.log(amigos);
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
            alert("No hay amigos para seleccionar");
            return false;
        }
        //validar que el array amigosSorteados sea igual al array amigos e indicar que ya se sortearon todos los amigos
        if (amigosSorteados.length == amigos.length) {
            alert("Ya se sortearon todos los amigos");
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
        console.log(amigosSorteados);

        //Seleccionar un amigo de manera aleatoria
        //let indice = Math.floor(Math.random() * amigos.length);
        //Mostrar el nombre usando document.getElementById('resultado').textContent
        //document.getElementById('resultado').textContent = amigos[indice];
    }