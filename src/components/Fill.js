import "../styles/layout/Fill.scss";
import Legend from "./Legend";
import Inputs from "./Inputs";
import GetAvatar from "./GetAvatar";

const Fill = (props) => {
  return (
    <fieldset className="fieldsetContainer section2__form--completeFieldset">
      <Legend
        iconClass="far fa-keyboard icon"
        titleText="Rellena"
        id="fill"
        handleCollapsibles={props.handleCollapsibles}
        collapsibles={props.collapsibles.fill}
      />
      <div
        className={`labelsWrapper ${props.collapsibles.fill ? "hidden" : null}`}
        
      >
        <Inputs
          labelClass="label"
          inputId="completeName"
          labelContent="Nombre completo"
          inputClass="completeFieldset-input js-inputName js-allInputs"
          inputName="name"
          inputPlaceholder="Ej: Sally Jill"
          inputPattern="^\b([A-ZÀ-ÿ][-,a-z ']+[ ]*)+$"
          inputTitle="Introduce tu nombre o tu nombre completo"
          inputRequired={true}
          handleChangeInput={props.handleChangeInput}
          value={props.data.name}
        />
        <Inputs
          labelClass="label labelsWrapper__jobLabel"
          inputId="job"
          labelContent="Puesto"
          inputClass="completeFieldset-input js-inputJob js-allInputs"
          inputName="job"
          inputPlaceholder="Ej: Front-end unicorn"
          inputTitle="Introduce el puesto que desempeñas"
          inputRequired={true}
          handleChangeInput={props.handleChangeInput}
          value={props.data.job}
        />

        <GetAvatar
          avatar={props.data.photo}
          updateAvatar={props.updateAvatar}
        />

        <Inputs
          labelClass="label"
          inputId="emailAddress"
          labelContent="Email"
          inputClass="completeFieldset-input js-inputEmail js-allInputs"
          inputName="email"
          inputPlaceholder="nombre.apellidos@mail.com"
          inputPattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[.][a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
          inputTitle="Introduce un email válido"
          inputRequired={true}
          handleChangeInput={props.handleChangeInput}
          value={props.data.email}
        />
        <Inputs
          labelClass="label"
          inputId="phoneNumber"
          labelContent="Teléfono"
          inputClass="completeFieldset-input contact__form--item phoneNumber js-inputPhone js-allInputs"
          inputName="phone"
          inputPlaceholder="Ej: 555-55-55-55"
          inputPattern="^[0-9]{9}$"
          inputTitle="Por favor, introduce tu número de teléfono"
          inputRequired={false}
          handleChangeInput={props.handleChangeInput}
          value={props.data.phone}
        />
        <Inputs
          labelClass="label"
          inputId="linkedin"
          labelContent="Linkedin"
          inputClass="completeFieldset-input js-inputLinkedin js-allInputs"
          inputName="linkedin"
          inputPlaceholder="Ej: linkedin.com/in/sally.hill"
          inputTitle="Introduce tu linkedin"
          inputRequired={true}
          handleChangeInput={props.handleChangeInput}
          value={props.data.linkedin}
        />
        <Inputs
          labelClass="label"
          inputId="github"
          labelContent="gitHub"
          inputClass="completeFieldset-input js-inputgithub js-allInputs"
          inputName="github"
          inputPlaceholder="Ej: @sally-hill"
          inputTitle="Introduce tu gitHub"
          inputRequired={true}
          handleChangeInput={props.handleChangeInput}
          value={props.data.github}
        />
      </div>
    </fieldset>
  );
};

export default Fill;
