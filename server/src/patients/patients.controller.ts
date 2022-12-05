import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientsService } from './patients.service';
import { Patient } from './schemas/patient.schema';

@Controller('api/patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Get()
    getPatients(): Promise<Patient[]> {
        return this.patientsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Patient> {
      return this.patientsService.findOne(id);
    }

    @Get('doctors/:id')
    getPatientsOfDoctor(@Param('id') id: string): Promise<Patient[]> {
        return this.patientsService.findAllPatientsOfDoctor(id);
    }
    
    @Post()
    async create(@Body() createPatientDto: CreatePatientDto) {
      return await this.patientsService.create(createPatientDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
      return this.patientsService.update(id, updatePatientDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.patientsService.delete(id);
    }

}
