import { CustomerDto } from './dto/customer-dto';
import { AppointmentDto } from './dto/appointment-dto';
import { DoctorDto } from './dto/doctor-dto';
import { PatientDto } from './dto/patient-dto';
import { StaffDto } from './dto/staff-dto';
import { RoomAllotmentDto } from './dto/room-allotment-dto';
import { PaymentDto } from './dto/payment-dto';
import { DepartmentDto } from './dto/department-dto';
export const ELEMENT_DATA: CustomerDto[] = [
  {
    key: '001',
    active: true,
    address: '6649 N Blue Gum St',
    email: 'jbutt@gmail.com',
    job: 'Developer',
    name: 'James Butt',
    phoneNumber: '504-621-8927'
  },
  {
    key: '002',
    active: false,
    address: '4 B Blue Ridge Blvd',
    email: 'josephine_darakjy@darakjy.org',
    job: 'Designer',
    name: 'Josephine Darakjy',
    phoneNumber: '4 B Blue Ridge Blvd'
  },
  {
    key: '003',
    active: true,
    address: '8 W Cerritos Ave #54',
    email: 'art@venere.org',
    job: 'UI Developer',
    name: 'Art Venere',
    phoneNumber: '856-264-4130'
  },
  {
    key: '004',
    active: false,
    address: '639 Main St',
    email: 'lpaprocki@hotmail.com',
    job: 'UX designer',
    name: 'Lenna Paprocki\t',
    phoneNumber: '907-385-4412'
  },
  {
    key: '005',
    active: true,
    address: '34 Center St',
    email: 'donette.foller@cox.net',
    job: 'Frontend',
    name: 'Donette Foller',
    phoneNumber: '513-570-1893'
  },
  {
    key: '006',
    active: true,
    address: '3 Mcauley Dr\t',
    email: 'simona@morasca.com',
    job: 'Backend developer',
    name: 'Simona Morasca',
    phoneNumber: '419-503-2484'
  },
  {
    key: '007',
    active: true,
    address: '7 Eads St',
    email: 'mitsue_tollner@yahoo.com',
    job: 'Mobile developer',
    name: 'Mitsue Tollner',
    phoneNumber: '773-573-6914'
  },
  {
    key: '008',
    active: true,
    address: '7 Eads St',
    email: 'abharwork@yahoo.com',
    job: 'Software developer',
    name: 'Mitsue Tollner',
    phoneNumber: '773-573-6914'
  }
];
export const departmentList = [
  'Cardiology',
  'Gynecology',
  'Psychotherapy',
  'Orthopedic',
  'Dental',
  'Orthopedic',
  'Dentist',
  'Gastrology',
  'Urology',
  'Neurology'
];

