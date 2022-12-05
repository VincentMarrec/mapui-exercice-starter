import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DoctorDocument = HydratedDocument<Doctor>;

@Schema()
export class Doctor {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  speciality: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);