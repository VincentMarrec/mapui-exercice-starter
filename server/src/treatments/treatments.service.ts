import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
import { Treatment, TreatmentDocument } from './schemas/treatment.schema';
import { Patient, PatientDocument } from '../patients/schemas/patient.schema';
import { PatientsService } from 'src/patients/patients.service';

@Injectable()
export class TreatmentsService {
  constructor(@InjectModel(Treatment.name) private treatmentModel: Model<TreatmentDocument>, private patientsService: PatientsService) {}

  async findAll(): Promise<Treatment[]> {
    return this.treatmentModel.find().exec();
  }

  async create(createTreatmentDto: CreateTreatmentDto, patientId: mongoose.Types.ObjectId): Promise<Treatment> {
    const createdTreatment = new this.treatmentModel(createTreatmentDto);
    const treatment = await (await createdTreatment.save()).populate('doctor');
    await this.patientsService.addTreatment(patientId, treatment._id);
    return treatment;
  }

  async delete(id: string) {
    const deletedTreatment = await this.treatmentModel
      .findByIdAndRemove(id)
      .exec();
    return deletedTreatment;
  }
}