export const roomTypeList = [
  'ICU' , 'General' ,'AC Room'
];
export const roomStatusList = [
  'Not Discharged', 'Not Alloted', 'Available'
];
export const APPOINTMENTS_DATA: AppointmentDto[] = [
  {
    id: 1,
    name: 'Kerrie Gerrish',
    age: 26,
    gender: 'Female',
    department: 'Cardiology',
    date: '9/2/2023',
    doctorName: 'Jessy Georghiou',
    fees: 92
  },
  {
    id: 2,
    name: 'Nathanael Dietz',
    age: 45,
    gender: 'Male',
    department: 'Dental',
    date: '8/14/2022',
    doctorName: 'Bil Peacey',
    fees: 258
  },
  {
    id: 3,
    name: 'Costanza Fransson',
    age: 44,
    gender: 'Female',
    department: 'Dentist',
    date: '7/7/2023',
    doctorName: 'Ilka Osbidston',
    fees: 189
  },
  {
    id: 4,
    name: 'Goober Boyce',
    age: 33,
    gender: 'Male',
    department: 'Gastrology',
    date: '9/10/2022',
    doctorName: 'Eduardo Flavelle',
    fees: 264
  },
  {
    id: 5,
    name: 'Dollie Juggings',
    age: 35,
    gender: 'Female',
    department: 'Gynecology',
    date: '1/25/2023',
    doctorName: 'Neilla Casa',
    fees: 269
  },
  {
    id: 6,
    name: 'Patrizio Mattheeuw',
    age: 25,
    gender: 'Male',
    department: 'Neurology',
    date: '2/10/2023',
    doctorName: 'Cullen Forcer',
    fees: 182
  },
  {
    id: 7,
    name: 'Cleveland Caldecot',
    age: 54,
    gender: 'Male',
    department: 'Orthopedic',
    date: '9/9/2023',
    doctorName: 'Cedric Bernaldez',
    fees: 186
  },
  {
    id: 8,
    name: 'Nickolas Serginson',
    age: 51,
    gender: 'Male',
    department: 'Psychotherapy',
    date: '1/28/2023',
    doctorName: 'Mose Corkhill',
    fees: 251
  },
  {
    id: 9,
    name: 'Steffi Buckwell',
    age: 42,
    gender: 'Female',
    department: 'Urology',
    date: '12/14/2022',
    doctorName: "Legra D'Alesio",
    fees: 236
  },
  {
    id: 10,
    name: 'Feliks Whitesel',
    age: 21,
    gender: 'Male',
    department: 'Cardiology',
    date: '3/16/2023',
    doctorName: 'Fraze McGann',
    fees: 58
  },
  {
    id: 11,
    name: 'Cordell Buttfield',
    age: 64,
    gender: 'Male',
    department: 'Dental',
    date: '1/2/2023',
    doctorName: 'Solomon Grimmett',
    fees: 63
  },
  {
    id: 12,
    name: 'Jo Dobrowlski',
    age: 16,
    gender: 'Female',
    department: 'Dental',
    date: '5/13/2023',
    doctorName: 'Jessica Dusting',
    fees: 23
  },
  {
    id: 13,
    name: 'Nowell Lifton',
    age: 78,
    gender: 'Male',
    department: 'Dentist',
    date: '6/11/2022',
    doctorName: 'Culver Hadwin',
    fees: 189
  },
  {
    id: 14,
    name: 'Clovis Simeonov',
    age: 53,
    gender: 'Female',
    department: 'Dentist',
    date: '4/28/2023',
    doctorName: 'Lynde Tremble',
    fees: 97
  },
  {
    id: 15,
    name: 'Sacha Berzen',
    age: 78,
    gender: 'Female',
    department: 'Gastrology',
    date: '12/28/2022',
    doctorName: 'Elsinore Mercik',
    fees: 171
  },
  {
    id: 16,
    name: 'Didi Fearneley',
    age: 44,
    gender: 'Female',
    department: 'Gynecology',
    date: '12/24/2022',
    doctorName: 'Wenona Windsor',
    fees: 200
  },
  {
    id: 17,
    name: 'Vicki Coultar',
    age: 28,
    gender: 'Female',
    department: 'Gynecology',
    date: '7/24/2022',
    doctorName: 'Augusta Machan',
    fees: 181
  },
  {
    id: 18,
    name: 'Connor Woolpert',
    age: 47,
    gender: 'Male',
    department: 'Neurology',
    date: '7/24/2023',
    doctorName: 'Saul Bowgen',
    fees: 216
  },
  {
    id: 19,
    name: 'Debera Meneely',
    age: 71,
    gender: 'Female',
    department: 'Orthopedic',
    date: '11/4/2022',
    doctorName: 'Rosaleen Huffy',
    fees: 198
  },
  {
    id: 20,
    name: 'Annamarie Mitchenson',
    age: 14,
    gender: 'Female',
    department: 'Orthopedic',
    date: '3/17/2023',
    doctorName: 'Vivienne Wettern',
    fees: 246
  },
  {
    id: 21,
    name: 'Ware Craney',
    age: 41,
    gender: 'Male',
    department: 'Orthopedic',
    date: '9/21/2022',
    doctorName: 'Royall Treuge',
    fees: 148
  },
  {
    id: 22,
    name: 'Gennifer Karchewski',
    age: 68,
    gender: 'Female',
    department: 'Orthopedic',
    date: '6/2/2022',
    doctorName: 'Phelia McGilvray',
    fees: 181
  },
  {
    id: 23,
    name: 'Tallulah Rivard',
    age: 26,
    gender: 'Female',
    department: 'Orthopedic',
    date: '2/12/2023',
    doctorName: 'Dore Sloyan',
    fees: 182
  },
  {
    id: 24,
    name: 'Weylin von Grollmann',
    age: 72,
    gender: 'Male',
    department: 'Psychotherapy',
    date: '7/9/2022',
    doctorName: 'Ezri Gaddie',
    fees: 219
  },
  {
    id: 25,
    name: 'Justis Cherryman',
    age: 67,
    gender: 'Male',
    department: 'Urology',
    date: '6/16/2022',
    doctorName: 'Jonathon Passo',
    fees: 64
  }
];

export const DOCTORS_DATA: DoctorDto[] = [{
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Lowrance Sturge",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/omnisvoluptateseaque.png?size=50x50&set=set1",
  "phoneNumber": "310-543-3112",
  "address": "Room 550",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Fred Petruskevich",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/exercitationemvoluptasreiciendis.png?size=50x50&set=set1",
  "phoneNumber": "601-267-9601",
  "address": "Room 407",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Emlyn Lurriman",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/doloremqueeligendivoluptas.png?size=50x50&set=set1",
  "phoneNumber": "906-936-6317",
  "address": "3rd Floor",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Lilyan Ducker",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/etvitaecupiditate.png?size=50x50&set=set1",
  "phoneNumber": "935-729-4056",
  "address": "PO Box 1842",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Brok Iozefovich",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/omniscumqueomnis.png?size=50x50&set=set1",
  "phoneNumber": "829-371-3060",
  "address": "Suite 87",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Petronilla Maddie",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/uteossed.png?size=50x50&set=set1",
  "phoneNumber": "887-280-6323",
  "address": "Room 1641",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Bernete Sindle",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/perferendisvelvoluptas.png?size=50x50&set=set1",
  "phoneNumber": "222-723-6054",
  "address": "Room 1351",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Obed Conrath",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/cumqueablibero.png?size=50x50&set=set1",
  "phoneNumber": "851-770-4417",
  "address": "Suite 49",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Cchaddie Depport",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/magnamatquo.png?size=50x50&set=set1",
  "phoneNumber": "833-821-3971",
  "address": "14th Floor",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Daria Mitie",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/eossuntquia.png?size=50x50&set=set1",
  "phoneNumber": "128-460-9599",
  "address": "PO Box 29528",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Silvan Percy",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/oditquibusdamsimilique.png?size=50x50&set=set1",
  "phoneNumber": "520-734-4873",
  "address": "Room 456",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Elena Anstead",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/commodiestest.png?size=50x50&set=set1",
  "phoneNumber": "672-298-1754",
  "address": "Room 871",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Lonnie Biswell",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/quoetincidunt.png?size=50x50&set=set1",
  "phoneNumber": "448-777-7954",
  "address": "Suite 48",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Huey Yukhnini",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/omnisafugit.png?size=50x50&set=set1",
  "phoneNumber": "335-662-2396",
  "address": "Suite 42",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Clem Wessel",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/solutaquoexpedita.png?size=50x50&set=set1",
  "phoneNumber": "514-139-8433",
  "address": "Apt 339",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Harman Chiverton",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/aliquidnonharum.png?size=50x50&set=set1",
  "phoneNumber": "805-683-9219",
  "address": "10th Floor",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Cathyleen Tranfield",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/doloremvoluptatemlaborum.png?size=50x50&set=set1",
  "phoneNumber": "963-257-9740",
  "address": "Suite 94",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Addy Grievson",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/sapientedignissimositaque.png?size=50x50&set=set1",
  "phoneNumber": "882-675-0191",
  "address": "PO Box 28071",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Ardene Millington",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/cumaperiamquasi.png?size=50x50&set=set1",
  "phoneNumber": "574-784-7290",
  "address": "1st Floor",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Horatius Stonhewer",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/quiaofficiisfacilis.png?size=50x50&set=set1",
  "phoneNumber": "229-704-7967",
  "address": "PO Box 11240",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Ashia Lymer",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/utnonlabore.png?size=50x50&set=set1",
  "phoneNumber": "307-174-3657",
  "address": "12th Floor",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Elianore Sprull",
  "gender": "Female",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/rerumetquas.png?size=50x50&set=set1",
  "phoneNumber": "161-561-2266",
  "address": "7th Floor",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Norton Milne",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/doloresrationeut.png?size=50x50&set=set1",
  "phoneNumber": "114-617-1942",
  "address": "Suite 1",
  "active": true
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Jameson Gagen",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/inciduntesteaque.png?size=50x50&set=set1",
  "phoneNumber": "165-853-6863",
  "address": "Suite 63",
  "active": false
}, {
  "id": "dd74a6d8-1a52-581c-8a96-f8abd8c749c0",
  "name": "Alyosha Dmitrienko",
  "gender": "Male",
  "speciality": "Psychotherapy",
  "department": "Urology",
  "imageUrl": "https://robohash.org/estexercitationemeveniet.png?size=50x50&set=set1",
  "phoneNumber": "220-111-6447",
  "address": "Apt 15",
  "active": false
}]

