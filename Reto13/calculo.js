let IMC
let peso
let altura
let resultado

resultado = ["Peso bajo", "Peso normal", "Sobrepeso"]

peso = prompt("Ponga su peso en kg")
altura = prompt("Ponga su altura en m")
IMC = peso / (altura ** 2)

if (IMC < 18.5) {
    document.writeln(resultado[0]);
} else if (IMC >= 18.5 && IMC <= 24.99) {
    document.writeln(resultado[1]);
} else {
    document.writeln(resultado[2]);
}