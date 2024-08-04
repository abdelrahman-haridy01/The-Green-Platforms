export interface PaymentDto {
  id?: number;
  parientName: string;
  doctorName: string;
  parientEmail: string;
  date: string;
  charges: number;
  tax: number;
  discount: number;
  total: number;
  status: 'Paid' | 'Unpaid';
}
