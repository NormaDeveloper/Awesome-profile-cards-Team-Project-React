import '../styles/layout/SectionForm.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function SectionForm(props) {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="section2 section2-wrapper">
      <form className="section2__form" onSubmit={handleSubmit}>
        <Design data={props.data} handleChangeInput={props.handleChangeInput}/>
        <Fill data={props.data} handleChangeInput={props.handleChangeInput}/>
        <Share handleCreateCard ={props.handleCreateCard} btnOnOff={props.btnOnOff}
        toggleHidden={props.toggleHidden}
        cardLink={props.cardLink}/>
      </form>
    </section>
  );
}

export default SectionForm;
