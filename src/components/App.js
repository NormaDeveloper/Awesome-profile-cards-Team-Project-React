import '../styles//App.scss';
import ls from '../services/localStorage';
import dataApi from '../services/api';
import { Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SectionForm from './SectionForm';
import SectionPreview from './SectionPreview';
import Profile from './Profile';
import Landing from './Landing';

function App() {
  const [data, setData] = useState(
    ls.get('data', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    })
  );

  const updateAvatar = (avatar) => {
    const addPhoto = { ...data, photo: avatar };
    setData(addPhoto);
  };

  const [toggleHiddenTwitter, setToggleHiddenTwitter] = useState('hidden');
  const [toggleHiddenError, setToggleHiddenError] = useState('hidden');
  const [cardLink, setCardLink] = useState('');

  useEffect(() => {
    ls.set('data', data);
  }, [data]);

  const handleChangeInput = (name, value) => {
    const inputSelected = name;
    setData({
      ...data,
      [inputSelected]: value,
    });
  };

  const handleCreateCard = () => {
    dataApi(data).then((dataFromApi) => {
      console.log(dataFromApi);
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
      github: '',
      photo: '',
    });
    ls.remove('data');
  };

  const handleHiddenTwitter = () => {
    setToggleHiddenTwitter(null);
  };

  const handleHiddenError = () => {
    setToggleHiddenError('');
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/cards">
          <Header />
          <main className="mainCard">
            <SectionPreview handleReset={handleReset} data={data} />
            <SectionForm
              data={data}
              handleChangeInput={handleChangeInput}
              handleCreateCard={handleCreateCard}
              handleHiddenTwitter={handleHiddenTwitter}
              handleHiddenError={handleHiddenError}
              cardLink={cardLink}
              toggleHiddenTwitter={toggleHiddenTwitter}
              toggleHiddenError={toggleHiddenError}
              avatar={data.photo}
              updateAvatar={updateAvatar}
            />
            <Profile avatar={data.photo} />
          </main>
          <Footer />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
