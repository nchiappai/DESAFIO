// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let usuario;
let amigos = [];
let nombreTemp;

function actualizarElemento(selector, contenido) {
    const elemento = document.querySelector(selector);
    elemento.innerHTML = contenido;
}

function registrarAmigo() {
    nombreTemp = document.getElementById('amigo').value.trim();

    if (nombreTemp === '') {
        actualizarElemento('h2', 'Debes ingresar un nombre válido');
    } else {
        actualizarElemento('h2', 'Agrega otro amigo a la lista');
        amigos.push(nombreTemp);
        mostrarAmigos();
    }

    limpiarInput();
}

function mostrarAmigos() {
    let listado = '';
    for (let indice = 0; indice < amigos.length; indice++) {
        if (amigos[indice] !== '') {
            listado += amigos[indice] + '<br>';
        }
    }
    actualizarElemento('#listaAmigos', listado);
}

function elegirAmigoSecreto() {
    if (amigos.length === 0) {
        actualizarElemento('#resultado', 'No hay amigos en la lista para sortear');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    actualizarElemento('#resultado', `El amigo secreto es: ${amigos[indiceAleatorio]}`);
}

function configurarPantallaInicial() {
    actualizarElemento('h1', '¡Bienvenido al juego del Amigo Secreto!');
    actualizarElemento('h2', 'Introduce los nombres de tus amigos:');
}

function saludoInicial() {
    usuario = document.getElementById('amigo').value;
    actualizarElemento('h1', `¡Hola ${usuario}!<br>Bienvenido al Amigo Secreto`);
    limpiarInput();
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

// Ejecutar al inicio
configurarPantallaInicial();