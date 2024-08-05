import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { take } from 'rxjs/operators';
import { RoomAllotmentDto } from '../../shared/dto/room-allotment-dto';
import { ROOMALLOTMENT_DATA } from '../../shared/dumy-data';
import { StaticDataService } from '../../shared/services/static-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-room-allotment',
  templateUrl: './room-allotment.component.html',
  styleUrls: ['./room-allotment.component.scss'],
  standalone: true,
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
export class RoomAllotmentComponent implements OnInit {
  dataSource: RoomAllotmentDto[] = ROOMALLOTMENT_DATA;
  @ViewChild('dt') dt!: Table;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private staticDataService: StaticDataService
  ) {}

  ngOnInit(): void {
    this.staticDataService.selectedItem$
      .pipe(take(1))
      .subscribe((value: any) => {
        if (
          value &&
          value['dataType'] === 'room-allotment' &&
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
              (obj) => obj.roomNumber === value['formData'].roomNumber
            );
            if (objWithIdIndex > -1) {
              this.dataSource.splice(objWithIdIndex, 1);
            }
          }

          this.addData(value);
        }
      });
  }

  deleteItem(event: Event, id: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `<p><strong>Are you sure you want to delete <span class="text-primary">this item</span>?</strong></p>
                <p>All information associated with this item will be permanently deleted. <span class="text-danger">This operation cannot be undone.</span></p>`,
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
      data['id'] == null
        ? (ROOMALLOTMENT_DATA.length + 1).toString()
        : data['id'];
    const body = {
      id: key,
      parientName: data['formData'].parientName,
      doctorName: data['formData'].doctorName,
      roomNumber: data['formData'].roomNumber,
      roomType: data['formData'].roomType,
      status: data['formData'].status,
      allotmentDate: data['formData'].allotmentDate,
      dischargeDate: data['formData'].dischargeDate,
      discount: data['formData'].discount,
      total: data['formData'].total,
    };
    this.dataSource.unshift(body);
  }

  onGlobalFilter(table: any, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
