const Palettes = (props) => {

    const handleInput = (ev) => {
        props.handleChangeInput(ev.currentTarget.name, ev.currentTarget.value)
    }

    return (
        <li className="designContainer__choosePalette--palette">
        <input
          className="inputRadio js-palette js-allInputs"
          value={props.paletteValue}
          id={props.paletteId}
          type="radio"
          name="palette"
          onChange={handleInput}
          checked={props.data.palette === props.paletteId}
        />
        <div className={props.classColor1}></div>
        <div className={props.classColor2}></div>
        <div className={props.classColor3}></div>
      </li>
    )
}

export default Palettes;

