import { Module } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { TreatmentsController } from './treatments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Treatment, TreatmentSchema } from './schemas/treatment.schema';
import { PatientsModule } from 'src/patients/patients.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Treatment.name, schema: TreatmentSchema }]), PatientsModule],
  controllers: [TreatmentsController],
  providers: [TreatmentsService]
})
export class TreatmentsModule {}
