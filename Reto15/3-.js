tasks = [ { id: 1, descripcion: "Hacer ejercicio", completada: true, prioridad: "alta" }, 
{ id: 2, descripcion: "Estudiar JavaScript", completada: false, prioridad: "alta" }, 
{ id: 3, descripcion: "Comprar víveres", completada: false, prioridad: "media" }, 
{ id: 4, descripcion: "Llamar al médico", completada: true, prioridad: "baja" }, 
{ id: 5, descripcion: "Limpiar la casa", completada: false, prioridad: "media" } ]

const tareasPendientes = tasks.filter((task) => {
    return task.completada === false
})

console.log(tareasPendientes);

const descripciones = tasks.map(function (task) {
    return {descripcion: task.descripcion}
})

console.log(descripciones);

const tareasDeAltaPrioridad = tasks.filter((task) => {
    return task.prioridad === "alta" && task.completada === false
})

console.log(tareasDeAltaPrioridad);

const js = tasks.find((task) =>{
    return task.descripcion.endsWith("t")
})

console.log(js);

