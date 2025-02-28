![Portada](https://imagizer.imageshack.com/img924/931/9yWFCH.png)

# Challenge Amigo Secreto

## :book: Descripción

Este proyecto es una actividad que pertenece al proceso de selección de candidatos para la beca de estudios en el programa ONE de Alura Latam en conjunto con Oracle. Consiste en el desarrollo de una aplicación web que permite cargar amigos en una lista, para luego sortear aleatoriamente uno, que será elegido como "amigo secreto".

<br />
<p align="center">
    <img src="https://img.shields.io/badge/Estado-Finalizado-green.svg">
    <img src="https://img.shields.io/badge/Versión-1.0-red.svg">
    <img src="https://img.shields.io/badge/Licencia-no_especificada-inactive.svg">
    <a href="https://github.com/martinroida/"><img src="https://img.shields.io/badge/GitHub-Perfil-yellow.svg"></a>
    <a href="https://ar.linkedin.com/in/martinroida"><img src="https://img.shields.io/badge/LinkedIn-Perfil-blue.svg"></a>
</p>
<br />

## :mag_right: Indice

* [Tecnologías utilizadas](#item1)

* [Funcionalidades del proyecto](#item2)

* [Añadir amigo](#item3)

* [Sortear amigo](#item4)

* [Screenshoots](#item5)

* [Autor](#item6)

<a name="item1"></a>
## :computer: Tecnologías utilizadas

* :heavy_check_mark: HTML5
* :heavy_check_mark: CSS
* :heavy_check_mark: JAVASCRIPT

<a name="item2"></a>
## :hammer: Funcionalidades del proyecto

* **Agregar amigo**:

Se introduce el nombre del amigo, haciendo uso de la caja de texto. A continuación se hace click en el botón "Añadir" para agregarlo a la lista.

* **Sortear amigo**:

Una vez cargados todos los amigos, se procede a hacer click en el botón "Sortear Amigo" para efectuar la elección de forma aleatoria de un amigo de la lista. El nombre del amigo seleccionado será el denominado "Amigo Secreto".

<a name="item3"></a>
## :heavy_plus_sign: Añadir amigo

Para ir cargando los amigos e ir almacenandolos en memoria, se utilizó un tipo de datos en Javascript conocido como lista (array, vector, en otros lenguajes de programación). Se captura el contenido de la caja de texto (en este caso, el nombre del amigo) y se agrega a la lista denominada **amigos[ ]** mediante el método push.

```javascript
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    amigos.push(amigo);
    ...
}
```

<a name="item4"></a>
## :arrow_forward: Sortear amigo

El sorteo del amigo secreto se efectua al elegir de forma aleatoria un número que va desde cero hasta el número límite del tamaño del vector. El número seleccionado será el índice del vector amigos [ ] y por lo tanto, la ubicación seleccionada donde se almacena el nombre del amigo seleccionado.

Para el desarrollo de esta función se utilizó la función Math.random() que sortea un número aleatorio entre 0 y 1, arrojando un número decimal. Luego se multiplica por la cantidad de elementos que tiene el vector. Finalmente, se redondea el número, para obtener un número entero, que será el valor del índice del vector; para ello, utilizamos la función Math.floor().

```javascript
function sortearAmigo(){
    let numeroMaximo = amigos.length;
    let min = 0;
    let indiceAleatorio =  Math.floor(Math.random(min, numeroMaximo)*numeroMaximo);
    ...
}
```

<a name="item5"></a>
## :camera_flash: Screenshoots

![Añadir amigo](https://imagizer.imageshack.com/img923/1116/FoLjn7.png)
<p align="center">Captura 1: Función "Añadir amigos"</p>

![Sortear amigo](https://imagizer.imageshack.com/img922/3126/JEMy1j.png)
<p align="center">Captura 2: Función "Sortear amigo"</p>

<a name="item6"></a>
## :information_source: Autor

<figure>
  <img src="https://imagizer.imageshack.com/v2/100x75q70/922/PDwyxO.png" border="0">
  <figcaption>2025 | Martín ROIDA</figcaption>
</figure>