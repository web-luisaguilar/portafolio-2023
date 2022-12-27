import Card from "../Card";

const Proyect = () => {
  return (
    <>
      <Card>
        <>
          <h3 className="text-center text-xl font-bold uppercase text-cyan-400">
            Tclean
          </h3>

          <p className="flex text-sm text-white/50">📆01/10/2001</p>

          <div className="flex justify-end py-2">
            Categorias:
            <span className="border border-white/40 px-1 text-sm capitalize text-white/40">
              python
            </span>
          </div>

          <p className="text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore
            quaerat aperiam, harum dolor doloribus placeat ipsa perferendis qui
            enim. Sequi excepturi voluptatem quaerat facilis officia
            perspiciatis minus veritatis adipisci
          </p>

          <div className="flex justify-around pt-4">
            <div className="btn inline-flex">Github</div>
            <div className="btn inline-flex">Demo</div>
            <div className="btn inline-flex">Leer Mas</div>
          </div>
        </>
      </Card>
    </>
  );
};

export default Proyect;
