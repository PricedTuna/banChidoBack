import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Billetes {
  @Prop({required: true})
  ValorBillete: number;
  
  @Prop({required: true})
  Cantidad: number;
}

export const BilletesSchema = SchemaFactory.createForClass(Billetes);