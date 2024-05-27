import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class RFIDToken {
  @Prop({required: true})
  AccountId: string;

  @Prop({required: true})
  Token: string;

  @Prop({required: true})
  IsUsed: boolean;
}

export const RFIDTokenSchema = SchemaFactory.createForClass(RFIDToken);