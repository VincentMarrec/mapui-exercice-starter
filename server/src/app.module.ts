import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { TreatmentsModule } from './treatments/treatments.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
    imports: [PatientsModule, TreatmentsModule, DoctorsModule, MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest')],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
