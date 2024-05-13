// Función para determinar si un número es positivo, negativo o cero
function determinarSigno(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

// Función para calcular el mayor de 3 números
function calcularMayor(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

// Función para determinar si un número es par o impar
function determinarParImpar(numero) {
    return numero % 2 === 0 ? "par" : "impar";
}

// Función para mezclar colores primarios
function mezclarColores(color1, color2) {
    if ((color1 === "azul" && color2 === "amarillo") || (color1 === "amarillo" && color2 === "azul")) {
        return "verde";
    } else if ((color1 === "azul" && color2 === "rojo") || (color1 === "rojo" && color2 === "azul")) {
        return "morado";
    } else if ((color1 === "rojo" && color2 === "amarillo") || (color1 === "amarillo" && color2 === "rojo")) {
        return "naranja";
    } else {
        return "Error: Combinación de colores inválida.";
    }
}

// Función para determinar el nombre del mes
function nombreMes(numero) {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    if (numero >= 1 && numero <= 12) {
        return meses[numero - 1];
    } else {
        return "Número de mes inválido.";
    }
}

// Función para determinar el tipo de vehículo
function tipoVehiculo(categoria) {
    const categorias = { "Moto": "Motocicleta", "Auto": "Automóvil", "Camion": "Camión", "Bicicleta": "Bicicleta" };
    return categorias[categoria] || "Categoría de vehículo no reconocida.";
}

// Función principal para mostrar el menú y ejecutar las funciones según la opción seleccionada
function main() {
    while (true) {
        console.log("Seleccione una opción:");
        console.log("1. Determinar si un número es positivo, negativo o cero.");
        console.log("2. Calcular el mayor de 3 números.");
        console.log("3. Calcular el factorial de un número.");
        console.log("4. Determinar si un número es par o impar.");
        console.log("5. Mezclar colores primarios.");
        console.log("6. Determinar nombre del mes.");
        console.log("7. Determinar tipo de vehículo.");

        let opcion = parseInt(prompt("Ingrese el número de la opción deseada: "));

        switch (opcion) {
            case 1:
                let numero1 = parseFloat(prompt("Ingrese un número: "));
                console.log("El número es", determinarSigno(numero1));
                break;
            case 2:
                let num1 = parseFloat(prompt("Ingrese el primer número: "));
                let num2 = parseFloat(prompt("Ingrese el segundo número: "));
                let num3 = parseFloat(prompt("Ingrese el tercer número: "));
                console.log("El mayor es:", calcularMayor(num1, num2, num3));
                break;
            case 3:
                let numero2 = parseInt(prompt("Ingrese un número entero: "));
                console.log("El factorial es:", calcularFactorial(numero2));
                break;
            case 4:
                let numero3 = parseInt(prompt("Ingrese un número entero: "));
                console.log("El número es", determinarParImpar(numero3));
                break;
            case 5:
                let color1 = prompt("Ingrese el primer color: ").toLowerCase();
                let color2 = prompt("Ingrese el segundo color: ").toLowerCase();
                console.log("El color resultante es:", mezclarColores(color1, color2));
                break;
            case 6:
                let numeroMes = parseInt(prompt("Ingrese el número de mes: "));
                console.log("El mes es:", nombreMes(numeroMes));
                break;
            case 7:
                let categoria = prompt("Ingrese la categoría del vehículo: ").charAt(0).toUpperCase() + prompt("Ingrese el resto de la categoría: ").toLowerCase().slice(1);
                console.log("El tipo de vehículo es:", tipoVehiculo(categoria));
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }

        let continuar = prompt("¿Desea continuar? (s/n): ");
        if (continuar.toLowerCase() !== 's') {
            break;
        }
    }
}

// Ejecutar la función principal
main();
