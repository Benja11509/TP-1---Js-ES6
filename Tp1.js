let usuariosDesafio = [
    { id: 1, nombre: "Ana", edad: 20 },
    { id: 2, nombre: "Juan", edad: 15 },
    { id: 3, nombre: "Pedro", edad: 30 }
];

// Ejercicio 1
function formatearNombre() {
    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        document.getElementById("EJ1").textContent = "Ingresá un nombre";
        return;
    }

    let nombreFormateado = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
    document.getElementById("EJ1").textContent = nombreFormateado;
}

// Ejercicio 2
function contarLetras() {
    let texto = document.getElementById("texto").value;
    document.getElementById("EJ2").textContent = texto.length;
}

// Ejercicio 3
function maximo() {
    let a = parseFloat(document.getElementById("numeroA").value);
    let b = parseFloat(document.getElementById("numeroB").value);
    let c = parseFloat(document.getElementById("numeroC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("EJ3").textContent = "Ingresá 3 números válidos";
        return;
    }

    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }

    if (c > mayor) {
        mayor = c;
    }

    document.getElementById("EJ3").textContent = mayor;
}

// Ejercicio 4
function validarPassword() {
    let contieneNumero = false;
    let password = document.getElementById("password").value;

    for (let caracter of password) {
        if (!isNaN(caracter) && caracter !== " ") {
            contieneNumero = true;
        }
    }

    if (password.length >= 8 && contieneNumero) {
        document.getElementById("EJ4").textContent = "Contraseña válida";
    } else {
        document.getElementById("EJ4").textContent = "Contraseña inválida";
    }
}

// Ejercicio 5
function sumarArray() {
    let texto = document.getElementById("arraySuma").value;
    let numeros = texto.split(",");
    let suma = 0;

    for (let numero of numeros) {
        suma += parseFloat(numero);
    }

    document.getElementById("EJ5").textContent = suma;
}

// Ejercicio 6
function mayorNumero() {
    let texto = document.getElementById("arrayMayor").value;
    let numeros = texto.split(",");

    if (texto.trim() === "") {
        document.getElementById("EJ6").textContent = "Ingresá números";
        return;
    }

    let mayor = parseFloat(numeros[0]);

    for (let numero of numeros) {
        if (parseFloat(numero) > mayor) {
            mayor = parseFloat(numero);
        }
    }

    document.getElementById("EJ6").textContent = mayor;
}

// Ejercicio 7
function obtenerPares() {
    let texto = document.getElementById("arrayPares").value;
    let numeros = texto.split(",");
    let pares = [];

    for (let numero of numeros) {
        let numeroConvertido = parseInt(numero);
        if (numeroConvertido % 2 === 0) {
            pares.push(numeroConvertido);
        }
    }

    document.getElementById("EJ7").textContent = pares.join(" ");
}

// Ejercicio 8
function descripcionUsuario() {
    const usuario = {
        nombre: "Ana",
        edad: 20,
        activo: false
    };

    document.getElementById("EJ8").textContent = `${usuario.nombre} tiene ${usuario.edad} años`;
}

// Ejercicio 9
function activarUsuario() {
    const usuario = {
        nombre: "Ana",
        edad: 20,
        activo: false
    };

    usuario.activo = true;

    if (usuario.activo) {
        document.getElementById("EJ9").textContent = `${usuario.nombre} tiene ${usuario.edad} años y está activo`;
    }
}

// Ejercicio 10
function precioTotal() {
    const productos = [
        { nombre: "Mouse", precio: 10 },
        { nombre: "Teclado", precio: 25 },
        { nombre: "Monitor", precio: 200 }
    ];

    let suma = 0;

    for (let i = 0; i < productos.length; i++) {
        suma += productos[i].precio;
    }

    document.getElementById("EJ10").textContent = `El precio total es: ${suma}`;
}

// Ejercicio 11
function ejercicioMap() {
    const usuarios = [
        { nombre: "Ana", edad: 17 },
        { nombre: "Juan", edad: 25 },
        { nombre: "Pedro", edad: 30 }
    ];

    let nombres = "";

    for (let i = 0; i < usuarios.length; i++) {
        nombres += usuarios[i].nombre + " ";
    }

    document.getElementById("EJ11").textContent = nombres.trim();
}

// Ejercicio 12
function ejercicioFilter() {
    const usuarios = [
        { nombre: "Ana", edad: 17 },
        { nombre: "Juan", edad: 25 },
        { nombre: "Pedro", edad: 30 }
    ];

    let mayores = "";

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad >= 18) {
            mayores += usuarios[i].nombre + " ";
        }
    }

    document.getElementById("EJ12").textContent = mayores.trim();
}

// Ejercicio 13
function ejercicioReduce() {
    const usuarios = [
        { nombre: "Ana", edad: 17 },
        { nombre: "Juan", edad: 25 },
        { nombre: "Pedro", edad: 30 }
    ];

    let sumaEdades = 0;

    for (let i = 0; i < usuarios.length; i++) {
        sumaEdades += usuarios[i].edad;
    }

    document.getElementById("EJ13").textContent = sumaEdades;
}

// Ejercicio 14
function destructuringProducto() {
    const producto = {
        nombre: "Notebook",
        precio: 1000
    };

    const { nombre, precio } = producto;

    document.getElementById("EJ14").textContent = `El precio de ${nombre} es: ${precio}`;
}

