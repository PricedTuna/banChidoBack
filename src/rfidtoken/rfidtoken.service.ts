import { Injectable } from '@nestjs/common';
import { CreateRfidtokenDto } from './dto/create-rfidtoken.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RFIDToken } from './scheme/RFIDToken.scheme';
import { Model } from 'mongoose';
import { AccountsService } from 'src/accounts/accounts.service';
import { rfidTokenConstants } from 'src/constants/constants';

@Injectable()
export class RfidtokenService {

  constructor(@InjectModel(RFIDToken.name) private rfidTokenModel: Model<RFIDToken>, private accountsService: AccountsService){}

  async create(createRfidtokenDto: CreateRfidtokenDto) {
    const rfidToken = await this.generateRandomString(rfidTokenConstants.tokenLength);
    const createdToken = new this.rfidTokenModel({...createRfidtokenDto, Token: rfidToken, IsUsed: false});
    return createdToken.save();
  }

  findAll() {
    return `This action returns all rfidtoken`;
  }

  findOne(id: string) {
    return `This action returns a #${id} rfidtoken`;
  }

  findByToken(token: string) {
    return this.rfidTokenModel.findOne({Token: token}).exec()
  }

  // Helper
  private async generateRandomString(strLength: number) {
    let newToken = '';
    while (true) {
      newToken = ''; // set it empty
      for (let i = 0; i < strLength; i++) {
        // generate token
        newToken += Math.floor(Math.random() * 10);
      }

      if (await this.findByToken(newToken))
        // validate if exist a token with that token
        continue;
      else return newToken;
    }
  }
}
