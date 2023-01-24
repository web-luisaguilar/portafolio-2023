import Proyect from "./Proyect";

const arr = new Array(5);

const ProyectsGrid = ({ proyects }: { proyects: [] }) => {
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
