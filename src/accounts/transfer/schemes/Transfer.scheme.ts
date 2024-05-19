import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Transfer {
  @Prop({required: true})
  AccountOrigenId: string;

  @Prop({required: true})
  AccountDestinoiId: string;

  @Prop({required: true})
  Cantidad: number;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);