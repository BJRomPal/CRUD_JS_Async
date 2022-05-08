

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

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json());
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, 
  {method: "PUT",
  headers: {
    "Content-Type": "application/json", //header informa el tipo de archivo que se va a enviar en este caso un json
  },
  body: JSON.stringify({nombre, email})
  }
  ).then( respuesta => respuesta).catch(err => console.log(err))
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
};