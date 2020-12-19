var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://ehr-auth-hmg.saude.gov.br/api/token',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});