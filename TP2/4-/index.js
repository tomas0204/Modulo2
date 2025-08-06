let num
let suma
let input
suma = 0

while (true) {
    input = (prompt("Indica números para sumar el total."));

    if (input === null){
        document.writeln(`La suma total es: ${suma}`)
        break;
    }

    num = parseInt(input);

    if (isNaN(num)) {
        alert("Introduce un número válido");
        continue;
    }

    suma += num
}