export const PATIENT_DATA: PatientDto[] = [{
  "id": 1,
  "name": "Minne Ubanks",
  "gender": "Female",
  "age": 8,
  "imageUrl": "http://dummyimage.com/219x83.png/dddddd/000000",
  "phoneNumber": "898-146-0399",
  "address": "96 Hermina Pass",
  "active": false
}, {
  "id": 2,
  "name": "Teressa Woolnough",
  "gender": "Female",
  "age": 66,
  "imageUrl": "http://dummyimage.com/216x60.png/5fa2dd/ffffff",
  "phoneNumber": "185-313-7762",
  "address": "7 Pleasure Center",
  "active": false
}, {
  "id": 3,
  "name": "Irvin Hailston",
  "gender": "Male",
  "age": 60,
  "imageUrl": "http://dummyimage.com/123x80.png/5fa2dd/ffffff",
  "phoneNumber": "653-366-6651",
  "address": "3 Hansons Way",
  "active": true
}, {
  "id": 4,
  "name": "Kylen Marlon",
  "gender": "Female",
  "age": 58,
  "imageUrl": "http://dummyimage.com/134x70.png/cc0000/ffffff",
  "phoneNumber": "932-930-6822",
  "address": "418 Gateway Junction",
  "active": true
}, {
  "id": 5,
  "name": "Konstanze Tickel",
  "gender": "Female",
  "age": 7,
  "imageUrl": "http://dummyimage.com/118x100.png/dddddd/000000",
  "phoneNumber": "936-741-8441",
  "address": "7 Clove Plaza",
  "active": false
}, {
  "id": 6,
  "name": "Hi Fransemai",
  "gender": "Male",
  "age": 16,
  "imageUrl": "http://dummyimage.com/169x98.png/cc0000/ffffff",
  "phoneNumber": "701-911-0511",
  "address": "667 Warbler Center",
  "active": true
}, {
  "id": 7,
  "name": "Cesare Purtell",
  "gender": "Male",
  "age": 72,
  "imageUrl": "http://dummyimage.com/174x98.png/dddddd/000000",
  "phoneNumber": "979-286-2642",
  "address": "527 Fieldstone Drive",
  "active": true
}, {
  "id": 8,
  "name": "Nicola Bampforth",
  "gender": "Female",
  "age": 33,
  "imageUrl": "http://dummyimage.com/242x90.png/ff4444/ffffff",
  "phoneNumber": "208-202-7629",
  "address": "6023 New Castle Junction",
  "active": false
}, {
  "id": 9,
  "name": "Gualterio Matz",
  "gender": "Male",
  "age": 72,
  "imageUrl": "http://dummyimage.com/245x99.png/5fa2dd/ffffff",
  "phoneNumber": "167-420-5327",
  "address": "206 Becker Plaza",
  "active": true
}, {
  "id": 10,
  "name": "Gavra Kennon",
  "gender": "Female",
  "age": 16,
  "imageUrl": "http://dummyimage.com/192x79.png/ff4444/ffffff",
  "phoneNumber": "880-420-5842",
  "address": "1 Northwestern Hill",
  "active": false
}, {
  "id": 11,
  "name": "Giacobo Flobert",
  "gender": "Male",
  "age": 16,
  "imageUrl": "http://dummyimage.com/228x85.png/5fa2dd/ffffff",
  "phoneNumber": "293-101-9461",
  "address": "99 Jana Point",
  "active": true
}, {
  "id": 12,
  "name": "Leupold Gidden",
  "gender": "Male",
  "age": 5,
  "imageUrl": "http://dummyimage.com/161x71.png/cc0000/ffffff",
  "phoneNumber": "575-852-7731",
  "address": "7 Myrtle Avenue",
  "active": false
}, {
  "id": 13,
  "name": "Sarena Kettell",
  "gender": "Female",
  "age": 34,
  "imageUrl": "http://dummyimage.com/202x93.png/5fa2dd/ffffff",
  "phoneNumber": "573-660-1539",
  "address": "503 Lake View Alley",
  "active": false
}, {
  "id": 14,
  "name": "Hastie Djokic",
  "gender": "Male",
  "age": 78,
  "imageUrl": "http://dummyimage.com/109x69.png/dddddd/000000",
  "phoneNumber": "776-724-7750",
  "address": "241 Onsgard Center",
  "active": true
}, {
  "id": 15,
  "name": "Sibella Gould",
  "gender": "Female",
  "age": 78,
  "imageUrl": "http://dummyimage.com/89x85.png/dddddd/000000",
  "phoneNumber": "573-187-3582",
  "address": "143 Nobel Street",
  "active": true
}, {
  "id": 16,
  "name": "Mellisent Matushenko",
  "gender": "Female",
  "age": 58,
  "imageUrl": "http://dummyimage.com/72x66.png/ff4444/ffffff",
  "phoneNumber": "232-944-2623",
  "address": "763 Kennedy Hill",
  "active": true
}, {
  "id": 17,
  "name": "Ulrikaumeko Ridgley",
  "gender": "Female",
  "age": 37,
  "imageUrl": "http://dummyimage.com/121x77.png/cc0000/ffffff",
  "phoneNumber": "263-924-5980",
  "address": "59739 Oakridge Park",
  "active": true
}, {
  "id": 18,
  "name": "Willetta Werrett",
  "gender": "Female",
  "age": 32,
  "imageUrl": "http://dummyimage.com/140x72.png/dddddd/000000",
  "phoneNumber": "344-393-8226",
  "address": "1084 Jackson Place",
  "active": true
}, {
  "id": 19,
  "name": "Hartwell Bownde",
  "gender": "Male",
  "age": 73,
  "imageUrl": "http://dummyimage.com/217x50.png/5fa2dd/ffffff",
  "phoneNumber": "405-871-4722",
  "address": "47 Sunnyside Center",
  "active": true
}, {
  "id": 20,
  "name": "Sandye Ganter",
  "gender": "Female",
  "age": 16,
  "imageUrl": "http://dummyimage.com/139x74.png/cc0000/ffffff",
  "phoneNumber": "120-603-0327",
  "address": "99 Raven Point",
  "active": true
}, {
  "id": 21,
  "name": "Giorgio Scarlan",
  "gender": "Male",
  "age": 31,
  "imageUrl": "http://dummyimage.com/135x80.png/cc0000/ffffff",
  "phoneNumber": "708-350-0233",
  "address": "1961 Warbler Road",
  "active": true
}, {
  "id": 22,
  "name": "Nikoletta Gyurkovics",
  "gender": "Female",
  "age": 11,
  "imageUrl": "http://dummyimage.com/62x81.png/ff4444/ffffff",
  "phoneNumber": "896-171-5540",
  "address": "9 Heffernan Alley",
  "active": false
}, {
  "id": 23,
  "name": "Irv Haslen",
  "gender": "Male",
  "age": 70,
  "imageUrl": "http://dummyimage.com/210x90.png/dddddd/000000",
  "phoneNumber": "721-913-2984",
  "address": "78277 North Drive",
  "active": false
}, {
  "id": 24,
  "name": "Raul Mawer",
  "gender": "Male",
  "age": 53,
  "imageUrl": "http://dummyimage.com/189x73.png/cc0000/ffffff",
  "phoneNumber": "702-816-9258",
  "address": "21284 International Pass",
  "active": true
}, {
  "id": 25,
  "name": "Dare Bowkley",
  "gender": "Male",
  "age": 8,
  "imageUrl": "http://dummyimage.com/217x68.png/ff4444/ffffff",
  "phoneNumber": "558-882-2557",
  "address": "2658 Ryan Plaza",
  "active": false
}];

