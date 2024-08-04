export interface AppointmentDto {
  id?: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  department:
    | 'Cardiology'
    | 'Gynecology'
    | 'Psychotherapy'
    | 'Orthopedic'
    | 'Dental'
    | 'Orthopedic'
    | 'Dentist'
    | 'Gastrology'
    | 'Urology'
    | 'Neurology';
  date: string;
  doctorName: string;
  fees: number;
}
