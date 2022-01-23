const Legend = (props) => {

  const handleClickLegend = (ev) => {
    props.setCollapsedSections(ev.currentTarget.id)
  }

  return (
    <legend className="titleContainer" onClick={handleClickLegend} id={props.titleText}>
      <div className="titleContainer__titleItem">
        <i className={props.iconClass}></i>
        <h2 className="titleContainer__titleItem--title">{props.titleText}</h2>
      </div>
      <i
        title="Pulsa para desplegar"
        className="titleContainer__titleItem--icon fas fa-chevron-up js-arrowCollapsable2"
      ></i>
    </legend>
  );
};

export default Legend;