export const STAFF_DATA: StaffDto[] = [{
  "id": 1,
  "name": "Ardine Crick",
  "job": "Web Developer I",
  "email": "acrick0@squidoo.com",
  "phoneNumber": "692-381-2603",
  "address": "94 Arizona Lane",
  "active": true
}, {
  "id": 2,
  "name": "Noemi Iacavone",
  "job": "Systems Administrator III",
  "email": "niacavone1@uiuc.edu",
  "phoneNumber": "415-739-6414",
  "address": "8401 Larry Road",
  "active": true
}, {
  "id": 3,
  "name": "Nickolaus Conn",
  "job": "Senior Sales Associate",
  "email": "nconn2@howstuffworks.com",
  "phoneNumber": "798-372-3689",
  "address": "14 Golden Leaf Pass",
  "active": false
}, {
  "id": 4,
  "name": "Kevan Shilburne",
  "job": "Civil Engineer",
  "email": "kshilburne3@nbcnews.com",
  "phoneNumber": "902-390-4291",
  "address": "06 International Court",
  "active": true
}, {
  "id": 5,
  "name": "Suellen Blakeway",
  "job": "Account Executive",
  "email": "sblakeway4@epa.gov",
  "phoneNumber": "354-819-4187",
  "address": "29562 Donald Junction",
  "active": true
}, {
  "id": 6,
  "name": "Alexandrina Goggins",
  "job": "Environmental Tech",
  "email": "agoggins5@tmall.com",
  "phoneNumber": "269-873-1269",
  "address": "854 Dryden Center",
  "active": true
}, {
  "id": 7,
  "name": "Donnell Cerie",
  "job": "Chief Design Engineer",
  "email": "dcerie6@ted.com",
  "phoneNumber": "951-332-4066",
  "address": "0227 Jana Court",
  "active": true
}, {
  "id": 8,
  "name": "Tonie Le Teve",
  "job": "Database Administrator I",
  "email": "tle7@behance.net",
  "phoneNumber": "500-702-3806",
  "address": "434 Crest Line Pass",
  "active": false
}, {
  "id": 9,
  "name": "Sayers Klisch",
  "job": "Analog Circuit Design manager",
  "email": "sklisch8@wiley.com",
  "phoneNumber": "782-982-1692",
  "address": "4280 Forest Run Plaza",
  "active": false
}, {
  "id": 10,
  "name": "Ilysa Pollok",
  "job": "Nuclear Power Engineer",
  "email": "ipollok9@nps.gov",
  "phoneNumber": "688-317-0479",
  "address": "110 Monica Hill",
  "active": true
}, {
  "id": 11,
  "name": "Aeriell Biesty",
  "job": "Staff Accountant III",
  "email": "abiestya@goodreads.com",
  "phoneNumber": "136-543-6253",
  "address": "37 Florence Lane",
  "active": false
}, {
  "id": 12,
  "name": "Noell Brodeur",
  "job": "Account Coordinator",
  "email": "nbrodeurb@newyorker.com",
  "phoneNumber": "989-489-3733",
  "address": "8322 Russell Point",
  "active": false
}, {
  "id": 13,
  "name": "Alisander Clipson",
  "job": "Professor",
  "email": "aclipsonc@auda.org.au",
  "phoneNumber": "793-388-5391",
  "address": "37718 Park Meadow Trail",
  "active": false
}, {
  "id": 14,
  "name": "Alexia Garms",
  "job": "Assistant Media Planner",
  "email": "agarmsd@hp.com",
  "phoneNumber": "524-749-8114",
  "address": "89730 Sycamore Place",
  "active": true
}, {
  "id": 15,
  "name": "Giustina Hollibone",
  "job": "Media Manager I",
  "email": "ghollibonee@nba.com",
  "phoneNumber": "612-478-2748",
  "address": "4 Green Ridge Court",
  "active": false
}, {
  "id": 16,
  "name": "Jarrod Mayhead",
  "job": "Geologist I",
  "email": "jmayheadf@posterous.com",
  "phoneNumber": "918-889-2352",
  "address": "8236 Maple Wood Avenue",
  "active": false
}, {
  "id": 17,
  "name": "Edi Brennen",
  "job": "Automation Specialist II",
  "email": "ebrenneng@jalbum.net",
  "phoneNumber": "600-256-2606",
  "address": "1 Crest Line Point",
  "active": true
}, {
  "id": 18,
  "name": "Ingemar Mawdsley",
  "job": "Account Coordinator",
  "email": "imawdsleyh@hibu.com",
  "phoneNumber": "357-455-7284",
  "address": "2815 Grayhawk Way",
  "active": false
}, {
  "id": 19,
  "name": "Patty Chippindall",
  "job": "Account Coordinator",
  "email": "pchippindalli@forbes.com",
  "phoneNumber": "802-337-6867",
  "address": "87899 Brown Circle",
  "active": true
}, {
  "id": 20,
  "name": "Joachim Crother",
  "job": "Safety Technician II",
  "email": "jcrotherj@plala.or.jp",
  "phoneNumber": "556-638-1664",
  "address": "79404 Holy Cross Terrace",
  "active": true
}, {
  "id": 21,
  "name": "Junina Dent",
  "job": "Structural Analysis Engineer",
  "email": "jdentk@discuz.net",
  "phoneNumber": "467-675-7970",
  "address": "9750 Dwight Place",
  "active": true
}, {
  "id": 22,
  "name": "Fletch Kubczak",
  "job": "Cost Accountant",
  "email": "fkubczakl@photobucket.com",
  "phoneNumber": "320-909-3844",
  "address": "246 Shelley Trail",
  "active": false
}, {
  "id": 23,
  "name": "Leshia Rosenshine",
  "job": "Staff Scientist",
  "email": "lrosenshinem@hibu.com",
  "phoneNumber": "357-956-7356",
  "address": "95 Logan Court",
  "active": true
}, {
  "id": 24,
  "name": "Caryn Heffron",
  "job": "Accounting Assistant III",
  "email": "cheffronn@admin.ch",
  "phoneNumber": "827-129-7313",
  "address": "101 Spenser Point",
  "active": true
}, {
  "id": 25,
  "name": "Libby Binton",
  "job": "Administrative Assistant III",
  "email": "lbintono@tripod.com",
  "phoneNumber": "445-104-1773",
  "address": "6 Lindbergh Hill",
  "active": false
}];


