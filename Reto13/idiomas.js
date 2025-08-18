let idioma

idioma = prompt("Escriba el idioma en el cual quiera saludar.").toLowerCase()

switch (idioma) {
    case idioma = "español":
        document.writeln("Hola!")
        break;
    case "ingles":
        document.writeln("Hello!")
        break;
    case "frances":
        document.writeln("Bonjour!")
        break;
    case "aleman":
        document.writeln("Hallo!")
        break;
    case "italiano":
        document.writeln("Ciao!")
        break;
    default:
        document.writeln("Idioma no reconocido")
}

document.writeln("La estación es: " + estacion)
