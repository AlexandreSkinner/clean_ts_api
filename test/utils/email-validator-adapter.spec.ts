import { describe, test, expect } from 'vitest';
import { EmailValidatorAdapter } from '@/utils/email-validator-adapter';

describe('EmailValidator Adapter', () => {
  test('Should return false if validator return false', () => {
    const sut = new EmailValidatorAdapter();
    const isValid = sut.isValid('invalid_email@mail.com');
    expect(isValid).toBe(false);
  });
});
