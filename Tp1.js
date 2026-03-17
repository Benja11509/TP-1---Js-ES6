
function formatearNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function contarLetras(texto) {
  return texto.replace(/\s/g, "").length;
}

function maximo(a, b, c) {
  let mayor = a;
  if (b > mayor) mayor = b;
  if (c > mayor) mayor = c;
  return mayor;
}

function validarPassword(pass) {
  return pass.length >= 8 && /\d/.test(pass);
}

function sumarArray(arr) {
  let suma = 0;
  for (let n of arr) suma += n;
  return suma;
}

function mayorNumero(arr) {
  let mayor = arr[0];
  for (let n of arr) if (n > mayor) mayor = n;
  return mayor;
}

function obtenerPares(arr) {
  return arr.filter(n => n % 2 === 0);
}

/* =========================
   DATOS
========================= */

const usuario = {
  nombre: "Ana",
  edad: 20,
  activo: false
};

const productos = [
  { nombre: "Mouse", precio: 10 },
  { nombre: "Teclado", precio: 25 },
  { nombre: "Monitor", precio: 200 }
];

const usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Juan", edad: 25 },
  { nombre: "Pedro", edad: 30 }
];

/* =========================
   PARTE 3
========================= */

function descripcionUsuario(u) {
  return `${u.nombre} tiene ${u.edad} años`;
}

function activarUsuario(u) {
  u.activo = true;
}

function calcularTotal(productos) {
  return productos.reduce((acc, p) => acc + p.precio, 0);
}

/* =========================
   PARTE 4
========================= */

function obtenerNombres(usuarios) {
  return usuarios.map(u => u.nombre);
}

function obtenerMayores(usuarios) {
  return usuarios.filter(u => u.edad >= 18);
}

function sumarEdades(usuarios) {
  return usuarios.reduce((acc, u) => acc + u.edad, 0);
}

/* =========================
   PARTE 5
========================= */

const producto = { nombre: "Notebook", precio: 1000 };

const { nombre, precio } = producto;

const productoConStock = { ...producto, stock: 5 };

/* =========================
   PARTE 6
========================= */

function buscarProducto(productos, nombre) {
  return productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}

function productosCaros(productos) {
  return productos.filter(p => p.precio > 50);
}

function promedio(nums) {
  let suma = nums.reduce((acc, n) => acc + n, 0);
  return suma / nums.length;
}

/* =========================
   API
========================= */

let usuariosAPI = [
  { id: 1, nombre: "Ana", edad: 20 },
  { id: 2, nombre: "Juan", edad: 15 },
  { id: 3, nombre: "Pedro", edad: 30 }
];

function obtenerUsuarios() {
  return usuariosAPI;
}

function obtenerUsuarioPorId(id) {
  return usuariosAPI.find(u => u.id === id);
}

function crearUsuario(nombre, edad) {
  const nuevo = {
    id: usuariosAPI.length + 1,
    nombre,
    edad
  };
  usuariosAPI.push(nuevo);
}