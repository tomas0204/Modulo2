students = [ { id: 1, nombre: "Ana", edad: 20, promedio: 8.5, carrera: "Ingeniería" },
{ id: 2, nombre: "Carlos", edad: 22, promedio: 7.2, carrera: "Medicina" },
{ id: 3, nombre: "Chancho", edad: 2 , promedio: 9.1, carrera: "Ingeniería" },
{ id: 4, nombre: "Luis", edad: 21, promedio: 6.8, carrera: "Derecho" },
{ id: 5, nombre: "Sofía", edad: 20, promedio: 8.9, carrera: "Ingeniería" } ]

const promedioMayor = students.filter(function (student){
    return student.promedio > 8.0
})

console.log(promedioMayor);


const soloNombresYCarreras = students.map( function (student) {
    return {nombre: student.nombre, carrera: student.carrera}
})

console.log(soloNombresYCarreras);

const IngenierosMayoresA19 = students.filter((student) => {
    return student.carrera === "Ingeniería" && student.edad > 19
})

console.log(IngenierosMayoresA19);

const encontrado = students.find((student) => {
  return student.id === 3
});

console.log(encontrado);
