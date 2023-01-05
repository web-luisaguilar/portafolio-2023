import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export interface Form {
  name: string;
}

export const useForm = (initialForm, validationsForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validationsForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validationsForm(form));

    if (Object.keys(errors).length === 0) {
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
    } else return;
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
