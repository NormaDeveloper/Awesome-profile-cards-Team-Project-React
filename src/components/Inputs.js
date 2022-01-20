const Inputs = (props) => {

const handleInput = (ev) => {
    props.handleChangeInput(ev.currentTarget.name, ev.currentTarget.value)
}

    return (
        <label className={props.labelClass} htmlFor={props.inputId}>
        {props.labelContent}
        <input
          className={props.inputClass}
          id={props.inputId}
          type="text"
          name={props.inputName}
          placeholder={props.inputPlaceholder}
          pattern={props.inputPattern}
          title={props.inputTitle}
          required={props.inputRequired}
          onChange={handleInput}
          value={props.value}
        />
      </label>
    )
}

export default Inputs;