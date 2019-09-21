import Registro from "./Registro.js";
import Inventario from "./Inventario.js";

class Main {
    constructor() {
        let registro = new Registro(
            document.querySelector("#inventario")
          );
      
          document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
      
            if(form.checkValidity() === true) {
              let codigo = document.querySelector("#codigo").value;
              let name = document.querySelector("#name").value;
              let precio = document.querySelector("#precio").value;
              let cantidad = document.querySelector("#cantidad").value;
              let descripcion = document.querySelector("#descripcion").value;
      
              let objInventario = {
                codigo: codigo,
                name: name,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion,
              };
      
              let inventario = new Inventario(objInventario);
              registro.addInventario(inventario);
            }
          });
        }
    }

let m = new Main();