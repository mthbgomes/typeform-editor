const axios = require('axios')
require('dotenv').config()
const formData = require('./getFormData');
const getFormData = require('./getFormData');

async function editForm(formId, formData) {
  const fetchUrl = `https://api.typeform.com/forms/${formId}`
  const options = {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${process.env.TYPEFORM_API_KEY}`,
      'Accept': 'application/json'
    },
    data: formData
  };
}

module.exports = editForm