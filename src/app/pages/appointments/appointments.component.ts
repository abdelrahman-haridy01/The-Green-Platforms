import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { take } from 'rxjs/operators';
import { APPOINTMENTS_DATA } from '../../shared/dumy-data';
import { StaticDataService } from '../../shared/services/static-data.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

interface AppointmentDto {
  id?: number | undefined;
  name: string;
  age: number;
  gender: string;
  department: string;
  date: Date | string;
  doctorName: string;
  fees: number;
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  providers: [ConfirmationService, MessageService],
  imports: [
    // PrimeNG modules
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    PaginatorModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ConfirmDialogModule,
  ],
})
export class AppointmentsComponent implements OnInit {
  dataSource: AppointmentDto[] = APPOINTMENTS_DATA;
  displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'gender',
    'department',
    'date',
    'doctorName',
    'fees',
    'actions',
  ];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private staticDataService: StaticDataService
  ) {
    this.staticDataService.selectedItem$
      .pipe(take(1))
      .subscribe((value: any) => {
        if (
          value &&
          value['dataType'] === 'appointments' &&
          Object.keys(value).length !== 0
        ) {
          if (value['id'] != null) {
            const objWithIdIndex = this.dataSource.findIndex(
              (obj) => obj.id === value['id']
            );
            if (objWithIdIndex > -1) {
              this.dataSource.splice(objWithIdIndex, 1);
            }
          } else {
            const objWithIdIndex = this.dataSource.findIndex(
              (obj) => obj.name === value['formData'].name
            );
            if (objWithIdIndex > -1) {
              this.dataSource.splice(objWithIdIndex, 1);
            }
          }
          this.addData(value);
        }
      });
  }

  ngOnInit() {}

  deleteItem(event: Event, id: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `<p>
      <strong
        >Are you sure you want to delete
        <span class="text-primary">this item</span>?</strong
      >
    </p>
    <p>
      All information associated with this item will be permanently deleted.
      <span class="text-danger">This operation cannot be undone.</span>
    </p>`,
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',
      acceptLabel: 'Confirm',
      rejectLabel: 'Cancel',

      accept: () => {
        const objWithIdIndex = this.dataSource.findIndex(
          (obj) => obj.id === id
        );
        if (objWithIdIndex > -1) {
          this.dataSource.splice(objWithIdIndex, 1);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Item deleted successfully',
            life: 3000,
          });
        }
      },
    });
  }

  addData(data: any) {
    const key =
      data['id'] == null ? (this.dataSource.length + 1).toString() : data['id'];
    const body: AppointmentDto = {
      id: key,
      name: data['formData'].name,
      age: data['formData'].age,
      gender: data['formData'].gender,
      department: data['formData'].department,
      date: data['formData'].date,
      doctorName: data['formData'].doctorName,
      fees: data['formData'].fees,
    };
    this.dataSource.unshift(body);
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
