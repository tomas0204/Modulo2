products = [ { id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 15 },
{ id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 0 },
{ id: 3, nombre: "Silla", precio: 150, categoria: "muebles", stock: 8 },
{ id: 4, nombre: "Monitor", precio: 300, categoria: "tecnologia", stock: 12 },
{ id: 5, nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 0 } ]

const conStock = products.filter((product) => {
  return product.stock > 0
});

console.log(conStock)

const nombresYPrecios = products.map((product) => {
  return { nombre: product.nombre, precio: product.precio }
});

console.log(nombresYPrecios)

const monitor = products.find((product) => {
  return product.nombre.startsWith("Monitor")
});

console.log(monitor);
