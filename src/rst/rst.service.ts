import { Injectable } from '@nestjs/common';
import { CreateRstDto } from './dto/create-rst.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rst } from './entities/rst.entity';
import { Model } from 'mongoose';
import { rstConstants } from 'src/constants/constants';

@Injectable()
export class RstService {
  constructor(@InjectModel(Rst.name) private rstModel: Model<Rst>){}

  async create(createRstDto: CreateRstDto) {
    const newToken = await this.generateRandomString(rstConstants.tokenLength)
    const createdRst = new this.rstModel({...createRstDto, Token: newToken});
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
