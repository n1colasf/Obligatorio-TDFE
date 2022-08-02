//-- VARIABLES GLOBALES ------------------------------------------------------------------>
let enviosUsuario = [];
let totalCiudades = [];
let departamentos = [];
let monedas = [];
let transaccionesUsuario = [];

//-- INICIAR INFO ------------------------------------------------------------------------>
inicio();

function inicio() {
  cargar_deptos();
  cargar_ciudades();
}
//-- LOGIN ------------------------------------------------------------------------------->
function login(data) {
  sessionStorage.setItem("apiKey", data.apiKey);
  sessionStorage.setItem("usuario", JSON.stringify(data.id));
  cargar_monedas();
}

//BOTON LOGIN ------------------------------------------------------------>
document.getElementById("btn_login").onclick = function () {
  const usuario = document.getElementById("inp_usuario").value;
  const password = document.getElementById("inp_password").value;

  try {
    if (!usuario) {
      alert("Usuario requerido");
    }
    if (!password) {
      alert("Contraseña requerida");
    }
    const url = "https://crypto.develotion.com/login.php";

    sessionStorage.setItem("nombre", usuario);

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ usuario: usuario, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) =>
        respuesta.ok
          ? respuesta.json()
          : respuesta
              .text()
              .then((text) => Promise.reject(JSON.parse(text).error))
      )
      .then((data) => login(data));
    //.catch((mensaje) =>
  } catch (e) {
    //
  }
};

//BOTON REGISTRO ------------------------------>
document.getElementById("btn_registro").onclick = function () {
  const usuario = document.getElementById("inp_reg_usuario").value;
  const password = document.getElementById("inp_reg_password").value;
  const idDepartamento = document.getElementById("inp_reg_depto").value;
  const idCiudad = document.getElementById("inp_reg_ciudad").value;

  try {
    if (!usuario) {
      alert("Usuario requerido");
    }
    if (!password) {
      alert("Contraseña requerida");
    }
    if (!idDepartamento) {
      alert("Departamento requerido");
    }
    if (!idCiudad) {
      alert("Ciudad requerida");
    }
    const url = "https://crypto.develotion.com/usuarios.php";

    const datos = {
      usuario: usuario,
      password: password,
      idDepartamento: idDepartamento,
      idCiudad: idCiudad,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((respuesta) =>
      respuesta.ok
        ? respuesta.json()
        : respuesta
            .text()
            .then((text) => Promise.reject(JSON.parse(text).error))
    );
    //.then(data);
    //.catch((mensaje) =>
  } catch (e) {
    //
  }
};

//BOTON LISTAR TRANSACCIONES ------------------------------>
function transacciones_usuario() {
  let apiKey = sessionStorage.getItem("apiKey");
  let usuario = sessionStorage.getItem("usuario");

  const url = `https://crypto.develotion.com/transacciones.php?idUsuario=${usuario}`;
  fetch(url, {
    headers: {
      apikey: apiKey,
      "Content-Type": "application/json",
    },
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      transaccionesUsuario = data.transacciones;
      calcular_tot_inversion();
    })
    .catch((error) => {});
}

//CREAR LISTA TRANSACCIONES ------------------------------>
//Bug: los items de las transacciones no se muestran con el formato de tabla de bootstrap
function crear_listado_transacciones() {
  let nombre = document.getElementById("list_momb_user");
  let id = document.getElementById("list_id_user");

  id.innerHTML = `Id: ${sessionStorage.nombre}`;
  nombre.innerHTML = `Usuario: ${sessionStorage.nombre}`;

  let lista = document.getElementById("list_transacciones");
  lista.innerHTML = `<hr>
  <table class="table">
    <tr>
      <th scope="col">Operación</th>
      <th scope="col">Moneda</th>
      <th scope="col">Valor de moneda</th>
      <th scope="col">Cantidad</th>
    </tr>
  `;
  transaccionesUsuario.forEach(function (transaccion) {
    let operacion = "";
    if (transaccion.tipo_operacion == 1) {
      operacion = "Compra";
    } else {
      operacion = "Venta";
    }
    let item = "";
    let nombreMoneda = "";
    let valorActual = transaccion.valor_actual;
    let cantidad = transaccion.cantidad;

    monedas.forEach(function (moneda) {
      if (transaccion.moneda === moneda.id) {
        nombreMoneda = moneda.nombre;
      }
    });
    //Bug: aca! no muestra formato de tabla
    item += `<tr>
    <th scope="row">${operacion}</th>
    <td>${nombreMoneda}</td>
    <td>${valorActual}</td>
    <td>${cantidad}</td>
  </tr>`;

    lista.innerHTML += item;
  });
  lista.innerHTML += `</tbody></table>`;
}

//GUARDAR DEPARTAMENTOS ------------------------------>
function cargar_deptos() {
  const url = `https://crypto.develotion.com/departamentos.php`;
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      departamentos = data.departamentos;
      select_departamentos();
    });
}

