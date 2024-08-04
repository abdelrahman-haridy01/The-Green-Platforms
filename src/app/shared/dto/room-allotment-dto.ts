export interface RoomAllotmentDto {
  id?: number;
  parientName: string;
  doctorName: string;
  roomNumber: number;
  roomType: 'ICU' | 'General' | 'AC Room';
  status: 'Not Discharged' | 'Not Alloted' | 'Available';
  allotmentDate: string;
  dischargeDate: string;
  discount?: string;
  total?: string;
}
