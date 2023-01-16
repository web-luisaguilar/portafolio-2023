import { Form } from "../components/contacto/ContactForm";

export interface ValidationsErrors {
  name?: string;
  subject?: string;
  email?: string;
  message?: string;
}
const validationsForm = (form: Form) => {
  let errors: ValidationsErrors | null = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'El campo "Nombre" es requerido';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco';
  }

  if (!form.subject.trim()) {
    errors.subject = 'El campo "Asunto" es requerido';
  }

  if (!form.email.trim()) {
    errors.email = 'El campo "Correo" es requerido';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'El campo "Email" solo acepta correos validos';
  } else if (form.email.trim().includes("test")) {
    errors.email = 'El campo "Email" no acepta correos de prueba ("test")';
  }
  if (!form.message.trim()) {
    errors.message = 'El campo "Mensaje" es requerido';
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = 'El campo "Mensaje" no acepta mas de 255 caracteres';
  }

  return errors;
};

export default validationsForm;
