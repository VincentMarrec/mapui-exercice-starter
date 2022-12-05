import { Doctor } from "./Doctor.model";

export class Treatment {
    _id: string;
    start: Date;
    end: Date;
    name: string;
    code: string;
    doctor: Doctor;
}