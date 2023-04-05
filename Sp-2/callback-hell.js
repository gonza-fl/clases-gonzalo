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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`El empleado con id: ${id} no existe`);
  }
};
const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.empleado_id === id);
  if (salario) {
    callback(null, salario);
  } else {
    callback(`El salario para el empleado con id: ${id} no está registrado`);
  }
};

const id = 3;

getEmpleado(id, (error, empleado) => {
  if (error) {
    console.log('Error');
    return console.log(error);
  }
  getSalario(id, (error, salario) => {
    if (error) {
      console.log('Error');
      return console.log(error);
    }
    console.log(`El salario de ${empleado.nombre} es de: ${salario.salario}`);
  });
});
