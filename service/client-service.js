

//abrir HTTP metodo que recibe dos parametros EL METODO y la URL donde queremos que actue

//CRUD - Metodos 
//Create - POST
//Read - GET
//Update -PUT o PATCH
//Delete - DELETE
const listaClientes = () => fetch("http://localhost:3000/perfil").then( respuesta => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", //la direccion de nuestra db.json
    {method: "POST", //POST porque queremos insertar un nuevo registro
    headers: {
      "Content-Type": "application/json" //esto no se que es
    }, //con json.stringify convertimos el objeto en una string
    body: JSON.stringify({nombre, email, id: uuid.v4() }) //body es lo que vamos a trasmitir.
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  } )
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente
};