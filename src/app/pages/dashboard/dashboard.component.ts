import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs/operators';
import { AppointmentDto } from '../../shared/dto/appointment-dto';
import { APPOINTMENTS_DATA } from '../../shared/dumy-data';
import { StaticDataService } from '../../shared/services/static-data.service';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    ToastModule,
    CardModule,
    RouterLink,
    ButtonModule,
    InputIconModule,
    IconFieldModule,
  ],
  providers: [DialogService, MessageService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
  dataSource: AppointmentDto[] = APPOINTMENTS_DATA;

  ref: DynamicDialogRef | undefined;
  dt2: any;

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private staticDataService: StaticDataService
  ) {
    // Get data from "item form" and run add new item function
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

  // Delete item
  deleteItem(id: any) {
    this.ref = this.dialogService.open(DeleteDialogComponent, {
      header: 'Confirm Delete',
      width: '70%',
    });

    this.ref.onClose.subscribe((result: any) => {
      if (result) {
        const objWithIdIndex = this.dataSource.findIndex(
          (obj) => obj.id === id
        );

        if (objWithIdIndex > -1) {
          this.dataSource.splice(objWithIdIndex, 1);
        }

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Item deleted successfully',
        });
      }
    });
  }

  // Adding item
  addData(data: any) {
    const key =
      data['id'] == null
        ? (APPOINTMENTS_DATA.length + 1).toString()
        : data['id'];
    const body = {
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

  // Searching functions
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
