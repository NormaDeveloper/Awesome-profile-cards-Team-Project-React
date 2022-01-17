const callToApi = () => {
  // Llamamos al API
  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(formObject),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
  // .then((formObject) => {
  //   function writeMessage(message) {
  //     messageCard.innerHTML = message;
  //   };
  //   return result;
  // });
};

export default callToApi;

//
