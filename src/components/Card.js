import DefaultImage from '../images/defaultAvatar.jpg';

const Card = (props) => {
  return (
    <article className={`card colorChoice${props.data.palette}`}>
      <div className="card__rectangle"></div>
      <div className="card__user">
        <h1
          className={`card__user--userName js-cardName colorChoice${props.data.palette}`}
        >
          {props.data.name || "Nombre Apellidos"}
        </h1>
        <h2 className="card__user--job js-cardJob">
          {props.data.job || "Front developer"}
        </h2>
      </div>
      <div className="card__img js__profile-image">
          <img  className="card__img" src={props.data.photo ? props.data.photo : DefaultImage} alt="Imagen de la usuaria" />
      </div>
      <ul className="card__bar">
        <li className={`card__bar--icons colorChoice${props.data.palette}`}>
          <a
            className="js-cardPhone"
            title="Contáctame"
            href={`tel:${props.data.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-mobile-alt"></i>
          </a>
        </li>
        <li className={`card__bar--icons colorChoice${props.data.palette}`}>
          <a
            className="js-cardEmail"
            title="Mándame un correo"
            href={`mailto:${props.data.email}`}
          >
            <i className="far fa-envelope"></i>
          </a>
        </li>
        <li className={`card__bar--icons colorChoice${props.data.palette}`}>
          <a
            className="js-cardLinkedin"
            title="Visita mi Linkedin"
            href={`https://www.linkedin.com/in/${props.data.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className={`card__bar--icons colorChoice${props.data.palette}`}>
          <a
            className="js-cardgithub"
            title="Visita mi github"
            href={`https://github.com/${props.data.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-alt"></i>
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Card;
