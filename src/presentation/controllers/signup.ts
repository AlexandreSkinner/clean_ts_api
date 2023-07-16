import { HttpResponse, HttpRequest } from '@/presentation/protocols/http';
import { MissingParamError } from '@/presentation/errors/missing-param-error';
import { badRequest } from '@/presentation/helpers/http-helper';
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse | any {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }
    if (!httpRequest.body.password) {
      return badRequest(new MissingParamError('password'));
    }
  }
};
