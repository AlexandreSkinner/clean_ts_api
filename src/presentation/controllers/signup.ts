import { HttpResponse, HttpRequest } from '@/presentation/protocols/http';
import { MissingParamError } from '@/presentation/errors/missing-param-error';
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse | any {
    let httpResponse: HttpResponse;
    if (!httpRequest.body.name) {
      httpResponse = {
        statusCode: 400,
        body: new MissingParamError('name')
      };
      return httpResponse;
    }
    if (!httpRequest.body.email) {
      httpResponse = {
        statusCode: 400,
        body: new MissingParamError('email')
      };
      return httpResponse;
    }
    if (!httpRequest.body.password) {
      httpResponse = {
        statusCode: 400,
        body: new MissingParamError('password')
      };
      return httpResponse;
    }
  }
};
