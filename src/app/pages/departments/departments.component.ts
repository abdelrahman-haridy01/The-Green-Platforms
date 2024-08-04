import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { take } from 'rxjs/operators';
import { DEPARTMENT_DATA } from '../../shared/dumy-data';
import { StaticDataService } from '../../shared/services/static-data.service';

interface DepartmentDto {
  id?: number | undefined;
  name: string;
  description: string;
}

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  providers: [ConfirmationService, MessageService],
  standalone: true,
  imports: [
    // PrimeNG modules
    TableModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    PaginatorModule,
    CommonModule,
    RouterModule,
  ],
})
export class DepartmentsComponent implements OnInit {
  dataSource: DepartmentDto[] = DEPARTMENT_DATA;
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  @ViewChild('dt') table!: Table;

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
          value['dataType'] === 'departments' &&
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
      <strong>Are you sure you want to delete
        <span class="text-primary">this item</span>?</strong>
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
    const body: DepartmentDto = {
      id: key,
      name: data['formData'].name,
      description: data['formData'].description,
    };
    this.dataSource.unshift(body);
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
