const getUserById = (id, callback) => {
  const usuario = {
    id,
    nombre: 'Gonzalo',
  };
  setTimeout(() => {
    callback(usuario);
  }, 1000);
};

const id = 1;

getUserById(id, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});
