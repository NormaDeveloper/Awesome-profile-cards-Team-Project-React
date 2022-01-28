import { useState } from "react";

const CreateButton = (props) => {

  const [btnOnOff, setBtnOnOff] = useState("createBtnColor1");


  const handleLink = () => {
    if (props.data.palette !== "" && 
    props.data.name !== "" && 
    props.data.job !== "" && 
    props.data.mail !== "" && 
    props.data.linkedin !== "" && 
    props.data.github !== "" && 
    props.data.photo !== "" ){
      setBtnOnOff("createBtnColor2");
      return props.handleHiddenTwitter()
    } else {
      props.handleHiddenError()
    }
  }

  const handleCreateCardShare = (ev) => {
    ev.preventDefault();
    props.handleCreateCard()
    handleLink()
  }
  
    return (
        <button
        className={`btnContainer__share-btn js-createBtn ${btnOnOff}`}
        onClick={handleCreateCardShare}
      >
        <i className="btnContainer__share-btn--icon far fa-address-card"></i>
        <span
          className="btnContainer__share-btn--text"
          title="Crear la tarjeta"
        >
          Crear tarjeta
        </span>
      </button>
    )
}

export default CreateButton;