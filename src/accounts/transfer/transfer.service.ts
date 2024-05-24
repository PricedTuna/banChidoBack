import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transfer } from './schemes/Transfer.scheme'; 
import { Model } from 'mongoose';
import { AccountsService } from '../accounts.service';

@Injectable()
export class TransferService {
  constructor(@InjectModel(Transfer.name) private transferModel: Model<Transfer>, private accountsService: AccountsService){}

  async create({AccountDestinoiId, AccountOrigenId, Cantidad}: CreateTransferDto) {

    const accFrom = await this.accountsService.findOne(AccountOrigenId);

    const accTo = await this.accountsService.findOne(AccountDestinoiId);

    if(!accFrom || !accTo)
      throw new UnauthorizedException();

    accFrom.Saldo -= Cantidad;
    accTo.Saldo += Cantidad;

    // Guardar las cuentas actualizadas en la base de datos
    await accFrom.save();
    await accTo.save();

    const createdTransfer = new this.transferModel({AccountDestinoiId, AccountOrigenId, Cantidad});
    return createdTransfer.save();
  }

  findAll() {
    return this.transferModel.find().exec();
  }

  findOne(id: string) {
    return this.transferModel.findById(id).exec();
  }

  findByAccountOriginId(accountId: string){
    return this.transferModel.find({AccountOrigenId: accountId}).exec()
  }

  findByAccountDestinationId(accountId: string){
    return this.transferModel.find({AccountDestinoiId: accountId}).exec()
  }


}
