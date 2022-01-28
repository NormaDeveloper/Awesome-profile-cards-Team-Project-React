const CreateButton = (props) => {

  const handleLink = () => {
    if (props.data.palette !== "" && 
    props.data.name !== "" && 
    props.data.job !== "" && 
    props.data.mail !== "" && 
    props.data.linkedin !== "" && 
    props.data.gitHub !== "" && 
    props.data.photo !== "" ){
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
        className={`btnContainer__share-btn js-createBtn ${props.btnOnOff}`}
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