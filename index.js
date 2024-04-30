// Ejercicio 1
const arrayVacio = [];

// Ejercicio 2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Ejercicio 3
const arrayNumerosPares = [0, 2, 4, 6, 8];

// Ejercicio 4
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// Ejercicio 5
function suma(a, b) {
    return a + b;
}

// Ejercicio 6
function potenciacion(a, b) {
    return Math.pow(a, b);
}

// Ejercicio 7
function separarPalabras(string) {
    return string.split(' ');
}

// Ejercicio 8
function repetirString(string, veces) {
    return string.repeat(veces);
}

// Ejercicio 9
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Ejercicio 10
function ordenarArray(array) {
    return array.slice().sort((a, b) => a - b);
}

// Ejercicio 11
function obtenerPares(array) {
    return array.filter(num => num % 2 === 0);
}

// Ejercicio 12
function pintarArray(array) {
    return `([${array.join(',')}])`;
}
const arrayEntrada = [0,1,2];
console.log(pintarArray(arrayEntrada));


// Ejercicio 13
function arrayMapi(array, func) {
    return array.map(func);
}

// Ejercicio 14
function eliminarDuplicados(array) {
    return [...new Set(array)];
}

// Ejercicio 15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// Ejercicio 16
const holaMundo = ['Hola', 'Mundo'];

// Ejercicio 17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// Ejercicio 18
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];// Ejercicio 19
function multiplicacion(a, b) {
    return a * b;
}

// Ejercicio 20
function division(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Ejercicio 21
function esPar(numero) {
    return numero % 2 === 0;
}

// Ejercicio 22
const arrayFunciones = [suma, resta, multiplicacion];

// Definición de funciones necesarias para el ejercicio 22
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}

// Ejercicio 19
function multiplicacion(a, b) {
    return a * b;
}

// Ejercicio 20
function division(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Ejercicio 21
function esPar(numero) {
    return numero % 2 === 0;
}

// Ejercicio 22
// Definición de funciones necesarias
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
// Creación del array con las funciones
const arrayFuncs = [suma, resta, multiplicacion];
// Ejemplo de uso
const resultadoSuma = arrayFuncs[0](4, 2); // Llama a la función suma: 4 + 2
const resultadoResta = arrayFuncs[1](4, 2); // Llama a la función resta: 4 - 2
const resultadoMultiplicacion = arrayFuncs[2](4, 2); // Llama a la función multiplicación: 4 * 2
console.log(resultadoSuma); // Output: 6
console.log(resultadoResta); // Output: 2
console.log(resultadoMultiplicacion); // Output: 8


// Ejercicio 23
function ordenarArray2(array) {
    return array.slice().sort((a, b) => b - a);
}

// Ejercicio 24
function obtenerImpares(array) {
    return array.filter(num => num % 2 !== 0);
}

// Ejercicio 25
function sumarArray(array) {
    return array.reduce((total, num) => total + num, 0);
}

// Ejercicio 26
function multiplicarArray(array) {
    return array.reduce((total, num) => total * num, 1);
}