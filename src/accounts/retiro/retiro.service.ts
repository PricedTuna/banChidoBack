import { Injectable } from '@nestjs/common';
import { CreateRetiroDto } from './dto/create-retiro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Retiro } from './schemes/Retiro.scheme';
import { Model } from 'mongoose';

@Injectable()
export class RetiroService {
  constructor(@InjectModel(Retiro.name) private retiroModel: Model<Retiro>){}

  create(createRetiroDto: CreateRetiroDto) {
    const createdRetiro = new this.retiroModel(createRetiroDto);
    return createdRetiro.save();
  }

  findAll() {
    return this.retiroModel.find().exec();
  }

  findOne(id: string) {
    return this.retiroModel.findById(id).exec();
  }

  findByAccount(id: string) {
    return this.retiroModel.find({AccountId: id}).exec()
  }
}
