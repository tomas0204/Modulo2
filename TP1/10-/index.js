let num

num = parseInt(prompt("Escribí un número para determinar si es divisible por 2, 3, 5 o 7"))

switch (true){
    case (num % 2 === 0):
        document.writeln(`El número ${num} es divisible por 2`)
        break
    case (num % 3 === 0):
        document.writeln(`El número ${num} es divisible por 3`)
        break
    case (num % 5 === 0):
        document.writeln(`El número ${num} es divisible por 5`)
        break
    case (num % 7 === 0):
        document.writeln(`El número ${num} es divisible por 7`)
        break
    case(isNaN(num)):
        document.writeln(`Pusiste un dato incorrecto`)
        break
    default:
        document.writeln(`El número ${num} no es divisible por 2, 3, 5 ni 7`);
}