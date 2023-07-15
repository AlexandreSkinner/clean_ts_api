export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: Error('Missing param: name')
      };
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: Error('Missing param: email')
      };
    }
  }
};
