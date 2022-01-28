import logoAdalab from '../images/logo-adalab.png';
import '../styles/layout/_footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__copy">Awesome profile-cards &copy; 2021</small>
      <img
        className="footer__logo"
        src={logoAdalab}
        width="105px"
        height="40px"
        alt="Logo de Adalab"
      />
    </footer>
  );
}

export default Footer;
