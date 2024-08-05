import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PaymentDto } from '../../shared/dto/payment-dto';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { PAYMENT_DATA } from '../../shared/dumy-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
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
export class PaymentsComponent {
  dataSource: PaymentDto[] = PAYMENT_DATA;

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
        const index = this.dataSource.findIndex((obj) => obj.id === id);
        if (index > -1) {
          this.dataSource.splice(index, 1);
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
