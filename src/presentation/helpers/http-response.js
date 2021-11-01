const MissingParamError = require('./missing-param-error')
const AnauthorizedError = require('./unauthorized-error')
module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new AnauthorizedError()
    }
  }

  static ok () {
    return {
      statusCode: 200
    }
  }
}
