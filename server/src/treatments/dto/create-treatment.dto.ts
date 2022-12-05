import mongoose from "mongoose";

export class CreateTreatmentDto {
    readonly start: Date;
    readonly end: Date;
    readonly name: string;
    readonly code: string;
    readonly doctor: mongoose.Schema.Types.ObjectId;
}
