import { Treatment } from "./Treatment.model";

export class Patient {
    _id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    treatments: Treatment[];
}