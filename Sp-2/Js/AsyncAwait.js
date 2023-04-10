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

const ejecutar = async (id) => {
  try {
    const salario = await getSalario(id);
    console.log('🚀 ~ file: AsyncAwait.js:59 ~ ejecutar ~ salario:', salario);
    const empleado = await getEmpleado(id);
    console.log('🚀 ~ file: AsyncAwait.js:57 ~ ejecutar ~ empleado:', empleado);
  } catch (error) {
    console.log('🚀 ~ file: AsyncAwait.js:58 ~ error:', error);
  }
};

const id = 1;

const respuesta = ejecutar(id);
console.log('🚀 ~ file: AsyncAwait.js:64 ~ respuesta:', respuesta);
