import { HttpResponse, HttpRequest } from '@/presentation/protocols/http';
import { MissingParamError } from '@/presentation/errors/missing-param-error';
import { badRequest } from '@/presentation/helpers/http-helper';
import { Controller } from '@/presentation/protocols/controller';
import { EmailValidator } from '@/presentation/protocols/email-validator';
import { InvalidParamError } from '@/presentation/errors/invalid-param-error';
import { ServerError } from '../errors/server-error';
export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle (httpRequest: HttpRequest): HttpResponse | any {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email);
      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      };
    }
  }
};
