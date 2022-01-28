const ErrorMessage = (props) => {
  return (
    <span
      className={`btnContainer__mensajeError ${props.toggleHiddenError}`}
      title="¡Debes rellenar todos los campos!"
    >¡Debes rellenar todos los campos!</span>
  );
};

export default ErrorMessage;
