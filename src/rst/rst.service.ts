import { Injectable } from '@nestjs/common';
import { CreateRstDto } from './dto/create-rst.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rst } from './entities/rst.entity';
import { Model } from 'mongoose';

@Injectable()
export class RstService {
  constructor(@InjectModel(Rst.name) private rstModel: Model<Rst>){}

  create(createRstDto: CreateRstDto) {
    const createdRst = new this.rstModel(createRstDto);
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
}
