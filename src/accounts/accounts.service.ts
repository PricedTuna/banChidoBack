import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schemes/Account.scheme';
import { Model } from 'mongoose';
import { accountConstants } from 'src/constants/constants';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

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

  findByNumber(accountNum: string) {
    return this.accountModel.findOne({ NumeroCuenta: accountNum }).exec();
  }

  findByUserId(userId: string) {
    return this.accountModel.findOne({ UserId: userId }).exec();
  }

  // ~~ Generator Functions
  async generateNewAccountValues(UserId: string): Promise<CreateAccountDto> {
    const newAccNumber = await this.generateRandomString(
      accountConstants.NumeroCuentaLength,
    );
    const newSaldo = accountConstants.SaldoInicial;

    const account: CreateAccountDto = {
      UserId,
      NumeroCuenta: newAccNumber,
      Saldo: newSaldo,
    };

    return account;
  }

  private async generateRandomString(strLength: number) {
    let newAccNumber = '';
    while (true) {
      newAccNumber = ''; // set it empty
      for (let i = 0; i < strLength; i++) {
        // generate accNum
        newAccNumber += Math.floor(Math.random() * 10);
      }

      if (await this.findByNumber(newAccNumber))
        // validate if exist an acc with that accNum
        continue;
      else return newAccNumber;
    }
  }
}
