const CarritoCompra = require("./index");

describe("CarritoCompra", () => {
  test("constructor inicializa un carrito vacío", () => {
    const carrito = new CarritoCompra();
    expect(carrito.productos.length).toBe(0);
  });

  test("agregarProducto agrega un producto al carrito.", () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
    expect(carrito.productos.length).toBe(1);
  });

  test("calcularTotal calcula correctamente el total de la compra", () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
    carrito.agregarProducto({ nombre: "Producto2", precio: 20 });
    expect(carrito.calcularTotal()).toBe(30);
  });

  test("aplicarDescuento aplica correctamente el descuento al total de la compra", () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Producto1", precio: 10 });
    carrito.agregarProducto({ nombre: "Producto2", precio: 20 });
    expect(carrito.aplicarDescuento(10)).toBe(27); // 10% de descuento
  });
});
