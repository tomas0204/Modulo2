let nota

while (true) {
    nota = parseInt(prompt("Escriba una nota del 0 al 10, para determinar la calificación"));

    if (isNaN(nota)) {
        alert("Introduce un número válido");
        continue;
    }

    if (nota < 0 || nota > 10) {
        alert("Número erróneo");
        continue;
    }

    switch (true) {
        case (nota <= 2):
            alert("Muy deficiente");
            break;
        case (nota <= 4):
            alert("Insuficiente");
            break;
        case (nota <= 6):
            alert("Suficiente");
            break;
        case (nota === 7):
            alert("Bien");
            break;
        case (nota <= 9):
            alert("Notable");
            break;
        case (nota === 10):
            alert("Sobresaliente");
            break;
    }
}