//GUARDAR CIUDADES ------------------------------>
function cargar_ciudades() {
  const url = `https://crypto.develotion.com/ciudades.php`;
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      totalCiudades = data.ciudades;
    });
}

//GUARDAR CRIPTOMONEDAS ------------------------------>
function cargar_monedas() {
  const url = `https://crypto.develotion.com/monedas.php`;
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      apikey: sessionStorage.apiKey,
    },
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      monedas = data.monedas;
      select_monedas();
    });
}

//CREAR SELECT DEPARTAMENTOS ------------------------------>
function select_departamentos() {
  let select_deptos = document.getElementById("inp_reg_depto");
  let item = "";
  departamentos.forEach(function (departamento) {
    item = `<option value="${departamento.id}">${departamento.nombre}</option>`;
    select_deptos.innerHTML += item;
  });
}

//CREAR SELECT CIUDADES ------------------------------>
function select_ciudades() {
  let select_ciudades = document.getElementById("inp_reg_ciudad");
  let select_depto = document.getElementById("inp_reg_depto").value;
  select_ciudades.innerHTML = `<option value="" selected disabled hidden>Seleccione ciudad</option>`;

  let item = "";
  totalCiudades.forEach(function (ciudad) {
    if (ciudad.id_departamento == select_depto) {
      item = `<option value="${ciudad.id}">${ciudad.nombre}</option>`;
      select_ciudades.innerHTML += item;
    }
  });
}

//CREAR SELECT MONEDAS ------------------------------>
function select_monedas() {
  let select_monedas = document.getElementById("inp_trans_moneda");
  let item = "";
  monedas.forEach(function (moneda) {
    item = `<option value="${moneda.id}">${moneda.nombre}</option>`;
    select_monedas.innerHTML += item;
  });
}

//MOSTRAR VALOR MONEDA SELECCIONADA ------------------------------>
function mostrtar_monto() {
  let select_moneda = document.getElementById("inp_trans_moneda").value;
  let valor = document.getElementById("inp_trans_valor");
  let valoraux = 0;

  monedas.forEach(function (moneda) {
    if (moneda.id == select_moneda) {
      valor.innerText = `Valor: $` + ` ` + moneda.cotizacion;
      valoraux = moneda.cotizacion;
    }
  });
  let monto_transaccion = document.getElementById("inp_trans_total").value;
  let total = document.getElementById("inp_trans_tot");
  total.innerHTML = "Total: $ " + valoraux * Number(monto_transaccion);
}

//MOSTRAR TOTAL MONEDA TRANSACCION ------------------------------>
function mostrar_total() {
  let select_moneda = document.getElementById("inp_trans_moneda").value;
  let valor = 0;

  monedas.forEach(function (moneda) {
    if (moneda.id == select_moneda) {
      valor = moneda.cotizacion;
    }
  });
  let total = document.getElementById("inp_trans_tot");
  total.innerHTML =
    "Total: $ " +
    valor * Number(document.getElementById("inp_trans_total").value);
}


function calcular_tot_inversion() {
  let suma = 0;
  transaccionesUsuario.forEach(function (transaccion) {
    if (transaccion.tipo_operacion === 1) {
      suma += transaccion.cantidad * transaccion.valor_actual;
    } else {
      suma -= transaccion.cantidad * transaccion.valor_actual;
    }
  });
  document.getElementById("tot-trans-label").innerHTML = "Total: ";
  document.getElementById("tot-trans").innerHTML = "$ " + suma;
  if (suma > 0) {
    document.getElementById(
      "tot-mensaje"
    ).innerHTML = `<p class="text-success">¡Muy buenas inversiones! ¡Sigue así!</p>`;
  } else {
    document.getElementById(
      "tot-mensaje"
    ).innerHTML = `<p class="text-danger">¡No desesperes! ¡Ya casi lo tienes!</p>`;
  }
}

//AUTOLOGIN - FUNCION EXTRA SOLO PARA MOSTRAR VALORES DE MONEDA CON APIKEY Y LISTA TRANSFERENCIAS------------>
function autologin() {
  const usuario = "crypto";
  const password = "crypto";
  const url = "https://crypto.develotion.com/login.php";

  sessionStorage.setItem("nombre", usuario);

  fetch(url, {
    method: "POST",
    body: JSON.stringify({ usuario: usuario, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((respuesta) =>
      respuesta.ok
        ? respuesta.json()
        : respuesta
            .text()
            .then((text) => Promise.reject(JSON.parse(text).error))
    )
    .then((data) => login(data));
  //.catch((mensaje) =>
}
