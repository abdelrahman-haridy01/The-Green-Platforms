export interface PatientDto {
  id?: number;
  name: string;
  gender: 'Male' | 'Female';
  age: number;
  imageUrl?: string;
  phoneNumber: string;
  address: string;
  active: boolean;
}
