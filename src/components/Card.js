import DefaultImage from '../images/defaultAvatar.jpg';
import Icons from './Icons';

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
        <Icons 
        data={props.data}
        liClass="js-cardPhone"
        title="Contáctame"
        href={`tel:${props.data.phone}`}
        iconClass="fas fa-mobile-alt"
        />
        <Icons 
        data={props.data}
        liClass="js-cardEmail"
        title="Mándame un correo"
        href={`mailto:${props.data.email}`}
        iconClass="far fa-envelope"
        />
        <Icons 
        data={props.data}
        liClass="js-cardLinkedin"
        title="Visita mi Linkedin"
        href={`https://www.linkedin.com/in/${props.data.linkedin}`}
        iconClass="fab fa-linkedin-in"
        />
          <Icons 
        data={props.data}
        liClass="js-cardgithub"
        title="Visita mi github"
        href={`https://github.com/${props.data.github}`}
        iconClass="fab fa-github-alt"
        />
      </ul>
    </article>
  );
};

export default Card;
