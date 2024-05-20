import { Injectable } from '@nestjs/common';
import { CreateBilleteDto } from './dto/create-billete.dto';
import { UpdateBilleteDto } from './dto/update-billete.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Billetes } from './scheme/billetes.scheme';
import { Model } from 'mongoose';

@Injectable()
export class BilletesService {
  constructor(@InjectModel(Billetes.name) private billetesModel: Model<Billetes>) {}

  create(createBilleteDto: CreateBilleteDto) {
    const billetesUser = new this.billetesModel(createBilleteDto);
    return billetesUser.save();
  }

  findAll() {
    return this.billetesModel.find().exec();
  }

  findOne(valor: number) {
    return this.billetesModel.findOne({ValorBillete: valor}).exec();
  }

  update(valor: number, updateBilleteDto: UpdateBilleteDto) {
    return this.billetesModel
      .findByIdAndUpdate(valor, updateBilleteDto, {
        new: true,
      })
      .exec();
  }

  remove(valor: number) {
    return this.billetesModel.findByIdAndDelete(valor).exec();
  }
}
