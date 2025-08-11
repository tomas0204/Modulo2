const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        while (true) {
            let input = prompt("Pon tu número de DNI (0 - 99999999). Pulsa Cancelar para salir");

            if (input === null) {
                break;
            }

            let numero = parseInt(input);

            if (isNaN(numero) || numero < 0 || numero > 99999999) {
                alert("El valor introducido no es válido. Debe ser un número entre 0 y 99999999.");
                continue;
            }

            let resto = numero % 23;
            let letra = letras[resto];

            alert(`El DNI ${numero} tiene la letra: ${letra}`);
        }