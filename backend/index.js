console.log("Carrito de compras..");

// Template string: Alternativa a la concatenación
// Permite incrustar un valor dentro de un string
const nombreProducto = "Lenovo V4";
console.log(`El producto es: ${nombreProducto}`);

const precioProducto = 23;
const precioProductostr = "23";

console.log(precioProducto);
console.log(precioProductostr);

console.log(precioProducto == precioProductostr);

// Objeto Producto: Objeto literal
const producto1 = {
    nombre: "Lenovo Thinkpad",
    color: "Red",
    modelo: "IU643",
    description: "laptop para trabajo liviano",
    precio: 2340000.89,
    getmodelo: function() {
        console.log(this.modelo);
    }
};

// Invocar método getmodelo
producto1.getmodelo();

// Sin desestructuración
const nombresito = producto1.nombre;
console.log(nombresito);

// Con desestructuración
const { description, precio } = producto1;
console.log(description, precio);

// Constructor de objeto
const Producto = function(nombre, color, precio) {
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;
};

// Crear instancia de Producto
const p1 = new Producto("Lapiz HB Berol", "Azul", 500);
console.log(p1);
