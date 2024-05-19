import { Injectable } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transfer } from './schemes/transfer.scheme';
import { Model } from 'mongoose';

@Injectable()
export class TransferService {
  constructor(@InjectModel(Transfer.name) private transferModel: Model<Transfer>){}

  create(createTransferDto: CreateTransferDto) {
    const createdTransfer = new this.transferModel(createTransferDto);
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
