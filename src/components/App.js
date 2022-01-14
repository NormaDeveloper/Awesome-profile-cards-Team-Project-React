import '../styles//App.scss';
import logo from "../images/adufflabeers-logo2.png";
import logoAdalab from "../images/logo-adalab.png";
import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  // const [color, ]

  const handleChangeInput = (ev) => {
    const inputSelected = ev.currentTarget.name;

   setData({
     ...data,
     [inputSelected]: ev.currentTarget.value
   })    
  }



  return (
    <div className="App">
      <header className="awesome">
        <div className="awesome__container">
          <a className="awesome__container--link" href="./index.html">
            <img
              className="awesome__container--img"
              src={logo}
              title="logo awesome"
              alt="logo-awesome"
            />
          </a>
        </div>
      </header>

      <main className="mainCard">
        <section className="section1">
          <div className="profile">
            <button className="section1__reset js-reset">
              <i className="far fa-trash-alt"></i>
              <p className="section1__reset--text">Reset</p>
            </button>

            <article className={`card colorChoice${data.palette}`}> 
              <div className="card__rectangle"></div>
              <div className="card__user">
                <h1 className={`card__user--userName js-cardName colorChoice${data.palette}`}>
                  {data.name || "Nombre Apellidos"}
                </h1>
                <h2 className="card__user--job js-cardJob">
                {data.job || "Front developer"}
                </h2>
              </div>
              <div className="card__img js__profile-image"></div>
              <ul className="card__bar">
                <li className={`card__bar--icons colorChoice${data.palette}`}>
                  <a
                    className="js-cardPhone"
                    title="Contáctame"
                    href={`tel:${data.phone}`}
                    target="_blank"
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>
                <li className={`card__bar--icons colorChoice${data.palette}`}>
                  <a
                    className="js-cardEmail"
                    title="Mándame un correo"
                    href={`mailto:${data.email}`}
                    >
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
                <li className={`card__bar--icons colorChoice${data.palette}`}>
                  <a
                    className="js-cardLinkedin"
                    title="Visita mi Linkedin"
                    href={`https://www.linkedin.com/in/${data.linkedin}`}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className={`card__bar--icons colorChoice${data.palette}`}>
                  <a
                    className="js-cardGitHub"
                    title="Visita mi GitHub"
                    href={`https://github.com/${data.github}`}
                    target="_blank"
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section2 section2-wrapper">
          <form className="section2__form">
            {/* <!-- Design fieldset --> */}
            <fieldset className="fieldsetContainer section2__form--designFieldset">
              <legend className="titleContainer js-collapsable_title">
                <div className="titleContainer__titleItem">
                  <i className="far fa-object-ungroup icon"></i>
                  <h2 className="titleContainer__titleItem--title">Diseña</h2>
                </div>
                <i
                  title="Pulsa para desplegar"
                  className="titleContainer__titleItem--icon fas fa-chevron-up js-arrowCollapsable"
                ></i>
              </legend>

              <div className="designContainer js-collapsable_content">
                <label>Colores</label>
                <nav>
                  <ul className="designContainer__choosePalette">
                    <li className="designContainer__choosePalette--palette">
                      <input
                        className="inputRadio js-palette js-allInputs"
                        value="1"
                        id="1"
                        type="radio"
                        name="palette"
                        defaultChecked={true}
                        onClick={handleChangeInput}
                        checked={data.palette === '1'}
                        
                      />
                      <div className="color color-darkGreen"></div>
                      <div className="color color-blue"></div>
                      <div className="color color-green"></div>
                    </li>

                    <li className="designContainer__choosePalette--palette">
                      <input
                        className="inputRadio js-palette js-allInputs"
                        value="2"
                        id="2"
                        type="radio"
                        name="palette"
                        onClick={handleChangeInput}
                        checked={data.palette === '2'}
                      />

                      <div className="color color-darkRed"></div>
                      <div className="color color-red"></div>
                      <div className="color color-tomato"></div>
                    </li>
                    <li className="designContainer__choosePalette--palette">
                      <input
                        className="inputRadio js-palette js-allInputs"
                        value="3"
                        id="3"
                        type="radio"
                        name="palette"
                        onClick={handleChangeInput}
                        checked={data.palette === '3'}
                      />
                      <div className="color color-slate"></div>
                      <div className="color color-orange"></div>
                      <div className="color color-lightBlue"></div>
                    </li>
                  </ul>
                </nav>
              </div>
            </fieldset>

            {/* <!-- Fill fieldset --> */}
            <fieldset className="fieldsetContainer section2__form--completeFieldset">
              <legend className="titleContainer">
                <div className="titleContainer__titleItem">
                  <i className="far fa-keyboard icon"></i>
                  <h2 className="titleContainer__titleItem--title">Rellena</h2>
                </div>
                <i
                  title="Pulsa para desplegar"
                  className="titleContainer__titleItem--icon fas fa-chevron-up js-arrowCollapsable2"
                ></i>
              </legend>
              <div className="labelsWrapper">
                {/* <!-- <div className="js-collapsed"> --> */}
                <label className="label" htmlFor="completeName">
                  Nombre completo
                  <input
                    className="completeFieldset-input js-inputName js-allInputs"
                    id="completeName"
                    type="text"
                    name="name"
                    placeholder="Ej: Sally Jill"
                    pattern="^\b([A-ZÀ-ÿ][-,a-z ']+[ ]*)+$"
                    title="Introduce tu nombre o tu nombre completo"
                    required
                    onChange={handleChangeInput}
                    value={data.name}
                  />
                </label>
                <label className="label labelsWrapper__jobLabel" htmlFor="job">
                  Puesto
                  <input
                    className="completeFieldset-input js-inputJob js-allInputs"
                    id="job"
                    type="text"
                    name="job"
                    placeholder="Ej: Front-end unicorn"
                    title="Introduce el puesto que desempeñas"
                    required
                    onChange={handleChangeInput}
                    value={data.job}
                  />
                </label>
                <label className="label labelsWrapper__imgLabel" htmlFor="img">
                  <span className="labelsWrapper__imgLabel--title">
                    Imagen de perfil
                  </span>
                  <div className="labelsWrapper__imgLabel--container">
                    <label
                      htmlFor="photo"
                      className="imgLabel-btn js__profile-trigger"
                      name="photo"
                    >
                      Añadir imagen
                    </label>
                    <input
                      className="js__profile-upload-btn"
                      type="file"
                      name="photo"
                      id="photo"
                      required
                    />
                    <div className="imgLabel-div js__profile-preview"></div>
                  </div>
                </label>
                <label className="label" htmlFor="emailAddress">
                  Email
                  <input
                    className="completeFieldset-input js-inputEmail js-allInputs"
                    placeholder="nombre.apellidos@mail.com"
                    id="emailAddress"
                    type="email"
                    name="email"
                    title="Introduce un email válido"
                    pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[.][a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                    required
                    onChange={handleChangeInput}
                    value={data.email}
                  />
                </label>
                <label className="label" htmlFor="phoneNumber">
                  Teléfono
                  <input
                    className="completeFieldset-input contact__form--item phoneNumber js-inputPhone js-allInputs"
                    placeholder="Ej: 555-55-55-55"
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    pattern="^[0-9]{9}$"
                    title="Por favor, introduce tu número de teléfono"
                    onChange={handleChangeInput}
                    value={data.phone}
                  />
                </label>
                <label className="label" htmlFor="linkedin">
                  Linkedin
                  <input
                    className="completeFieldset-input js-inputLinkedin js-allInputs"
                    placeholder="Ej: linkedin.com/in/sally.hill"
                    id="linkedin"
                    type="text"
                    name="linkedin"
                    title="Introduce tu linkedin"
                    required
                    onChange={handleChangeInput}
                    value={data.linkedin}
                  />
                </label>
                <label className="label" htmlFor="gitHub">
                  GitHub
                  <input
                    className="completeFieldset-input js-inputGitHub js-allInputs"
                    placeholder="Ej: @sally-hill"
                    id="gitHub"
                    type="text"
                    name="gitHub"
                    title="Introduce tu GitHub"
                    required
                    onChange={handleChangeInput}
                    value={data.github}
                  />
                </label>
              </div>
            </fieldset>

            {/* <!-- Share fieldset --> */}
            <fieldset className="fieldsetContainer section2__form--shareFieldset collapsed">
              <legend className="titleContainer">
                <div className="titleContainer__titleItem">
                  <i className="fas fa-share-alt icon"></i>
                  <h2 className="titleContainer__titleItem--title">Comparte</h2>
                </div>
                <i
                  title="Pulsa para desplegar"
                  className="titleContainer__titleItem--icon fas fa-chevron-up js-arrowCollapsable3"
                ></i>
              </legend>
              <div className="shareContainer">
                {/* <!-- <div className="js-collapsed"> --> */}
                <div className="btnContainer">
                  <button className="btnContainer__share-btn js-createBtn createBtnColor1">
                    <i className="btnContainer__share-btn--icon far fa-address-card"></i>
                    <span
                      className="btnContainer__share-btn--text"
                      title="Crear la tarjeta"
                    >
                      Crear tarjeta
                    </span>
                  </button>
                  <span
                    className="btnContainer__mensajeError js-hiddenMessage"
                    title="¡Debes rellenar todos los campos!"
                  ></span>
                </div>
                <section className="shareSection js-shareSection hidden">
                  <p className="shareSection__paragraph">
                    La tarjeta ha sido creada:
                  </p>
                  <a
                    className="link shareSection__link-share js-createCardLink"
                    title="Ir a la tarjeta"
                    target="_blank"
                  ></a>
                  <a
                    className="link shareSection__link-shareTwitter js-twitterLink"
                    title="Comparte en twitter la tarjeta"
                    href="#"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i> Compartir en twitter
                  </a>
                </section>
              </div>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="footer">
        <small className="footer__copy">
          Awesome profile-cards &copy; 2021
        </small>

        <img
          className="footer__logo"
          src={logoAdalab}
          width="105px"
          height="40px"
        />
      </footer>
    </div>
  );
}

export default App;
