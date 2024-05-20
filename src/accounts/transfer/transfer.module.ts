import { Module } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { TransferController } from './transfer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transfer, TransferSchema } from './schemes/Transfer.scheme';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Transfer.name,
        schema: TransferSchema,
      },
    ]),
  ],
  controllers: [TransferController],
  providers: [TransferService],
})
export class TransferModule {}
