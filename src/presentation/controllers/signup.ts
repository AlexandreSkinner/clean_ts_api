export class SignUpController {
  handle (httpRequest: any): any {
    return {
      statusCode: 400,
      body: Error('Missing param: name')
    };
  }
};
