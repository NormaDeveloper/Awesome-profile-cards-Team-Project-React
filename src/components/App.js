import '../styles//App.scss';

import ls from '../services/localStorage';
import dataApi from '../services/api';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SectionForm from './SectionForm';
import SectionPreview from './SectionPreview';
function App() {
  const [data, setData] = useState(
    ls.get('data', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      gitHub: '',
      photo: 'patata',
    })
  );

  const [toggleHidden, setToggleHidden] = useState('hidden');
  const [btnOnOff, setBtnOnOff] = useState('createBtnColor1');
  const [cardLink, setCardLink] = useState('');

  useEffect(() => {
    ls.set('data', data);
  }, [data]);

  const handleChangeInput = (ev) => {
    const inputSelected = ev.currentTarget.name;
    setData({
      ...data,
      [inputSelected]: ev.currentTarget.value,
    });
  };

  const handleCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((dataFromApi) => {
      setToggleHidden('');
      setBtnOnOff('createBtnColor2');
      setCardLink(dataFromApi.cardURL);
    });
  };

  const handleReset = () => {
    setData({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      gitHub: '',
      photo: 'patata',
    });
    ls.remove('data');
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="App">
      <Header />

      <main className="mainCard">
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
        <SectionPreview />
        <SectionForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
