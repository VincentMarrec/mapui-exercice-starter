import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Treatment } from 'src/treatments/schemas/treatment.schema';

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;
  
  @Prop({ type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Treatment'} ] })
  treatments: Treatment[];
}

export const PatientSchema = SchemaFactory.createForClass(Patient);