const CreateButton = () => {
    return (
        <button
        className={`btnContainer__share-btn js-createBtn ${btnOnOff}`}
        onClick={handleCreateCard}
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