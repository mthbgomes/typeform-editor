const axios = require('axios')
require('dotenv').config()

async function getFormData(formId) {
  const fetchUrl = `https://api.typeform.com/forms/${formId}`;
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.TYPEFORM_API_KEY}`,
      'Accept': 'application/json'
    }
  };
  const response = await axios(fetchUrl, options);
  const formData = response.data;
  return formData;
}

module.exports = getFormData