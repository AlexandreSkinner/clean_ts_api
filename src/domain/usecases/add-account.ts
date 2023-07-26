import { AccountModel } from '@/domain/model/account';

export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add: (account: AddAccountModel) => AccountModel
}
