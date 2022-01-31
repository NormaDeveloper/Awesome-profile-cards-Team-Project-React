import "../styles/layout/Share.scss";
import Legend from "./Legend";
import CreateButton from "./CreateButton";
import ErrorMessage from "./ErrorMessage";
import TwitterSection from "./TwitterSection";

const Share = (props) => {
  return (
    <fieldset className="fieldsetContainer section2__form--shareFieldset">
      <Legend
        iconClass="fas fa-share-alt icon"
        titleText="Comparte"
        id="share"
        handleCollapsibles={props.handleCollapsibles}
        collapsibles={props.collapsibles.share}
      />

      <div
        className={`shareContainer ${
          props.collapsibles.share ? "hidden" : null
        }`}
      >
        <div className="btnContainer">
          <CreateButton
            handleCreateCard={props.handleCreateCard}
            data={props.data}
            handleHiddenTwitter={props.handleHiddenTwitter}
            handleHiddenError={props.handleHiddenError}
            btnOnOff={props.btnOnOff}
            handleBtnOnOff={props.handleBtnOnOff}
          />
          <ErrorMessage toggleHiddenError={props.toggleHiddenError} data={props.data}/>
        </div>
        <TwitterSection
          cardLink={props.cardLink}
          toggleHiddenTwitter={props.toggleHiddenTwitter}
        />
      </div>
    </fieldset>
  );
};

export default Share;
