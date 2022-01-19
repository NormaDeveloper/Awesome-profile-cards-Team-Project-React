function Design() {
  return (
    <fieldset className="fieldsetContainer section2__form--designFieldset">
      <legend className="titleContainer js-collapsable_title">
        <div className="titleContainer__titleItem">
          <i className="far fa-object-ungroup icon"></i>
          <h2 className="titleContainer__titleItem--title">Diseña</h2>
        </div>
        <i
          title="Pulsa para desplegar"
          className="titleContainer__titleItem--icon fas fa-chevron-up js-arrowCollapsable"
        ></i>
      </legend>

      <div className="designContainer js-collapsable_content">
        <label>Colores</label>
        <nav>
          <ul className="designContainer__choosePalette">
            <li className="designContainer__choosePalette--palette">
              <input
                className="inputRadio js-palette js-allInputs"
                value="1"
                id="1"
                type="radio"
                name="palette"
                onChange={handleChangeInput}
                checked={data.palette === '1'}
              />
              <div className="color color-darkGreen"></div>
              <div className="color color-blue"></div>
              <div className="color color-green"></div>
            </li>

            <li className="designContainer__choosePalette--palette">
              <input
                className="inputRadio js-palette js-allInputs"
                value="2"
                id="2"
                type="radio"
                name="palette"
                onChange={handleChangeInput}
                checked={data.palette === '2'}
              />

              <div className="color color-darkRed"></div>
              <div className="color color-red"></div>
              <div className="color color-tomato"></div>
            </li>
            <li className="designContainer__choosePalette--palette">
              <input
                className="inputRadio js-palette js-allInputs"
                value="3"
                id="3"
                type="radio"
                name="palette"
                onChange={handleChangeInput}
                checked={data.palette === '3'}
              />
              <div className="color color-slate"></div>
              <div className="color color-orange"></div>
              <div className="color color-lightBlue"></div>
            </li>
          </ul>
        </nav>
      </div>
    </fieldset>
  );
}

export default Design;
