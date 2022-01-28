import { useState } from "react/cjs/react.development";
import "../styles/layout/SectionForm.scss";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function SectionForm(props) {
  const [collapsibles, setCollapsibles] = useState({
    design: false,
    fill: true,
    share: true,
  });

  const handleCollapsibles = (section, value) => {
    setCollapsibles({
      ...collapsibles,
      [section]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="section2 section2-wrapper">
      <form className="section2__form" onSubmit={handleSubmit}>
        <Design
          data={props.data}
          handleChangeInput={props.handleChangeInput}
          handleCollapsibles={handleCollapsibles}
          collapsibles={collapsibles}
        />
        <Fill
          data={props.data}
          handleChangeInput={props.handleChangeInput}
          avatar={props.data.photo}
          updateAvatar={props.updateAvatar}
          handleCollapsibles={handleCollapsibles}
          collapsibles={collapsibles}
        />
        <Share
          handleCreateCard={props.handleCreateCard}
          btnOnOff={props.btnOnOff}
          toggleHidden={props.toggleHidden}
          cardLink={props.cardLink}
          data={props.data}
          handleHiddenTwitter={props.handleHiddenTwitter}
          handleHiddenError={props.handleHiddenError}
          toggleHiddenTwitter={props.toggleHiddenTwitter}
          toggleHiddenError={props.toggleHiddenError}
          handleCollapsibles={handleCollapsibles}
          collapsibles={collapsibles}
        />
      </form>
    </section>
  );
}

export default SectionForm;