// Ejercicio 15
function spreadOperator() {
    const producto = {
        nombre: "Notebook",
        precio: 1000
    };

    const nuevoProducto = {
        ...producto,
        stock: 5
    };

    document.getElementById("EJ15").textContent = `El stock es: ${nuevoProducto.stock}`;
}

// Ejercicio 16
function buscarProducto() {
    let nombreBuscado = document.getElementById("nombreProducto").value.trim().toLowerCase();

    const productos = [
        { nombre: "Notebook", precio: 1000 },
        { nombre: "Mouse", precio: 25 },
        { nombre: "Teclado", precio: 45 },
        { nombre: "Monitor", precio: 300 },
        { nombre: "Auriculares", precio: 80 }
    ];

    let productoEncontrado = null;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombreBuscado) {
            productoEncontrado = productos[i];
        }
    }

    if (productoEncontrado === null) {
        document.getElementById("EJ16").textContent = "Producto no encontrado";
    } else {
        document.getElementById("EJ16").textContent = `El producto ${productoEncontrado.nombre} tiene un precio de ${productoEncontrado.precio}`;
    }
}

// Ejercicio 17
function productosCaros() {
    const productos = [
        { nombre: "Chocolate", precio: 70 },
        { nombre: "Chicle", precio: 25 },
        { nombre: "Caramelo", precio: 10 },
        { nombre: "Chupetín", precio: 50 },
        { nombre: "Gaseosa", precio: 90 }
    ];

    let resultado = "";

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].precio >= 50) {
            resultado += productos[i].nombre + " ";
        }
    }

    document.getElementById("EJ17").textContent = resultado.trim();
}

// Ejercicio 18
function promedio() {
    let texto = document.getElementById("arrayPromedio").value;
    let numeros = texto.split(",");

    if (texto.trim() === "") {
        document.getElementById("EJ18").textContent = "Ingresá números";
        return;
    }

    let suma = 0;
    let cantidad = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += parseFloat(numeros[i]);
        cantidad++;
    }

    document.getElementById("EJ18").textContent = `El promedio es: ${suma / cantidad}`;
}

// Desafío final
function obtenerUsuarios() {
    let mensaje = "";

    for (let i = 0; i < usuariosDesafio.length; i++) {
        mensaje += `ID: ${usuariosDesafio[i].id} - Nombre: ${usuariosDesafio[i].nombre} - Edad: ${usuariosDesafio[i].edad}`;

        if (i !== usuariosDesafio.length - 1) {
            mensaje += " || ";
        }
    }

    document.getElementById("EJDESAFIO").textContent = mensaje;
}

function mostrarID() {
    document.getElementById("inputIdUsuario").style.display = "inline-block";
    document.getElementById("botonMostrarId").style.display = "inline-block";
}

function obtenerUsuarioPorId() {
    let idBuscado = parseInt(document.getElementById("inputIdUsuario").value);
    let usuarioEncontrado = null;

    for (let i = 0; i < usuariosDesafio.length; i++) {
        if (usuariosDesafio[i].id === idBuscado) {
            usuarioEncontrado = usuariosDesafio[i];
        }
    }

    if (usuarioEncontrado === null) {
        document.getElementById("EJDESAFIO").textContent = "Usuario no encontrado";
    } else {
        document.getElementById("EJDESAFIO").textContent = `El ID ${idBuscado} pertenece a ${usuarioEncontrado.nombre}`;
    }
}

function obtenerMayores() {
    let mayores = [];

    for (let i = 0; i < usuariosDesafio.length; i++) {
        if (usuariosDesafio[i].edad >= 18) {
            mayores.push(usuariosDesafio[i].nombre);
        }
    }

    document.getElementById("EJDESAFIO").textContent = mayores.join(" ");
}

function mostrarCrear() {
    document.getElementById("inputNombreUsuario").style.display = "inline-block";
    document.getElementById("inputEdadUsuario").style.display = "inline-block";
    document.getElementById("botonCrearUsuario").style.display = "inline-block";
}

function crearUsuario() {
    let nombre = document.getElementById("inputNombreUsuario").value.trim();
    let edad = parseInt(document.getElementById("inputEdadUsuario").value);

    if (nombre === "" || isNaN(edad)) {
        document.getElementById("EJDESAFIO").textContent = "Completá nombre y edad correctamente";
        return;
    }

    const nuevoUsuario = {
        id: usuariosDesafio.length + 1,
        nombre: nombre,
        edad: edad
    };

    usuariosDesafio.push(nuevoUsuario);

    document.getElementById("EJDESAFIO").textContent = `ID: ${nuevoUsuario.id} - Nombre: ${nuevoUsuario.nombre} - Edad: ${nuevoUsuario.edad}`;
}

function showEjercicio(idSeleccionado) {
    const lista = ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10", "e11", "e12", "e13", "e14", "e15", "e16", "e17", "e18", "de"];

    for (let i = 0; i < lista.length; i++) {
        let seccion = document.getElementById(lista[i]);

        if (lista[i] === idSeleccionado) {
            seccion.style.display = "block";
        } else {
            seccion.style.display = "none";
        }
    }
}