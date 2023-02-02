import Proyect, { Proyect as ProyectType } from "./Proyect";

const ProyectsGrid = ({ proyects }: { proyects: ProyectType[] }) => {
  return (
    <>
      <div className="cards-grid">
        {proyects.map((proyect, index) => (
          <Proyect key={index} proyectData={proyect} />
        ))}
      </div>
    </>
  );
};

export default ProyectsGrid;
