import '../styles/layout/SectionPreview.scss';

function SectionPreview() {
  return (
    <section className="section1">
      <div className="profile">
        <button className="section1__reset js-reset" onClick={handleReset}>
          <i className="far fa-trash-alt"></i>
          <p className="section1__reset--text">Reset</p>
        </button>

        <article className={`card colorChoice${data.palette}`}>
          <div className="card__rectangle"></div>
          <div className="card__user">
            <h1
              className={`card__user--userName js-cardName colorChoice${data.palette}`}
            >
              {data.name || 'Nombre Apellidos'}
            </h1>
            <h2 className="card__user--job js-cardJob">
              {data.job || 'Front developer'}
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
                href={`https://github.com/${data.gitHub}`}
                target="_blank"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default SectionPreview;
