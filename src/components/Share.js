import "../styles/layout/Share.scss";
import Legend from "./Legend";
// import CreateButton from "./CreateButton";
// import ErrorMessage from "./ErrorMessage";
// import TwitterSection from "./TwitterSection";

const Share = (props) => {
  return (
    <fieldset className="fieldsetContainer section2__form--shareFieldset">
      <Legend iconClass="fas fa-share-alt icon" titleText="Comparte" setCollapsedSections={props.setCollapsedSections}/>

      <div className={`shareContainer ${props.collapsed.share ? "hidden" : null}`}>
        <h2>Prueba</h2>
        {/* <!-- <div className="js-collapsed"> --> */}
        {/* <div className="btnContainer">
          <CreateButton />
          <ErrorMessage />
        </div>
        <TwitterSection /> */}
      </div>
    </fieldset>
  );
};

export default Share;
