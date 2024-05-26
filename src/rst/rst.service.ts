import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRstDto } from './dto/create-rst.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rst } from './entities/rst.entity';
import { Model } from 'mongoose';
import { rstConstants } from 'src/constants/constants';
import { AccountsService } from 'src/accounts/accounts.service';
import { ConsumeTokenDto } from './dto/consume-token-dto';

@Injectable()
export class RstService {
  constructor(@InjectModel(Rst.name) private rstModel: Model<Rst>, private accountsService: AccountsService,){}

  async create(createRstDto: CreateRstDto) {
    const newToken = await this.generateRandomString(rstConstants.tokenLength)
    const createdRst = new this.rstModel({...createRstDto, Token: newToken, IsUsed: false});
    return createdRst.save();
  }

  findAll() {
    return this.rstModel.find().exec();
  }

  findOne(id: string) {
    return this.rstModel.findById(id).exec();
  }

  findByToken(token: string) {
    return this.rstModel.findOne({Token: token}).exec()
  }

  async consumeToken(consumeTokenDto: ConsumeTokenDto){
    const token = await this.findByToken(consumeTokenDto.Token);
    
    if(!token)
      throw new NotFoundException()

    const userFromToken = await this.accountsService.findOne(token.AccountId);

    if(!token)
      throw new NotFoundException()

    const formable = esFormable(token.Cantidad);

    if (!formable.esFormable)
      throw new BadRequestException("Non formable cuantity")



    userFromToken.Saldo -= token.Cantidad;
    token.IsUsed = true;

    userFromToken.save()
    token.save()


    return formable.billetes;

  }




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
