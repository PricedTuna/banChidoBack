import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Retiro {
  @Prop({required: true})
  AccountId: string;

  @Prop({required: true})
  Cantidad: number;
}

export const RetiroSchema = SchemaFactory.createForClass(Retiro);