import logo from '../images/adufflabeers-logo2.png';
import '../styles/layout/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="awesome">
      <div className="awesome__container">
        <Link to="/" className="awesome__container--link">
          <img
            className="awesome__container--img"
            src={logo}
            title="logo awesome"
            alt="logo-awesome"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
