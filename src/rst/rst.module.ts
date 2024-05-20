import { Module } from '@nestjs/common';
import { RstService } from './rst.service';
import { RstController } from './rst.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rst } from './entities/rst.entity';
import { RstSchema } from './schemes/Rst.scheme';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Rst.name,
        schema: RstSchema,
      },
    ]),
  ],
  controllers: [RstController],
  providers: [RstService],
})
export class RstModule {}
