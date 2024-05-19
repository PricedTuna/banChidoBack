import { Module } from '@nestjs/common';
import { RstService } from './rst.service';
import { RstController } from './rst.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RstSchema, Rst } from './schemes/rst.scheme';

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
