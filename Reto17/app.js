let num = 0

const tiempo = function actualizarReloj() {
    const ahora = new Date()
    let horas = String(ahora.getHours()).padStart(2, '0')
    let minutos = String(ahora.getMinutes()).padStart(2, '0')
    let segundos = String(ahora.getSeconds()).padStart(2, '0')

    document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`
}

class Tareas {
    constructor() {
        this.tareas = []
    }

    validarTarea(tarea) {
        document.getElementById("error").textContent = ""

        if (tarea === "") {
            document.getElementById("error").textContent = "Debes ingresar una tarea"
            return false
        }

        if (/[@#$%^&*]/.test(tarea)) {
            document.getElementById("error").textContent = "No se permiten caracteres especiales"
            return false
        }

        if (this.tareas.includes(tarea)) {
            document.getElementById("error").textContent = "La tarea ya existe"
            return false
        }

        return true
    }

    crearCard(tarea) {
        const divcol = document.createElement("div")
        const divcard = document.createElement("div")
        const divcardBody = document.createElement("div")
        const h5 = document.createElement("h5")
        const p = document.createElement("p")
        const button = document.createElement("button")
        const id = document.createElement("p")

        divcol.className = ""
        divcard.className = "card h-100"
        divcardBody.className = "card-body"

        h5.classList.add("card-title")
        h5.textContent = "Tarea"

        p.className = "card-text"
        p.textContent = tarea

        button.textContent = "Borrar Tarea"
        button.className = "btn btn-danger"
        button.id = "borrarTarea"

        num = num + 1
        id.textContent = "id: " + num

        divcardBody.appendChild(h5)
        divcardBody.appendChild(p)
        divcard.appendChild(divcardBody)
        divcol.appendChild(divcard)
        divcardBody.appendChild(id)
        divcardBody.appendChild(button)
        document.getElementById("tareasContainer").appendChild(divcol)
    }

    borrarTarea() {
        const botones = document.querySelectorAll(".btn-danger")
        botones.forEach(boton => {
            boton.addEventListener("click", (e) => {
                const card = e.target.closest(".card")                       // 1 encontrar la card
                const textoTarea = card.querySelector(".card-text").textContent // 2 obtener el texto
                card.remove()                                               // 3 eliminar la card del DOM

                // 4 eliminar del array interno
                this.tareas = this.tareas.filter(t => t !== textoTarea)    
                console.log(this.tareas)      
            })
        })
    }

    agregarTarea(e) {
        e.preventDefault()
        const nuevaTarea = document.getElementById("tarea").value.trim()

        if (this.validarTarea(nuevaTarea) === false) {
            return
        }

        this.crearCard(nuevaTarea)
        this.tareas.push(nuevaTarea)
        this.borrarTarea()
        console.log(this.tareas)

    }

}

const misTareas = new Tareas()
document.getElementById("formTareas").addEventListener("submit", e => misTareas.agregarTarea(e))
tiempo();
setInterval(tiempo, 1000);


