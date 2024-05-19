import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Account {
  @Prop({required: true})
  NumeroCuenta: string;

  @Prop({required: false})
  RFID?: string;

  @Prop({required: true})
  Saldo: number;

  @Prop({required: true})
  UserId: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);