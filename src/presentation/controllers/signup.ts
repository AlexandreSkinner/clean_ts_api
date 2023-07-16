import { HttpResponse, HttpRequest } from '@/presentation/protocols/http';
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    let httpResponse: HttpResponse;
    if (!httpRequest.body.name) {
      httpResponse = {
        statusCode: 400,
        body: Error('Missing param: name')
      };
      return httpResponse;
    }
    if (!httpRequest.body.email) {
      httpResponse = {
        statusCode: 400,
        body: Error('Missing param: email')
      };
      return httpResponse;
    }
    if (!httpRequest.body.password) {
      httpResponse = {
        statusCode: 400,
        body: Error('Missing param: password')
      };
      return httpResponse;
    }
  }
};
