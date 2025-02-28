// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración de vector para guardar amigos: en esta lista van a ir almacenados los amigos que se van a ir cargando.

let amigos = [];

//Declaración de variable: captura en una variable la lista <ul></ul> (a través de su id) donde se van a insertar los amigos.

let listaAmigos = document.getElementById('listaAmigos');

//Declaración de variable: captura en una variable la lista <ul></ul> (a través de su id: 'resultado') donde se van a insertar el amigo sorteado.

let listaResultado = document.getElementById('resultado');

//Función para agregar amigos al hacer click en el botón añadir.

function agregarAmigo(){
    //Captura el valor cargado en la caja de texto (id="amigo") y lo guarda en una variable.
    let amigo = document.getElementById('amigo').value;
    //Validación: verifica si la caja está vacía, sino agrega el contenido de la caja de texto a la lista amigos[] mediante el método push.
    if (amigo == ""){
        alert('Por favor, ingrese un nombre.');
    } else {
        amigos.push(amigo);
        limpiarCaja();
        mostrarLista();
    }
}

//Función para limpiar la caja de texto: se utiliza el método querySelector.

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

// Función para mostrar la lista de amigos en index.html: primero vacía la lista <ul></ul> y luego recorre el vector, agregando cada elemento del mismo en una tag <li></li> dentro del html.

function mostrarLista(){
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//Función para sortear un amigo aleatoriamente y mostrarlo en la lista <ul></ul> llamada resultado.

function sortearAmigo(){
    let numeroMaximo = amigos.length;
    let min = 0;
    let indiceAleatorio =  Math.floor(Math.random(min, numeroMaximo)*numeroMaximo);
    if (amigos == '') {
        alert('No hay amigos para sortear!');
    } else if (amigos.length == 1){
        alert('Agregue, al menos, 2 amigos para sortear!');
    } else {
        listaAmigos.innerHTML = '';
        listaResultado.innerHTML = `El amigo sorteado es: ${'<li>'}${amigos[indiceAleatorio]}${'</li>'}`;
    }
}