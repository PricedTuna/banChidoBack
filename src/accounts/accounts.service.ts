import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schemes/Account.scheme';
import { Model } from 'mongoose';
import { accountConstants } from 'src/constants/constants';
import { UsersService } from 'src/users/users.service';
import { AddRFIDDto } from './dto/add-rfid-dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    private usersService: UsersService,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }

  async addRFID(addRFIDDto: AddRFIDDto){
    const account = await this.findOne(addRFIDDto.AccountId);
    
    if(!account)
      throw new NotFoundException()

    account.RFID = addRFIDDto.RFID;
    return account.save();
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

  async findUserByNumAcc(accountNum: string){
    const account = await this.findByNumber(accountNum);
    
    if(!account)
      throw new BadRequestException();

    console.log(account);
    const user = (await this.usersService.findOne(account.UserId)).toObject();

    return {
      user: {
        _id:        user._id,
        Nombres:    user.Nombres,
        Apellido1:  user.Apellido1,
        Apellido2:  user.Apellido2,
      },
      account: {
        _id:          account.id,
        numeroCuenta: account.NumeroCuenta
      }
    }

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
