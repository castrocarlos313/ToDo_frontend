export default (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El email es invalido";
  }

  if (!values.contraseña) {
    errors.contraseña = "La contraseña es obligatorio";
  }

  return errors;
};
