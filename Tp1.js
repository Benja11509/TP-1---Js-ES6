function formatearNombre(nombre) {
    let primeraLetra = nombre[0].toUpperCase();
    let resto = nombre.substring(1).toLowerCase();
    return primeraLetra + resto;
}
function contarLetras(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            contador++;
        }
    }

    return contador;
}
function maximo(a, b, c) {
    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }
    if (c > mayor) {
        mayor = c;
    }

    return mayor;
}
function validarPassword(password) {
    let tieneNumero = false;

    if (password.length < 8) {
        return false;
    }

    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i]) && password[i] !== " ") {
            tieneNumero = true;
        }
    }

    return tieneNumero;
}
function sumarArray(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}
function mayorNumero(numeros) {
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}
function obtenerPares(numeros) {
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}
const usuario = {
  nombre: "Ana",
  edad: 20,
  activo: true
};

function descripcionUsuario(usuario) {
  return `${usuario.nombre} tiene ${usuario.edad} anios`;
}
function activarUsuario(usuario) {
  usuario.activo = true;
}
activarUsuario(usuario);

const productos = [ 
{nombre:"Mouse", precio:10},
{nombre:"Teclado", precio:25},
{nombre:"Monitor", precio:200}
]
function calcularTotal(productos) {
  let total = 0;

  for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio;
  }

  return total;
}
const usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Juan", edad: 25 },
  { nombre: "Pedro", edad: 30 }
];
function obtenerNombres(usuarios) {
  return usuarios.map(usuario => usuario.nombre);
}

function obtenerMayores(usuarios) {
  return usuarios.filter(usuario => usuario.edad >= 18);
}
document.getElementById("activarUsuario").textContent =
"Usuario activo: " + usuario.activo;
document.getElementById("activarUsuario").textContent =
"Usuario activo: " + usuario.activo;
console.log(descripcionUsuario(usuario));

document.getElementById("nombre1").textContent =
formatearNombre("JUAN");

document.getElementById("nombre2").textContent =
formatearNombre("mARIA");

document.getElementById("letras").textContent = 
"Letras:  " + contarLetras("que mandan!!");


document.getElementById("maximo").textContent =
"El numero mayor es: " + maximo(10, 25, 7);

document.getElementById("password").textContent =
"Password valida: " + validarPassword("CampusORt123");

document.getElementById("sumaArray").textContent =
"Suma del array: " + sumarArray([1,8,5]);

document.getElementById("mayorArray").textContent =
"Mayor numero del array: " + mayorNumero([4,7,1,20,3]);

document.getElementById("pares").textContent =
"Numeros pares: " + obtenerPares([1,2,3,4,5,6,7,8,9,10]);

document.getElementById("descripcionUsuario").textContent =
descripcionUsuario(usuario);

document.getElementById("activarUsuario").textContent =
"Usuario activo: " + usuario.activo;

document.getElementById("totalProductos").textContent =
"Precio total: " + calcularTotal(productos);

document.getElementById("nombres").textContent =
"Nombres: " + obtenerNombres(usuarios);

document.getElementById("mayores").textContent =
"Usuarios mayores: " + JSON.stringify(obtenerMayores(usuarios));