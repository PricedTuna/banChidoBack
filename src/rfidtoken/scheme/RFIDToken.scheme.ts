import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class RFIDToken {
  @Prop({required: true})
  AccountId: string;

  @Prop({required: true})
  RFID: string;

  @Prop({required: true})
  Token: string;
}

export const RFIDTokenSchema = SchemaFactory.createForClass(RFIDToken);