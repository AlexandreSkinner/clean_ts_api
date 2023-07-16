import { HttpResponse, HttpRequest } from '@/presentation/protocols/http';
import { MissingParamError } from '@/presentation/errors/missing-param-error';
import { badRequest } from '@/presentation/helpers/http-helper';
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse | any {
    const requiredFields = ['name', 'email', 'password'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
};
