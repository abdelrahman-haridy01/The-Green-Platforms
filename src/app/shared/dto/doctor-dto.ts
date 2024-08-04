export interface DoctorDto {
  id?: string;
  name: string;
  gender: 'Male' | 'Female';
  speciality: string;
  imageUrl?: string;
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
  phoneNumber: string;
  address: string;
  active: boolean;
}
