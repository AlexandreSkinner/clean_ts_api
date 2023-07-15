import { describe, test, expect } from 'vitest';
import { SignUpController } from '@/presentation/controllers/signup';

describe('SingUp Controller', () => {
  test('Sould return 400 if no name provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
