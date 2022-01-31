const ErrorMessage = (props) => {
  if (
    props.data.palette !== '' &&
    props.data.name !== '' &&
    props.data.job !== '' &&
    props.data.mail !== '' &&
    props.data.linkedin !== '' &&
    props.data.github !== '' &&
    props.data.photo !== ''
  ) {
    return props.toggleHiddenError === false;
  } else {
    return (
      <span
        className={`btnContainer__mensajeError ${
          props.toggleHiddenError ? null : 'hidden'
        }`}
        title="¡Debes rellenar todos los campos!"
      >
        ¡Debes rellenar todos los campos!<br></br>
      :(
      </span>
    );
  }
};

export default ErrorMessage;
