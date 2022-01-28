import "../styles/layout/Design.scss";
import Legend from "./Legend";
import Palettes from "./Palettes";

function Design(props) {
  return (
    <fieldset className="fieldsetContainer section2__form--designFieldset">
      <Legend
        iconClass="far fa-object-ungroup icon"
        titleText="Diseña"
        id="design"
        handleCollapsibles={props.handleCollapsibles}
        collapsibles={props.collapsibles.design}
      />
      <div
        className={`designContainer js-collapsable_content ${
          props.collapsibles.design ? "hidden" : null
        }`}
      >
        <label>Colores</label>
        <nav>
          <ul className="designContainer__choosePalette">
            <Palettes
              paletteValue="1"
              paletteId="1"
              handleChangeInput={props.handleChangeInput}
              data={props.data}
              classColor1="color color-darkGreen"
              classColor2="color color-blue"
              classColor3="color color-green"
            />
            <Palettes
              paletteValue="2"
              paletteId="2"
              handleChangeInput={props.handleChangeInput}
              data={props.data}
              classColor1="color color-darkRed"
              classColor2="color color-red"
              classColor3="color color-tomato"
            />
            <Palettes
              paletteValue="3"
              paletteId="3"
              handleChangeInput={props.handleChangeInput}
              data={props.data}
              classColor1="color color-slate"
              classColor2="color color-orange"
              classColor3="color color-lightBlue"
            />
          </ul>
        </nav>
      </div>
    </fieldset>
  );
}

export default Design;
