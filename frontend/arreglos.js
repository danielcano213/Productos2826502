// Definir un arreglo de nombres de productos
const nombres = ["Lapiz HB", "Resaltador", "Borrador de nata"];
console.log(nombres); // Estos son los arreglos de mi carpeta backend

// Arreglo de nombres de productos
// Arreglar elementos del arreglo
nombres[3] = "Micropunta";
console.table(nombres);
console.log(nombres[1]);

// Agregar un elemento al final
nombres.push("Corrector");

// Agregar al inicio
nombres.unshift("Borrador miga de pan");
console.table(nombres);

// Eliminar elemento de un arreglo
delete nombres[3];
console.table(nombres);

// Eliminar elementos del final
nombres.pop();
console.table(nombres);

// Eliminar elementos del principio
nombres.shift();
console.table(nombres);

// Corregir el bucle for para recorrer correctamente los elementos del arreglo
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// Operador Spread con arreglos
const nombres2 = [
    "Transportador",
    "Regla 30 cm"
];
const productos = [...nombres, ...nombres2];
console.table(productos);

