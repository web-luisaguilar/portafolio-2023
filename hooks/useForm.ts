import { ChangeEvent, FormEvent, useState, FocusEvent } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { Form } from "../components/contacto/ContactForm";
import { ValidationsErrors } from "../helpers/validationForm";

export const useForm = (
  initialForm: Form,
  validationsForm: (form: Form) => ValidationsErrors | null
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<ValidationsErrors | null>();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<Boolean | null>(null);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | FocusEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validationsForm(form));
    if (Object.keys(validationsForm(form) || 0).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/42283fdc0c42015622354c63c654a6b3", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 3000);
        });
    } else {
      setLoading(false);
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
  };
};
