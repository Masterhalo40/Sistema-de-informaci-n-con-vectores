export default class Inventario {
    constructor(inventario) {
       this._codigo = inventario.codigo;
       this._name = inventario.name.toUpperCase();
       this._precio = inventario.precio;
       this._cantidad = inventario.cantidad;
       this._descripcion = inventario.descripcion;
    }
  
    get codigo() {
      return this._codigo;
    }
  
    get name() {
      return this._name;
    }

    get precio() {
        return this._precio;
    }

    get cantidad() {
        return this._cantidad;
    }

    get descripcion() {
        return this._descripcion;
    }
}
