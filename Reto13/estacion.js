let mes 
let estacion

mes = parseInt(prompt("Escribe el mes correspondiente (en número)"))

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion = "Verano"
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Otoño"
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Invierno"
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Primavera"
        break;
    default:
        estacion = "Mes no válido"
}

document.writeln("La estación es: " + estacion)