export const ROOMALLOTMENT_DATA: RoomAllotmentDto[] = [{
  "id": 1,
  "parientName": "Danny Leng",
  "doctorName": "Sofie Andreas",
  "roomNumber": 308,
  "roomType": "ICU",
  "allotmentDate": "10/28/2023",
  "dischargeDate": "1/22/2023",
  "status": "Not Alloted"
}, {
  "id": 2,
  "parientName": "Darice Quesne",
  "doctorName": "Lonee Sear",
  "roomNumber": 307,
  "roomType": "General",
  "allotmentDate": "8/2/2023",
  "dischargeDate": "12/13/2022",
  "status": "Available"
}, {
  "id": 3,
  "parientName": "Harwilll Flarity",
  "doctorName": "Cyndie Amos",
  "roomNumber": 310,
  "roomType": "ICU",
  "allotmentDate": "10/7/2022",
  "dischargeDate": "2/13/2024",
  "status": "Available"
}, {
  "id": 4,
  "parientName": "Roseline Lippitt",
  "doctorName": "Christal Margeram",
  "roomNumber": 306,
  "roomType": "General",
  "allotmentDate": "6/2/2023",
  "dischargeDate": "4/15/2023",
  "status": "Not Alloted"
}, {
  "id": 5,
  "parientName": "Regina Ibeson",
  "doctorName": "Giorgio Snelling",
  "roomNumber": 301,
  "roomType": "AC Room",
  "allotmentDate": "4/13/2023",
  "dischargeDate": "12/18/2022",
  "status": "Available"
}, {
  "id": 6,
  "parientName": "Lloyd Whightman",
  "doctorName": "Willetta Pates",
  "roomNumber": 303,
  "roomType": "ICU",
  "allotmentDate": "2/14/2023",
  "dischargeDate": "5/1/2023",
  "status": "Not Discharged"
}, {
  "id": 7,
  "parientName": "Henrie Campsall",
  "doctorName": "Celestina Savatier",
  "roomNumber": 305,
  "roomType": "General",
  "allotmentDate": "12/14/2022",
  "dischargeDate": "4/3/2023",
  "status": "Not Alloted"
}, {
  "id": 8,
  "parientName": "Sonny Deave",
  "doctorName": "Olag Grocutt",
  "roomNumber": 306,
  "roomType": "ICU",
  "allotmentDate": "11/26/2022",
  "dischargeDate": "3/24/2023",
  "status": "Not Discharged"
}, {
  "id": 9,
  "parientName": "Aviva Donati",
  "doctorName": "Mehetabel Haysey",
  "roomNumber": 301,
  "roomType": "ICU",
  "allotmentDate": "1/21/2023",
  "dischargeDate": "11/22/2023",
  "status": "Available"
}, {
  "id": 10,
  "parientName": "Tomlin Misk",
  "doctorName": "Atlante Arr",
  "roomNumber": 306,
  "roomType": "AC Room",
  "allotmentDate": "4/4/2023",
  "dischargeDate": "1/9/2023",
  "status": "Available"
}, {
  "id": 11,
  "parientName": "Lissie Behnecken",
  "doctorName": "Shandy O'Shevlin",
  "roomNumber": 301,
  "roomType": "General",
  "allotmentDate": "1/21/2023",
  "dischargeDate": "11/28/2023",
  "status": "Not Alloted"
}, {
  "id": 12,
  "parientName": "Esra Baltzar",
  "doctorName": "Dennie Miranda",
  "roomNumber": 305,
  "roomType": "ICU",
  "allotmentDate": "7/2/2023",
  "dischargeDate": "3/28/2023",
  "status": "Not Discharged"
}, {
  "id": 13,
  "parientName": "Lorianne Flahive",
  "doctorName": "Auberta Kaveney",
  "roomNumber": 309,
  "roomType": "ICU",
  "allotmentDate": "1/9/2023",
  "dischargeDate": "3/13/2024",
  "status": "Available"
}, {
  "id": 14,
  "parientName": "Auberta Tullett",
  "doctorName": "Casper Peet",
  "roomNumber": 304,
  "roomType": "AC Room",
  "allotmentDate": "11/8/2022",
  "dischargeDate": "1/18/2023",
  "status": "Not Alloted"
}, {
  "id": 15,
  "parientName": "Erminie Chiverton",
  "doctorName": "Ulrika Rasell",
  "roomNumber": 307,
  "roomType": "General",
  "allotmentDate": "5/5/2023",
  "dischargeDate": "2/2/2024",
  "status": "Available"
}, {
  "id": 16,
  "parientName": "Thedric Dwyer",
  "doctorName": "Lilith Shearwood",
  "roomNumber": 303,
  "roomType": "ICU",
  "allotmentDate": "4/16/2023",
  "dischargeDate": "3/31/2023",
  "status": "Available"
}, {
  "id": 17,
  "parientName": "Michel Broose",
  "doctorName": "Fritz Bemment",
  "roomNumber": 304,
  "roomType": "ICU",
  "allotmentDate": "11/11/2023",
  "dischargeDate": "11/27/2022",
  "status": "Not Alloted"
}, {
  "id": 18,
  "parientName": "Juditha Woodhall",
  "doctorName": "Samara Fossitt",
  "roomNumber": 310,
  "roomType": "AC Room",
  "allotmentDate": "6/8/2023",
  "dischargeDate": "10/26/2023",
  "status": "Available"
}, {
  "id": 19,
  "parientName": "Tish Curnok",
  "doctorName": "Linnell Sylvester",
  "roomNumber": 307,
  "roomType": "General",
  "allotmentDate": "8/9/2023",
  "dischargeDate": "3/27/2024",
  "status": "Available"
}, {
  "id": 20,
  "parientName": "Torry Whetton",
  "doctorName": "Bliss Thrussell",
  "roomNumber": 304,
  "roomType": "ICU",
  "allotmentDate": "11/9/2022",
  "dischargeDate": "12/20/2022",
  "status": "Not Discharged"
}, {
  "id": 21,
  "parientName": "Diarmid Renault",
  "doctorName": "Kelli Peele",
  "roomNumber": 309,
  "roomType": "AC Room",
  "allotmentDate": "11/20/2022",
  "dischargeDate": "4/2/2023",
  "status": "Not Alloted"
}, {
  "id": 22,
  "parientName": "Lindsay Lippiatt",
  "doctorName": "Luisa Gommes",
  "roomNumber": 303,
  "roomType": "ICU",
  "allotmentDate": "12/26/2022",
  "dischargeDate": "12/7/2022",
  "status": "Available"
}, {
  "id": 23,
  "parientName": "Kaia Wimms",
  "doctorName": "Cart Michell",
  "roomNumber": 301,
  "roomType": "General",
  "allotmentDate": "9/10/2023",
  "dischargeDate": "12/2/2022",
  "status": "Not Discharged"
}, {
  "id": 24,
  "parientName": "Olympia Moreing",
  "doctorName": "Gwendolen Finlator",
  "roomNumber": 307,
  "roomType": "ICU",
  "allotmentDate": "11/20/2023",
  "dischargeDate": "10/19/2022",
  "status": "Available"
}, {
  "id": 25,
  "parientName": "Cleveland Ciotto",
  "doctorName": "Regan Bartolijn",
  "roomNumber": 304,
  "roomType": "AC Room",
  "allotmentDate": "2/27/2023",
  "dischargeDate": "3/31/2023",
  "status": "Available"
}];

