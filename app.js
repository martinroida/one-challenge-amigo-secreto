// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaracion de vector para guardar amigos: en esta lista van a ir almacenados los amigos que se van a ir cargando.

let amigos = [];

//Funcion para agregar amigos al hacer click en el botón añadir:

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    //Validación: verifica si la caja está vacía.
    //to-do: ver de que forma implementar una validación con números, simbolos, etc.
    if (amigo == ""){
        alert('Por favor, ingrese un nombre.');
    } else {
        amigos.push(amigo);
        limpiaCaja();
    }
    }

    //Funcion para limpiar caja de texto:
    function limpiaCaja(){
        document.querySelector('#amigo').value = '';
    }