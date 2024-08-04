import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule],
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent {
  displayDeleteDialog = false;

  @Output() confirmDelete = new EventEmitter<boolean>();

  show() {
    this.displayDeleteDialog = true;
  }

  hide() {
    this.displayDeleteDialog = false;
  }

  onConfirmDelete() {
    this.confirmDelete.emit(true);
    this.hide();
  }
}