export const PAYMENT_DATA: PaymentDto[] = [{
  "id": 1,
  "parientName": "Reidar Rafter",
  "doctorName": "Saidee Gouldbourn",
  "parientEmail": "sgouldbourn0@digg.com",
  "charges": 723.19,
  "tax": 15,
  "discount": 11,
  "total": 643.6391,
  "status": "Unpaid",
  "date": "11/15/2022"
}, {
  "id": 2,
  "parientName": "Andriana Coan",
  "doctorName": "Joice Bolitho",
  "parientEmail": "jbolitho1@linkedin.com",
  "charges": 95.16,
  "tax": 15,
  "discount": 22,
  "total": 74.2248,
  "status": "Paid",
  "date": "11/28/2022"
}, {
  "id": 3,
  "parientName": "Meg O'Calleran",
  "doctorName": "Marcile Matcham",
  "parientEmail": "mmatcham2@bing.com",
  "charges": 1351.9,
  "tax": 15,
  "discount": 28,
  "total": 973.368,
  "status": "Unpaid",
  "date": "6/20/2023"
}, {
  "id": 4,
  "parientName": "Ned Sleit",
  "doctorName": "Eada Bradtke",
  "parientEmail": "ebradtke3@earthlink.net",
  "charges": 942.91,
  "tax": 15,
  "discount": 17,
  "total": 782.6153,
  "status": "Paid",
  "date": "5/26/2023"
}, {
  "id": 5,
  "parientName": "Rocky Ganter",
  "doctorName": "Ralf Adame",
  "parientEmail": "radame4@cdc.gov",
  "charges": 1826.25,
  "tax": 15,
  "discount": 38,
  "total": 1132.275,
  "status": "Unpaid",
  "date": "7/8/2023"
}, {
  "id": 6,
  "parientName": "Fania Ilsley",
  "doctorName": "Shellie Gorke",
  "parientEmail": "sgorke5@istockphoto.com",
  "charges": 488.44,
  "tax": 15,
  "discount": 18,
  "total": 400.5208,
  "status": "Paid",
  "date": "9/18/2023"
}, {
  "id": 7,
  "parientName": "Eddy Padefield",
  "doctorName": "Stearne Needs",
  "parientEmail": "sneeds6@printfriendly.com",
  "charges": 1257.71,
  "tax": 15,
  "discount": 9,
  "total": 1144.5161,
  "status": "Unpaid",
  "date": "6/5/2023"
}, {
  "id": 8,
  "parientName": "Lynne Wickliffe",
  "doctorName": "Conway Richardet",
  "parientEmail": "crichardet7@reddit.com",
  "charges": 884.09,
  "tax": 15,
  "discount": 34,
  "total": 583.4994,
  "status": "Paid",
  "date": "10/3/2022"
}, {
  "id": 9,
  "parientName": "Caprice Stiffell",
  "doctorName": "Felice Shier",
  "parientEmail": "fshier8@europa.eu",
  "charges": 923.72,
  "tax": 15,
  "discount": 24,
  "total": 702.0272,
  "status": "Unpaid",
  "date": "3/27/2023"
}, {
  "id": 10,
  "parientName": "Cy Rosbrough",
  "doctorName": "Joyan Degoey",
  "parientEmail": "jdegoey9@youtu.be",
  "charges": 1221.41,
  "tax": 15,
  "discount": 12,
  "total": 1074.8408,
  "status": "Paid",
  "date": "7/23/2023"
}, {
  "id": 11,
  "parientName": "Madlen McDirmid",
  "doctorName": "Eva Itter",
  "parientEmail": "eittera@washington.edu",
  "charges": 68.33,
  "tax": 15,
  "discount": 7,
  "total": 63.5469,
  "status": "Unpaid",
  "date": "1/17/2023"
}, {
  "id": 12,
  "parientName": "Darelle Muggleston",
  "doctorName": "Nananne Astie",
  "parientEmail": "nastieb@blinklist.com",
  "charges": 109.78,
  "tax": 15,
  "discount": 30,
  "total": 76.846,
  "status": "Paid",
  "date": "11/15/2022"
}, {
  "id": 13,
  "parientName": "Geraldine Morris",
  "doctorName": "Gusty Mogford",
  "parientEmail": "gmogfordc@etsy.com",
  "charges": 120.14,
  "tax": 15,
  "discount": 25,
  "total": 90.105,
  "status": "Unpaid",
  "date": "12/11/2022"
}, {
  "id": 14,
  "parientName": "Brittne Balmer",
  "doctorName": "Lottie Wasling",
  "parientEmail": "lwaslingd@flickr.com",
  "charges": 739.97,
  "tax": 15,
  "discount": 40,
  "total": 443.982,
  "status": "Paid",
  "date": "3/14/2023"
}, {
  "id": 15,
  "parientName": "Nev Carrane",
  "doctorName": "Lockwood Galbreth",
  "parientEmail": "lgalbrethe@marriott.com",
  "charges": 1623.95,
  "tax": 15,
  "discount": 24,
  "total": 1234.202,
  "status": "Unpaid",
  "date": "11/2/2022"
}, {
  "id": 16,
  "parientName": "Nelson Poag",
  "doctorName": "Westbrooke Wellwood",
  "parientEmail": "wwellwoodf@columbia.edu",
  "charges": 584.35,
  "tax": 15,
  "discount": 11,
  "total": 520.0715,
  "status": "Paid",
  "date": "2/4/2023"
}, {
  "id": 17,
  "parientName": "Ginger Whyborne",
  "doctorName": "Alane Bounde",
  "parientEmail": "aboundeg@tripod.com",
  "charges": 50.23,
  "tax": 15,
  "discount": 29,
  "total": 35.6633,
  "status": "Unpaid",
  "date": "10/12/2022"
}, {
  "id": 18,
  "parientName": "Grover Cuxson",
  "doctorName": "Caresa Rodolphe",
  "parientEmail": "crodolpheh@google.co.jp",
  "charges": 121.47,
  "tax": 15,
  "discount": 10,
  "total": 109.323,
  "status": "Paid",
  "date": "8/26/2022"
}, {
  "id": 19,
  "parientName": "Katee Yetman",
  "doctorName": "Archambault Plume",
  "parientEmail": "aplumei@vinaora.com",
  "charges": 219.54,
  "tax": 15,
  "discount": 15,
  "total": 186.609,
  "status": "Unpaid",
  "date": "11/7/2022"
}, {
  "id": 20,
  "parientName": "Manon Harbin",
  "doctorName": "Celestyn Abramow",
  "parientEmail": "cabramowj@reddit.com",
  "charges": 1515.85,
  "tax": 15,
  "discount": 16,
  "total": 1273.314,
  "status": "Paid",
  "date": "5/7/2023"
}, {
  "id": 21,
  "parientName": "Mollee Skym",
  "doctorName": "Basile Hankinson",
  "parientEmail": "bhankinsonk@fda.gov",
  "charges": 1513.88,
  "tax": 15,
  "discount": 11,
  "total": 1347.3532,
  "status": "Unpaid",
  "date": "7/19/2023"
}, {
  "id": 22,
  "parientName": "Pascal Nettleship",
  "doctorName": "Jedidiah O' Hogan",
  "parientEmail": "jol@loc.gov",
  "charges": 1536.93,
  "tax": 15,
  "discount": 16,
  "total": 1291.0212,
  "status": "Paid",
  "date": "10/21/2022"
}, {
  "id": 23,
  "parientName": "Tina Nobles",
  "doctorName": "Sarene Treadaway",
  "parientEmail": "streadawaym@barnesandnoble.com",
  "charges": 341.13,
  "tax": 15,
  "discount": 31,
  "total": 235.3797,
  "status": "Unpaid",
  "date": "12/24/2022"
}, {
  "id": 24,
  "parientName": "Marsh Dollen",
  "doctorName": "Kirby Vedyashkin",
  "parientEmail": "kvedyashkinn@chicagotribune.com",
  "charges": 1887.08,
  "tax": 15,
  "discount": 32,
  "total": 1283.2144,
  "status": "Paid",
  "date": "12/20/2022"
}, {
  "id": 25,
  "parientName": "Zerk Howsley",
  "doctorName": "Gerty Harse",
  "parientEmail": "gharseo@indiegogo.com",
  "charges": 832.67,
  "tax": 15,
  "discount": 28,
  "total": 599.5224,
  "status": "Unpaid",
  "date": "5/21/2023"
}];


