# 🎁 Amigo Secreto

Un sencillo juego de "Amigo Secreto" que permite agregar nombres de amigos y realizar un sorteo aleatorio para seleccionar un amigo secreto.

## 📌 Funcionalidades

- ✅ **Agregar amigos**: Los participantes pueden ingresar su nombre para formar parte del sorteo.
- 🎲 **Sorteo aleatorio**: Una vez agregados los nombres, el sistema seleccionará un amigo secreto al azar.
- 🔄 **Reiniciar la lista**: Se puede reiniciar el sorteo en cualquier momento, eliminando todos los nombres.
- ⚠️ **Validaciones**: Solo se aceptan nombres con letras y al menos 3 caracteres. Además, no se puede agregar nombres después de realizar el sorteo.

---

## 🚀 Instalación y Uso

### 1️⃣ Clonar el repositorio

```sh
  git clone https://github.com/Rosmel-ABC/amigo-secreto.git
  cd amigo-secreto
```

### 2️⃣ Abrir el archivo en un navegador

Solo necesitas abrir el archivo `index.html` en tu navegador favorito.

---

## 📷 Capturas de Pantalla

### 🎯 Interfaz inicial
![image](https://github.com/user-attachments/assets/215a9e0c-5ee7-41a0-8044-9dd86b2511f5)


### 📝 Agregando amigos

![image](https://github.com/user-attachments/assets/725bdcae-fbe6-420b-b920-ed3f7a5c0a12)


### 🎲 Realizando el sorteo

![image](https://github.com/user-attachments/assets/ebe09fb6-5bca-45be-a172-6d22bdc6953b)


---

## 🛠️ Tecnologías Usadas

- HTML
- CSS
- JavaScript

---

## 📜 Código Principal

Aquí un fragmento del código JavaScript que permite realizar el sorteo:

```js
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensaje("No hay participantes en la lista.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>Tu amigo secreto es <strong>${amigos[randomIndex]}</strong></li>`;
    sorteoRealizado = true;
}
```

---

## 👥 Contribuciones

Si deseas mejorar este proyecto, ¡siéntete libre de hacer un `fork` y enviar un `pull request`!

1. Haz un `fork` del repositorio
2. Crea una nueva rama (`git checkout -b feature-nueva-funcion`)
3. Realiza tus mejoras y haz `commit` (`git commit -m 'Añadir nueva función'`)
4. Sube los cambios (`git push origin feature-nueva-funcion`)
5. Abre un `pull request`

---

