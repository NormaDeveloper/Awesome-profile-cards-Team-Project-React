import '../styles/layout/_main-landing.scss';

import logo from '../images/adufflabeers-logo2.png';
import { Link } from 'react-router-dom';
function MainLanding(props) {
  return (
    <main className="mainLanding">
      <div className="mainLanding__imageContainer">
        <img className="mainLanding__imageContainer--image" src={logo} alt="" />
      </div>
      <section className="mainLanding__text">
        <h1 className="mainLanding__text--title">Crea tu tarjeta de visita</h1>
        <p className="mainLanding__text--paragraph">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </section>

      <section>
        <ul className="mainLanding__section">
          <li className="mainLanding__section--list">
            <i className="mainLanding__section--icon fal fa-object-ungroup"></i>
            <p>diseña</p>
          </li>
          <li className="mainLanding__section--list">
            <i className="mainLanding__section--icon far fa-keyboard"></i>
            <p>rellena</p>
          </li>
          <li className="mainLanding__section--list">
            <i className="mainLanding__section--icon fas fa-share-alt"></i>
            <p>comparte</p>
          </li>
        </ul>
      </section>

      <button className="mainLanding__button">
        <Link
          className="mainLanding__button--link"
          to="/cards"
          title="Go to card"
        >
          comenzar
        </Link>
      </button>
    </main>
  );
}

export default MainLanding;