export const DEPARTMENT_DATA: DepartmentDto[] = [{
  "id": 1,
  "name": "Department #1",
  "description": "Nulla mollis molestie lorem.",
  "imageUrl": "http://dummyimage.com/208x100.png/5fa2dd/ffffff"
}, {
  "id": 2,
  "name": "Department #2",
  "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
  "imageUrl": "http://dummyimage.com/125x100.png/dddddd/000000"
}, {
  "id": 3,
  "name": "Department #3",
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "imageUrl": "http://dummyimage.com/236x100.png/5fa2dd/ffffff"
}, {
  "id": 4,
  "name": "Department #4",
  "description": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
  "imageUrl": "http://dummyimage.com/250x100.png/5fa2dd/ffffff"
}, {
  "id": 5,
  "name": "Department #5",
  "description": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
  "imageUrl": "http://dummyimage.com/124x100.png/ff4444/ffffff"
}, {
  "id": 6,
  "name": "Department #6",
  "description": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
  "imageUrl": "http://dummyimage.com/177x100.png/5fa2dd/ffffff"
}, {
  "id": 7,
  "name": "Department #7",
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "imageUrl": "http://dummyimage.com/241x100.png/ff4444/ffffff"
}, {
  "id": 8,
  "name": "Department #8",
  "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
  "imageUrl": "http://dummyimage.com/250x100.png/5fa2dd/ffffff"
}, {
  "id": 9,
  "name": "Department #9",
  "description": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "imageUrl": "http://dummyimage.com/192x100.png/dddddd/000000"
}, {
  "id": 10,
  "name": "Department #10",
  "description": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  "imageUrl": "http://dummyimage.com/137x100.png/ff4444/ffffff"
}, {
  "id": 11,
  "name": "Department #11",
  "description": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
  "imageUrl": "http://dummyimage.com/130x100.png/dddddd/000000"
}, {
  "id": 12,
  "name": "Department #12",
  "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
  "imageUrl": "http://dummyimage.com/191x100.png/ff4444/ffffff"
}]
