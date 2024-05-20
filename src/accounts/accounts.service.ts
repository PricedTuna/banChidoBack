import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schemes/Account.scheme';
import { Model } from 'mongoose';

@Injectable()
export class AccountsService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>){}

  create(createAccountDto: CreateAccountDto) {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }

  findAll() {
    return this.accountModel.find().exec();
  }

  findOne(id: string) {
    return this.accountModel.findById(id).exec();
  }

  findByNumber(accountNum: string){
    return this.accountModel.findOne({NumeroCuenta: accountNum}).exec()
  }

  findByUserId(userId: string){
    return this.accountModel.findOne({UserId: userId}).exec()
  }
}
