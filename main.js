const axios = require('axios')
require('dotenv').config()
const getFormData = require('./getFormData')
const editForm = require('./editForm')

async function main() {
  try {
    const formId = 'FORM-ID-TO-EDIT';
    const formData = await getFormData(formId)
    formData.fields['INDEX TO EDIT'].attachment = {
      href: "WWW.PATH-TO-IMAGE.COM",
      type: "image"
    };
    const response = await editForm(formId, formData)
  } catch (error) {
    console.log(error)
  }
}