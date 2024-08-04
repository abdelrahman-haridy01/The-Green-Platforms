import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/app.layout.component').then((m) => m.AppLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/empty/empty.component').then((m) => m.EmptyComponent),
      },
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        data: { title: 'Dashboard' },
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        data: { title: 'Dashboard' },
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import('./pages/appointments/appointments.component').then(
            (m) => m.AppointmentsComponent
          ),
        data: { title: 'Appointments' },
      },
      // {
      //   path: 'appointments/new',
      //   loadComponent: () =>
      //     import('./pages/appointments-view/appointments-view.component').then(
      //       (m) => m.AppointmentsViewComponent
      //     ),
      //   data: { title: 'New appointment' },
      // },
      // {
      //   path: 'appointments/:id',
      //   loadComponent: () =>
      //     import('./pages/appointments-view/appointments-view.component').then(
      //       (m) => m.AppointmentsViewComponent
      //     ),
      //   data: { title: 'Update appointments' },
      // },
      {
        path: 'doctors',
        loadComponent: () =>
          import('./pages/doctors/doctors.component').then(
            (m) => m.DoctorsComponent
          ),
        data: { title: 'Doctors' },
      },
      // {
      //   path: 'doctors/new',
      //   loadComponent: () =>
      //     import('./pages/doctors-view/doctors-view.component').then(
      //       (m) => m.DoctorsViewComponent
      //     ),
      //   data: { title: 'New doctor' },
      // },
      // {
      //   path: 'doctors/:id',
      //   loadComponent: () =>
      //     import('./pages/doctors-view/doctors-view.component').then(
      //       (m) => m.DoctorsViewComponent
      //     ),
      //   data: { title: 'Update doctor' },
      // },
      {
        path: 'departments',
        loadComponent: () =>
          import('./pages/departments/departments.component').then(
            (m) => m.DepartmentsComponent
          ),
        data: { title: 'Departments' },
      },
      // {
      //   path: 'departments/new',
      //   loadComponent: () =>
      //     import('./pages/departments-view/departments-view.component').then(
      //       (m) => m.DepartmentsViewComponent
      //     ),
      //   data: { title: 'New Departments' },
      // },
      // {
      //   path: 'departments/:id',
      //   loadComponent: () =>
      //     import('./pages/departments-view/departments-view.component').then(
      //       (m) => m.DepartmentsViewComponent
      //     ),
      //   data: { title: 'Update Departments' },
      // },
      // {
      //   path: 'staff',
      //   loadComponent: () =>
      //     import('./pages/staff/staff.component').then((m) => m.StaffComponent),
      //   data: { title: 'Staff list' },
      // },
      // {
      //   path: 'staff/new',
      //   loadComponent: () =>
      //     import('./pages/staff-view/staff-view.component').then(
      //       (m) => m.StaffViewComponent
      //     ),
      //   data: { title: 'New staff' },
      // },
      // {
      //   path: 'staff/:id',
      //   loadComponent: () =>
      //     import('./pages/staff-view/staff-view.component').then(
      //       (m) => m.StaffViewComponent
      //     ),
      //   data: { title: 'Update staff' },
      // },
      // {
      //   path: 'room-allotment',
      //   loadComponent: () =>
      //     import('./pages/room-allotment/room-allotment.component').then(
      //       (m) => m.RoomAllotmentComponent
      //     ),
      //   data: { title: 'Room allotment' },
      // },
      // {
      //   path: 'room-allotment/new',
      //   loadComponent: () =>
      //     import(
      //       './pages/room-allotment-view/room-allotment-view.component'
      //     ).then((m) => m.RoomAllotmentViewComponent),
      //   data: { title: 'New room allotment' },
      // },
      // {
      //   path: 'room-allotment/:id',
      //   loadComponent: () =>
      //     import(
      //       './pages/room-allotment-view/room-allotment-view.component'
      //     ).then((m) => m.RoomAllotmentViewComponent),
      //   data: { title: 'Update room allotment' },
      // },
      {
        path: 'patients',
        loadComponent: () =>
          import('./pages/patients/patients.component').then(
            (m) => m.PatientsComponent
          ),
        data: { title: 'Patients' },
      },
      // {
      //   path: 'patients/new',
      //   loadComponent: () =>
      //     import('./pages/patients-view/patients-view.component').then(
      //       (m) => m.PatientsViewComponent
      //     ),
      //   data: { title: 'New patients' },
      // },
      // {
      //   path: 'patients/:id',
      //   loadComponent: () =>
      //     import('./pages/patients-view/patients-view.component').then(
      //       (m) => m.PatientsViewComponent
      //     ),
      //   data: { title: 'Update patients' },
      // },
      // {
      //   path: 'payments',
      //   loadComponent: () =>
      //     import('./pages/payments/payments.component').then(
      //       (m) => m.PaymentsComponent
      //     ),
      //   data: { title: 'Payments' },
      // },
      // {
      //   path: 'payments/new',
      //   loadComponent: () =>
      //     import('./pages/payments-view/payments-view.component').then(
      //       (m) => m.PaymentsViewComponent
      //     ),
      //   data: { title: 'New payments' },
      // },
      // {
      //   path: 'payments/:id',
      //   loadComponent: () =>
      //     import('./pages/payments-view/payments-view.component').then(
      //       (m) => m.PaymentsViewComponent
      //     ),
      //   data: { title: 'Update payments' },
      // },
    ],
  },
];
