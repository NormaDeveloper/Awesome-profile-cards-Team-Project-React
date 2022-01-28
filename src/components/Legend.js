const Legend = (props) => {

const handleClickCollapse = (ev) => {
  props.handleCollapsibles(ev.currentTarget.id, !props.collapsibles)
}

  return (
    <legend className="titleContainer" onClick={handleClickCollapse} id={props.id}>
      <div className="titleContainer__titleItem">
        <i className={props.iconClass}></i>
        <h2 className="titleContainer__titleItem--title">{props.titleText}</h2>
      </div>
      <i
        title="Pulsa para desplegar"
        className={`titleContainer__titleItem--icon fas fa-chevron-up js-arrowCollapsable2 ${props.collapsibles ? "rotateArrow" : null}`}
      ></i>
    </legend>
  );
};

export default Legend;
