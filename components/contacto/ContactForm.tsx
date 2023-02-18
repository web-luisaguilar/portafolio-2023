import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";
import validationsForm from "../../helpers/validationForm";
import { useForm } from "../../hooks/useForm";
import ErrorFormMessage, { ErrorType } from "../ErrorFormMessage";
import Loading from "../Loading";

export interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
const initialForm: Form = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  //const { form, errors, loading, response, handleChange, handleSubmit } =
  //  useForm(initialForm, validationsForm);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response = await fetch(
      "https://formsubmit.co/ajax/web.luisaguilar@gmail.com",
      //"/api/hello",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    let result = await response.json();
    console.log(result);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

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
              onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
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
        {response ? (
          <>
            <div className="bg-green-600/20 p-1 text-center font-semibold text-green-600">
              MENSAJE ENVIADO
            </div>
            <div className="py-2 text-center text-sm italic text-lime-200/80">
              Resibiras una respuesta pronto
            </div>
          </>
        ) : (
          <></>
        )}
      </fieldset>
    </form>
  );
};

export default ContactForm;
