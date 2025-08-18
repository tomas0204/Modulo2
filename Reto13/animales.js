
let animales = ["perro", "gato", "loro", "serpiente", "paloma"]



animales.unshift("burro") 
animales.push("caballo")    
animales.splice(2, 1)

console.log("Cantidad total: " + animales.length)
console.log(animales)
