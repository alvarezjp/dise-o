import "./styleCard.css";

const Cards = () => {
  return (
    <article className="card">
      <section className="Incard">
        <h2 className="titleCard">Ecommerce</h2>
        <h3 className="subTitleCard">Venta de productos tecnologicos</h3>
        <section className="boxSkills">
          <p className="skills">HTML</p>
          <p className="skills">REACT</p>
          <p className="skills">JAVASCRIPT</p>
          <p className="skills">HTML</p>
          <p className="skills">REACT</p>
          <p className="skills">JAVASCRIPT</p>
        </section>
      </section>
    </article>
  );
};

export default Cards;
