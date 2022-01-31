import '../styles/layout/SectionPreview.scss';
import Card from './Card';
import Reset from './Reset';

function SectionPreview(props) {
  return (
    <section className="section1">
      <div className="profile">
        <Reset handleReset={props.handleReset} />
        <Card data={props.data} />
      </div>
    </section>
  );
}

export default SectionPreview;
