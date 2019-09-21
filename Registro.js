import Inventario from "./Inventario.js";
export default class Registro {
    constructor(tableInventario) {
        this._tableInventario = tableInventario;
        this._articulos = [];
        this._initTable();
    }

    _initTable() {
        let lsArticulos = JSON.parse(localStorage.getItem("articulos"));
    
        if (lsArticulos === null) {
          return;
        }
    
        lsArticulos.forEach((inventario, index) => {
          this._addToTable(new Inventario(inventario));
        })
    }
    
    addInventario(inventario) {
        if(this._findInventario(inventario.codigo) >= 0) {
          Swal.fire({
            type: "error",
            title: "Error",
            text: "El artículo ya está registrado"
          })
          return;
        }
    
        this._addToTable(inventario);
        localStorage.setItem("articulos", JSON.stringify(this._articulos));
        Swal.fire({
          type: "Success",
          title: "Correcto",
          text: "Artículo registrado con éxito",
        })
    }

    _addDeleteToRow(row, articulos) {
        let btnDelete = document.createElement("input");
        btnDelete.type="button";
        btnDelete.value = "Borrar";
        btnDelete.className = "btn btn-danger";
        btnDelete.addEventListener("click", () => {
        let inventario = new Inventario();
        inventario._deleteArticulos(row, articulos);
        });
        row.cells[6].innerHTML="";
        row.cells[6].appendChild(btnDelete);
    }

    
    _deleteArticulos(row, inventario) {
        Swal.fire({
          type: "question",
          title: "Quiere eliminar este contacto",
          text: inventario.codigo,
          showCancelButton: true,
          confirmButtonText:"Sí",
          cancelButtonText: "No"
        }).then(result => {
          if(result.value) {
            let pos = this._findInventario(inventario.name);
            this._articulos.splice(pos, 1);
            localStorage.setItem("articulos",JSON.stringify(this._articulo|s));
            row.remove();
          }
        });
      }

        _findInventario(codigo) {
        let result = -1;
        this._articulos.forEach((inventario, index) => {
          if(inventario.codigo === codigo) {
              result = index;
              return;
            }
          })
        
        return result;
    }

    _addToTable(inventario) {
        let row = this._tableInventario.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        
        cellCodigo.innerHTML = inventario.codigo;
        cellName.innerHTML = inventario.name;
        cellPrecio.innerHTML = inventario.precio;
        cellCantidad.innerHTML = inventario.cantidad;
        cellDescripcion.innerHTML = inventario.descripcion;
          
        let objInventario = {
            codigo: codigo,
            name: name,
            precio: precio,
            cantidad: cantidad,
            descripcion: descripcion,
          };
          this._articulos.push(objInventario);
          this._addDeleteToRow(row, inventario)
    }
}