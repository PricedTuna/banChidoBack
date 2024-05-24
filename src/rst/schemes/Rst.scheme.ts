import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Rst {
  @Prop({required: true})
  Token: string;
  @Prop({required: true})
  Cantidad: number;
  @Prop({required: true})
  AccountId: string;
}

export const RstSchema = SchemaFactory.createForClass(Rst);