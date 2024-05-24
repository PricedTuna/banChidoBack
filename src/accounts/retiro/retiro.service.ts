import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRetiroDto } from './dto/create-retiro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Retiro } from './schemes/Retiro.scheme';
import { Model } from 'mongoose';
import { AccountsService } from '../accounts.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class RetiroService {
  constructor(@InjectModel(Retiro.name) private retiroModel: Model<Retiro>, private accountsService: AccountsService){}

  async create(createRetiroDto: CreateRetiroDto) {

    const account = await this.accountsService.findOne(createRetiroDto.AccountId);

    if(!account)
      throw new NotFoundException('Account not found')

    if(account.Saldo < createRetiroDto.Cantidad)
      throw new NotFoundException('Mount exceds total')


    // Guardar en db
    account.Saldo -= createRetiroDto.Cantidad;
    account.save()

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
