export default (values) => {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = "El nombre es obligatorio";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El email es invalido";
  }

  if (!values.contraseña) {
    errors.contraseña = "La contraseña es obligatorio";
  } else if (values.contraseña.length < 6) {
    errors.contraseña = "La contraseña debe tener al menos 6 caracteres";
  }

  if (!values.contraseñaValidar) {
    errors.contraseñaValidar = "Se tiene que verificar la contraseña";
  } else if (values.contraseñaValidar !== values.contraseña) {
    errors.contraseñaValidar = "Las contraseñas no coinciden";
  }

  return errors;
};
