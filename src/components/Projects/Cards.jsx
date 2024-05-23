import "./styleCard.css";
// import data from "./projects.json"

const Cards = ({ project }) => {
  return (
    <article
      key={project.id}
      className="card"
      style={{ backgroundImage: `url(./img/${project.url})` }}>
      <section className="Incard">
        <h2 className="titleCard">{project.title}</h2>
        <h3 className="subTitleCard">{project.subTitle}</h3>
        <section className="boxSkills">
          {project.skills.map((item,key) => {
            return <p key={key} className="skills">{item}</p>;
          })}
        </section>
      </section>
    </article>
  );
};

export default Cards;
