class EmailValidator {
  isvalid (email) {
    return true
  }
}

describe('Email Validator', () => {
  test('Shoud return true if validator returns true', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isvalid('valid_email@email.com')
    expect(isEmailValid).toBe(true)
  })
})
