import '../styles/layout/SectionForm.scss';
import Design from './Design';
function SectionForm() {
  return (
    <section className="section2 section2-wrapper">
      <form className="section2__form" onSubmit={handleSubmit}>
        {/* <!-- Design fieldset --> */}
        <Design />

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
                  // name="photo"
                  id="photo"
                  // required
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
                value={data.gitHub}
              />
            </label>
          </div>
        </fieldset>

        {/* <!-- Share fieldset --> */}
        <fieldset className="fieldsetContainer section2__form--shareFieldset">
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
              <button
                className={`btnContainer__share-btn js-createBtn ${btnOnOff}`}
                onClick={handleCreateCard}
              >
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
            <section className={`shareSection js-shareSection ${toggleHidden}`}>
              <p className="shareSection__paragraph">
                La tarjeta ha sido creada:
              </p>
              <a
                className={`link shareSection__link-share js-createCardLink`}
                title="Ir a la tarjeta"
                target="_blank"
                href={cardLink}
              >
                {cardLink}
              </a>
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
  );
}

export default SectionForm;
