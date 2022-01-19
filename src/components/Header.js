import logo from '../images/adufflabeers-logo2.png';
import '../styles/layout/Header.scss';

function Header() {
  return (
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
  );
}

export default Header;
