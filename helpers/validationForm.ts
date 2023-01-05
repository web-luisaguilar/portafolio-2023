const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.nombre.trim()) {
    errors.nombre = 'El campo "Nombre" es requerido';
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = 'El campo "Nombre" solo acepta letras y espacios en blanco';
  }

  if (!form.asunto.trim()) {
    errors.asunto = 'El campo "Asunto" es requerido';
  }

  if (!form.correo.trim()) {
    errors.correo = 'El campo "Correo" es requerido';
  } else if (!regexEmail.test(form.correo.trim())) {
    errors.correo = 'El campo "Email" solo acepta correos validos';
  }

  if (!form.mensaje.trim()) {
    errors.mensaje = 'El campo "Mensaje" es requerido';
  } else if (!regexMessage.test(form.mensaje.trim())) {
    errors.mensaje = 'El campo "Mensaje" no acepta mas de 255 caracteres';
  }

  return errors;
};

export default validationsForm;
