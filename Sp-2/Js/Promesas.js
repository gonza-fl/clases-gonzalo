const empleados = [
  {
    id: 1,
    nombre: 'Gonzalo',
  },
  {
    id: 2,
    nombre: 'Camila',
  },
  {
    id: 3,
    nombre: 'Nadia',
  },
];
const salarios = [
  {
    id: 1,
    empleado_id: 1,
    salario: 1000,
  },
  {
    id: 2,
    empleado_id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  const promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    if (empleado) {
      resolve(empleado);
    } else {
      reject({ status: 400, message: `No existe el empleado con id: ${id}` });
    }
  });
  return promesa;
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.empleado_id === id)?.salario;
    if (salario) {
      resolve(salario);
    } else {
      reject({
        status: 404,
        message: `El salario para el empleado con id: ${id} no está registrado`,
      });
    }
  });
};

let nombreEmpleado;
const id = 2;

getEmpleado(id)
  .then((empleado) => {
    nombreEmpleado = empleado;
    return getSalario(id);
  })
  .then((salario) => {
    console.log(`El salario de ${nombreEmpleado} es de: ${salario}`);
  })
  .catch((err) => console.log(err));
