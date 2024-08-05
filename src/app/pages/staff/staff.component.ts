import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { StaffDto } from '../../shared/dto/staff-dto';
import { STAFF_DATA } from '../../shared/dumy-data';
import { StaticDataService } from '../../shared/services/static-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-staff',
  standalone: true,
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    ConfirmDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class StaffComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'job',
    'email',
    'phoneNumber',
    'address',
    'active',
    'actions',
  ];
  dataSource: StaffDto[] = STAFF_DATA;
  globalFilter: string = '';

  @ViewChild('dt') table: any;

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
          value['dataType'] == 'staff' &&
          Object.keys(value).length != 0
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

  ngAfterViewInit() {
    // Optionally, you can handle additional initialization if needed
  }

  // Delete item
  deleteItem(event: Event, id: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `<p><strong>Are you sure you want to delete <span class="text-primary">this item</span>?</strong></p>
                <p>All information associated with this item will be permanently deleted. <span class="text-danger">This operation cannot be undone.</span></p>`,
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text',
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

  // Adding item
  addData(data: any) {
    let key =
      data['id'] == null ? (STAFF_DATA.length + 1).toString() : data['id'];
    let body = {
      id: key,
      name: data['formData'].name,
      job: data['formData'].job,
      email: data['formData'].email,
      phoneNumber: data['formData'].phoneNumber,
      address: data['formData'].address,
      active: data['formData'].active,
    };
    this.dataSource.unshift(body);
  }

  // Searching functions
  onGlobalFilter(table: any, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
