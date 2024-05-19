import { Injectable } from '@nestjs/common';
import { CreateBilleteDto } from './dto/create-billete.dto';
import { UpdateBilleteDto } from './dto/update-billete.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Billetes } from './scheme/Billetes.scheme';
import { Model } from 'mongoose';

@Injectable()
export class BilletesService {
  constructor(@InjectModel(Billetes.name) private billetesModel: Model<Billetes>) {}

  create(createBilleteDto: CreateBilleteDto) {
    const billetesUser = new this.billetesModel(createBilleteDto);
    return billetesUser.save();

    return 'This action adds a new billete';
  }

  findAll() {
    return this.billetesModel.find().exec();

    return `This action returns all billetes`;
  }

  findOne(valor: number) {
    return this.billetesModel.findOne({ValorBillete: valor}).exec()

    return this.billetesModel.findById(valor).exec();

    return `This action returns a #${valor} billete`;
  }

  update(valor: number, updateBilleteDto: UpdateBilleteDto) {
    return this.billetesModel
      .findByIdAndUpdate(valor, updateBilleteDto, {
        new: true,
      })
      .exec();

    return `This action updates a #${valor} billete`;
  }

  remove(valor: number) {
    return this.billetesModel.findByIdAndDelete(valor).exec();

    return `This action removes a #${valor} billete`;
  }
}
