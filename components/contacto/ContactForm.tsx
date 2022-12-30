const ContactForm = () => {
  return (
    <form className=" w-full bg-white/5 p-3">
      <fieldset className="grid-col-2 grid gap-y-4 border p-3">
        <legend className="mx-auto px-3 text-center uppercase text-white/70">
          Contactame
        </legend>
        <div className="col-end-1 flex grid-cols-2">
          <label htmlFor="name" className="w-20 text-white/70">
            Nombre:{" "}
          </label>
          <input
            type="text"
            id="name"
            className=" focus:outline-white/15 w-2/3 bg-white/10 px-2 text-white/70 outline-1 focus:outline"
          />
        </div>
        <div className="col-start-1 col-end-2 flex grid-cols-2">
          <label htmlFor="name" className="w-20 text-white/70">
            Correo:{" "}
          </label>
          <input
            type="text"
            id="name"
            className=" focus:outline-white/15 w-2/3 bg-white/10 px-2 text-white/70 outline-1 focus:outline"
          />
        </div>
        <div className="col-end-1 flex grid-cols-2">
          <label htmlFor="name" className="w-20 text-white/70">
            Asunto:{" "}
          </label>
          <input
            type="text"
            id="name"
            className=" focus:outline-white/15 w-2/3 bg-white/10 px-2 text-white/70 outline-1 focus:outline"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default ContactForm;
