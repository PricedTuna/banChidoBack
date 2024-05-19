import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
  @Prop({required: true})
  Nombres: string;

  @Prop({required: true})
  Apellido1: string;

  @Prop({required: true})
  Apellido2: string;

  @Prop({required: true})
  Correo: string;

  @Prop({required: true})
  Password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);