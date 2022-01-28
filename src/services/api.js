const callToApi = (data) => {
  // Llamamos al API
  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json())
  .then(console.log(data));
};

export default callToApi;
