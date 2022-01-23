import { useState } from 'react/cjs/react.development';
import '../styles/layout/SectionForm.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function SectionForm(props) {

  const [collapsed, setCollapsed] = useState({
    design: false,
    fill: false,
    share: false
  })

  const setCollapsedSections = (id) => {
    const selectedSection = id;
    setCollapsed({
      ...collapsed,
      [selectedSection]: !collapsed.selectedSection
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="section2 section2-wrapper">
      <form className="section2__form" onSubmit={handleSubmit}>
        <Design data={props.data} handleChangeInput={props.handleChangeInput} setCollapsedSections={setCollapsedSections} collapsed={collapsed}/>
        <Fill data={props.data} handleChangeInput={props.handleChangeInput} setCollapsedSections={setCollapsedSections} collapsed={collapsed}/>
        <Share setCollapsedSections={setCollapsedSections} collapsed={collapsed}/>
      </form>
    </section>
  );
}

export default SectionForm;
