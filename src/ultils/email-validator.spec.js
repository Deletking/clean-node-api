const validator = require('validator')
class EmailValidator {
  isvalid (email) {
    return validator.isEmail(email)
  }
}

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Shoud return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isvalid('valid_email@email.com')
    expect(isEmailValid).toBe(true)
  })

  test('Shoud return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isvalid('invalid_email@email.com')
    expect(isEmailValid).toBe(false)
  })

  test('Shoud call vakudator with correct email', () => {
    const sut = makeSut()
    sut.isvalid('any_email@email.com')
    expect(validator.email).toBe('any_email@email.com')
  })
})
