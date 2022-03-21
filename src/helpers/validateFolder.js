export default (values) => {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = "El nombre es obligatorio";
  }

  return errors;
};
