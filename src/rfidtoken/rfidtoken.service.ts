import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRfidtokenDto } from './dto/create-rfidtoken.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountsService } from 'src/accounts/accounts.service';
import { rfidTokenConstants } from 'src/constants/constants';
import { ConsumeTokenRfidDto } from './dto/consume-token.dto';
import { RFIDToken } from './scheme/RFIDToken.scheme';
import { ValidateTokenDto } from './dto/validate-token';
import { validate } from 'class-validator';

@Injectable()
export class RfidtokenService {
  constructor(
    @InjectModel(RFIDToken.name) private rfidTokenModel: Model<RFIDToken>,
    private accountsService: AccountsService,
  ) {}

  async create(createRfidtokenDto: CreateRfidtokenDto) {
    const newToken = await this.generateRandomString(
      rfidTokenConstants.tokenLength,
    );

    const createdRFIDToken = new this.rfidTokenModel({
      AccountId: createRfidtokenDto.AccountId,
      Token: newToken,
      IsUsed: false,
    });
    
    createdRFIDToken.save();

    return {Token: createdRFIDToken.Token}
  }

  findAll() {
    return `This action returns all rfidtoken`;
  }

  findOne(id: string) {
    return `This action returns a #${id} rfidtoken`;
  }

  findByToken(token: string) {
    return this.rfidTokenModel.findOne({ Token: token }).exec();
  }

  async validateToken(validateTokenDto: ValidateTokenDto){
    const token = await this.findByToken(validateTokenDto.Token);

    if (!token) throw new NotFoundException('Token not found');

    const isUsed = token.IsUsed

    if(isUsed)
      throw new BadRequestException("token already used")
    else
      return token;

  }

  async getUserFromToken(validateTokenDto: ValidateTokenDto){
    const token = await this.findByToken(validateTokenDto.Token);

    if (!token) throw new NotFoundException('Token not found');

    const accFromToken = await this.accountsService.findOne(token.AccountId);

    if (!accFromToken) throw new NotFoundException('Account not found');

    return accFromToken;
  }

  async consumeToken(consumeTokenDto: ConsumeTokenRfidDto) {

    const token = await this.validateToken({Token: consumeTokenDto.Token});

    if(!token)
      throw new BadRequestException("token already used")

    const accFromToken = await this.getUserFromToken({...consumeTokenDto});

    if(!accFromToken)
      throw new NotFoundException("Account not found")

    accFromToken.RFID = consumeTokenDto.RFID;
    token.IsUsed = true;
    
    accFromToken.save();
    token.save();

    return true;
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
