import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRetiroDto } from './dto/create-retiro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Retiro } from './schemes/Retiro.scheme';
import { Model } from 'mongoose';
import { AccountsService } from '../accounts.service';
import { NotFoundError } from 'rxjs';
import { esFormable } from 'src/common/esFormable';

@Injectable()
export class RetiroService {
  constructor(@InjectModel(Retiro.name) private retiroModel: Model<Retiro>, private accountsService: AccountsService){}

  async create(createRetiroDto: CreateRetiroDto) {

    const account = await this.accountsService.findByRFID(createRetiroDto.RFID);

    if(!account)
      throw new NotFoundException('Account not found')

    if(account.Saldo < createRetiroDto.Cantidad)
      throw new BadRequestException('Mount exceds total')

    const formable = esFormable(createRetiroDto.Cantidad);

    if(!formable.esFormable)  
      throw new BadRequestException("Non formable cuantity")

    // Guardar en db
    account.Saldo -= createRetiroDto.Cantidad;
    account.save()

    const createdRetiro = new this.retiroModel(createRetiroDto);
    createdRetiro.save()
    if(!createdRetiro)
      throw new BadRequestException()

    return formable.billetes;
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
