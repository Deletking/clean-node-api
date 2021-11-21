const validator = require('validator')
class EmailValidator {
  isvalid (email) {
    return validator.isEmail(email)
  }
}

describe('Email Validator', () => {
  test('Shoud return true if validator returns true', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isvalid('valid_email@email.com')
    expect(isEmailValid).toBe(true)
  })

  test('Shoud return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = new EmailValidator()
    const isEmailValid = sut.isvalid('invalid_email@email.com')
    expect(isEmailValid).toBe(false)
  })
})
