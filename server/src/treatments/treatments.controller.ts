import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { Treatment } from './schemas/treatment.schema';
import mongoose from 'mongoose';

@Controller('api/treatments')
export class TreatmentsController {
  constructor(private readonly treatmentsService: TreatmentsService) {}

  @Get()
  getTreatments(): Promise<Treatment[]> {
      return this.treatmentsService.findAll();
  }
  
  @Post()
  async create(@Body('treatment') createTreatmentDto: CreateTreatmentDto, @Body('patient') patientId: mongoose.Types.ObjectId) {
    return await this.treatmentsService.create(createTreatmentDto, patientId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.treatmentsService.delete(id);
  }
}
