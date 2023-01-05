import { useState } from "react";
import validationsForm from "../../helpers/validationForm";
import { Form, useForm } from "../../hooks/useForm";
const ContactForm = () => {
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log("Enviando Mensaje");
  };
  const initialForm: Form = {
    name: "",
  };
  const { loading, setLoading } = useForm(initialForm, validationsForm);

  return (
    <form className="flex w-full  p-2" onSubmit={(e) => handleSubmit}>
      <fieldset className="flex w-full flex-col border border-cyan-500/70 bg-slate-400/5 p-6">
        <legend className="mx-auto px-3 text-center text-lg uppercase text-cyan-500/70">
          Contactame
        </legend>
        <div className="flex w-full gap-8">
          <div className="w-1/2">
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              id="name"
              className="w-full"
              placeholder="Escribe tu Nombre"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email">Correo: </label>
            <input
              type="email"
              autoComplete="off"
              id="email"
              placeholder="Escribe el Asunto"
              className="w-full"
            />
          </div>
        </div>
        <br />
        <label htmlFor="subject">Asunto: </label>
        <input
          type="text"
          id="subject"
          placeholder="Escribe tu Asunto"
          autoComplete="off"
        />
        <br />
        <label htmlFor="message">Mensaje: </label>
        <textarea
          className=""
          name="message"
          placeholder="Escribe tu Mensajes"
          id="message"
          cols={30}
          rows={5}
        ></textarea>
        <br />
        <input
          type="submit"
          value="Enviar mensaje"
          className="btn mx-auto px-20"
        />
      </fieldset>
    </form>
  );
};

export default ContactForm;
