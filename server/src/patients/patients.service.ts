import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Treatment, TreatmentDocument } from 'src/treatments/schemas/treatment.schema';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './schemas/patient.schema';

@Injectable()
export class PatientsService {
    constructor(@InjectModel(Patient.name) private patientModel: Model<PatientDocument>, @InjectModel(Treatment.name) private treatmentModel: Model<TreatmentDocument>) {}
  
    async findAll(): Promise<Patient[]> {
      return this.patientModel.find().exec();
    }

    async findOne(id: string) {
      return this.patientModel.findById(id).populate({
        path: 'treatments',
        populate: {
          path: 'doctor'
        }
      }).exec();
    }

    async findAllPatientsOfDoctor(id: string): Promise<Patient[]> {
      const treatments = await this.treatmentModel.find({doctor: id}); // Pourrait certainement être mieux fait, mais j'ai préféré avoir quelque chose qui fonctionne pour pouvoir continuer
      return this.patientModel
        .find({'treatments': { $in: treatments } })
        .populate({
          path: 'treatments',
          populate: {
            path: 'doctor'
          }
        })
        .exec();
    }

    async create(createPatientDto: CreatePatientDto): Promise<Patient> {
      const createdPatient = new this.patientModel(createPatientDto);
      return createdPatient.save();
    }

    async update(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient> {
      const updatedPatient = await this.patientModel
        .findByIdAndUpdate(id, updatePatientDto, { new: true })
      return updatedPatient;
    }

    async delete(id: string) {
      const deletedPatient = await this.patientModel
        .findByIdAndRemove(id)
        .exec();
      return deletedPatient;
    }

    async addTreatment(id: mongoose.Types.ObjectId, treatment: mongoose.Types.ObjectId): Promise<Patient> {
      const updatedPatient = await this.patientModel
        .findByIdAndUpdate(id, {$addToSet: {treatments: treatment}}, { new: true })
      return updatedPatient;
    }
}
