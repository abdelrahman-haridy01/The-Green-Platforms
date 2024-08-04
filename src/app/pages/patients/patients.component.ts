import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PatientDto } from '../../shared/dto/patient-dto';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { PATIENT_DATA } from '../../shared/dumy-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    PaginatorModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PatientsComponent {
  patients: PatientDto[] = PATIENT_DATA;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

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
        const index = this.patients.findIndex((obj) => obj.id === id);
        if (index > -1) {
          this.patients.splice(index, 1);
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

  onGlobalFilter(table: any, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
