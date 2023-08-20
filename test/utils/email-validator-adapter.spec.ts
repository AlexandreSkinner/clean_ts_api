import { describe, test, expect, vitest } from 'vitest';
import { EmailValidatorAdapter } from '@/utils/email-validator-adapter';
import validator from 'validator';

vitest.doMock('validator', () => ({
  isEmail (): boolean {
    return true;
  }
}));

describe('EmailValidator Adapter', () => {
  test('Should return false if validator return false', () => {
    const sut = new EmailValidatorAdapter();
    vitest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const isValid = sut.isValid('invalid_email@mail.com');
    expect(isValid).toBe(false);
  });

  test('Should return true if validator return true', () => {
    const sut = new EmailValidatorAdapter();
    const isValid = sut.isValid('valid_email@mail.com');
    expect(isValid).toBe(true);
  });

  test('Should call validator with correct email', () => {
    const sut = new EmailValidatorAdapter();
    const isEmailSpy = vitest.spyOn(validator, 'isEmail');
    sut.isValid('any_email@mail.com');
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com');
  });
});
