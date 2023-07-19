import { HttpResponse, HttpRequest } from '@/presentation/protocols/http';
import { MissingParamError } from '@/presentation/errors/missing-param-error';
import { badRequest } from '@/presentation/helpers/http-helper';
import { Controller } from '../protocols/controller';
export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse | any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
};
