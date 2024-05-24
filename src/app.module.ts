import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { RstModule } from './rst/rst.module';
import { BilletesModule } from './billetes/billetes.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TransferModule } from './accounts/transfer/transfer.module';
import { RetiroModule } from './accounts/retiro/retiro.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_CONNECTION_STRING
    ),
    AuthModule,
    TransferModule,
    RetiroModule,
    UsersModule,
    AccountsModule,
    RstModule,
    BilletesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
