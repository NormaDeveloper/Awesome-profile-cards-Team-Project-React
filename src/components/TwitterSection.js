const TwitterSection = (props) => {
    return (
        <section className={`shareSection js-shareSection ${props.toggleHiddenTwitter}`}>
          <p className="shareSection__paragraph">La tarjeta ha sido creada:</p>
          <a
            className={`link shareSection__link-share js-createCardLink`}
            title="Ir a la tarjeta"
            target="_blank"
            href={props.cardLink}
            rel="noreferrer"
          >
            {props.cardLink}
          </a>
          <a
            className="link shareSection__link-shareTwitter js-twitterLink"
            title="Comparte en twitter la tarjeta"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i> Compartir en twitter
          </a>
        </section>
    )
}

export default TwitterSection;