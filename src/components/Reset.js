const Reset = (props) => {

const handleClickReset = (ev) => {
    ev.preventDefault();
    props.handleReset()
}

    return (
        <button className="section1__reset js-reset" onClick={handleClickReset}>
        <i className="far fa-trash-alt"></i>
        <p className="section1__reset--text">Reset</p>
      </button>
    )
}

export default Reset;