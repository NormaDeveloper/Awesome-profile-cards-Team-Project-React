import "../styles//App.scss";
import ls from "../services/localStorage";
import dataApi from "../services/api";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SectionForm from "./SectionForm";
import SectionPreview from "./SectionPreview";
import GetAvatar from './GetAvatar';
import Profile from './Profile';

function App() {
  const [data, setData] = useState(
    ls.get("data", {
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      gitHub: "",
      photo: "",
    })
  );

  // Comprobar que funcione la imagen así

  const updateAvatar = (avatar) => {
    const addPhoto = [...data, avatar]
    setData(addPhoto);
  };

  const [toggleHidden, setToggleHidden] = useState("hidden");
  const [btnOnOff, setBtnOnOff] = useState("createBtnColor1");
  const [cardLink, setCardLink] = useState("");

  useEffect(() => {
    ls.set("data", data);
  }, [data]);

  const handleChangeInput = (name, value) => {
    const inputSelected = name;
    setData({
      ...data,
      [inputSelected]: value,
    });
  };

  const handleCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((dataFromApi) => {
      setToggleHidden("");
      setBtnOnOff("createBtnColor2");
      setCardLink(dataFromApi.cardURL);
    });
  };

  const handleReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      gitHub: "",
      photo: "",
    });
    ls.remove("data");
  };

  
 

  return (
    <div className="App">
      <Header />
      <main className="mainCard">
        <SectionPreview />
        <SectionForm data={data} handleChangeInput={handleChangeInput} />
        <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
        <Profile avatar={avatar} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
