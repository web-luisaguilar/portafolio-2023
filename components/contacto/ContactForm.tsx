import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import validationsForm from "../../helpers/validationForm";
import { useForm } from "../../hooks/useForm";
import ErrorFormMessage from "../ErrorFormMessage";
import Loading from "../Loading";

export interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const initialForm: Form = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  //const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //  e.preventDefault();
  //};

  const { form, errors, loading, response, handleChange, handleSubmit } =
    useForm(initialForm, validationsForm);
  console.log(loading);

  return (
    <form className="flex w-full  p-2" onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="flex w-full flex-col border border-cyan-500/70 bg-slate-400/5 p-6">
        <legend className="mx-auto px-3 text-center text-lg uppercase text-cyan-500/70">
          Contactame
        </legend>
        <div className="flex w-full gap-8">
          <div className="w-1/2">
            <label htmlFor="name">Nombre: </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              type="text"
              id="name"
              name="name"
              className="w-full"
              placeholder="Escribe tu Nombre"
              value={form.name}
              autoComplete="off"
            />
            <ErrorFormMessage errorText={errors?.name} />
          </div>
          <div className="w-1/2">
            <label htmlFor="email">Correo: </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              type="email"
              autoComplete="on"
              id="email"
              name="email"
              placeholder="Escribe el Asunto"
              className="w-full"
              value={form.email}
            />
            <ErrorFormMessage errorText={errors?.email} />
          </div>
        </div>
        <br />
        <label htmlFor="subject">Asunto: </label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          type="text"
          name="subject"
          id="subject"
          placeholder="Escribe tu Asunto"
          autoComplete="off"
          value={form.subject}
        />

        <ErrorFormMessage errorText={errors?.subject} />
        <br />
        <label htmlFor="message">Mensaje: </label>
        <textarea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
          className=""
          name="message"
          placeholder="Escribe tu Mensajes"
          id="message"
          cols={30}
          autoComplete="off"
          rows={5}
          value={form.message}
        ></textarea>
        <ErrorFormMessage errorText={errors?.message} />
        <br />
        <input
          type="submit"
          value="Enviar mensaje"
          className="btn mx-auto px-20"
        />
        {loading ? <Loading /> : null}
      </fieldset>
    </form>
  );
};

export default ContactForm;
