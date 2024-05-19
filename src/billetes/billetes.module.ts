import { Module } from '@nestjs/common';
import { BilletesService } from './billetes.service';
import { BilletesController } from './billetes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Billetes, BilletesSchema } from './scheme/Billetes.scheme';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Billetes.name,
        schema: BilletesSchema,
      },
    ]),
  ],
  controllers: [BilletesController],
  providers: [BilletesService],
})
export class BilletesModule {}
