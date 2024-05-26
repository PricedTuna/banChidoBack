import { Module } from '@nestjs/common';
import { RfidtokenService } from './rfidtoken.service';
import { RfidtokenController } from './rfidtoken.controller';
import { AccountsModule } from 'src/accounts/accounts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RFIDToken, RFIDTokenSchema } from './scheme/RFIDToken.scheme';

@Module({
  imports: [AccountsModule, 
    MongooseModule.forFeature([
      {
        name: RFIDToken.name,
        schema: RFIDTokenSchema,
      },
    ]),
  ],
  controllers: [RfidtokenController],
  providers: [RfidtokenService],
})
export class RfidtokenModule {}
