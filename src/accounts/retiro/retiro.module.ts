import { Module } from '@nestjs/common';
import { RetiroService } from './retiro.service';
import { RetiroController } from './retiro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Retiro, RetiroSchema } from './schemes/Retiro.scheme';
import { TransferModule } from '../transfer/transfer.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Retiro.name,
        schema: RetiroSchema,
      },
    ]),
  ],
  controllers: [RetiroController],
  providers: [RetiroService],
})
export class RetiroModule {}
