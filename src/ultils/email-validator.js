const validator = require('validator')
module.exports = class EmailValidator {
  isvalid (email) {
    return validator.isEmail(email)
  }
}
