// Lista de nombres y estado del sorteo
let amigos = [];
let sorteoRealizado = false;

// Expresión regular para validar nombres
const nombreRegex = /^[A-Za-z\s]{3,}$/;

// Referencias a elementos del DOM
const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para validar el nombre ingresado
function esNombreValido(nombre) {
    return nombreRegex.test(nombre.trim());
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    if (sorteoRealizado) {
        mostrarMensaje("El sorteo ya fue realizado. Reinicia la lista para agregar más amigos.");
        return;
    }

    const nombre = input.value.trim();
    if (!esNombreValido(nombre)) {
        mostrarMensaje("Nombre inválido. Debe contener solo letras y tener al menos 3 caracteres.");
        return;
    }

    amigos.push(nombre);
    actualizarListaNombres();
    input.value = "";
}

// Función para actualizar la lista en la interfaz
function actualizarListaNombres() {
    listaAmigos.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join('');
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensaje("No hay participantes en la lista.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>Tu amigo secreto es <strong>${amigos[randomIndex]}</strong></li>`;
    sorteoRealizado = true;
}

// Función para reiniciar la lista
function reiniciarLista() {
    amigos = [];
    actualizarListaNombres();
    resultado.innerHTML = "";
    sorteoRealizado = false;
}

// Función para mostrar mensajes sin usar alert
function mostrarMensaje(mensaje) {
    resultado.innerHTML = `<p style="color: red;">${mensaje}</p>`;
}
