import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Doctor } from 'src/doctors/schemas/doctor.schema';

export type TreatmentDocument = HydratedDocument<Treatment>;

@Schema()
export class Treatment {
  @Prop()
  start: Date;

  @Prop()
  end: Date;

  @Prop()
  name: string;

  @Prop()
  code: string;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'})
  doctor: Doctor;
}

export const TreatmentSchema = SchemaFactory.createForClass(Treatment);