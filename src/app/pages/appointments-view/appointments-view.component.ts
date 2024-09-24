import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { APPOINTMENTS_DATA, departmentList } from '../../shared/dumy-data';
import { ToastModule } from 'primeng/toast';
import { StaticDataService } from '../../shared/services/static-data.service';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-appointments-view',
  templateUrl: './appointments-view.component.html',
  styleUrls: ['./appointments-view.component.scss'],
  standalone: true,
  imports: [
    ToastModule,
    FormsModule,
    CommonModule,
    RouterModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    MessageModule,
  ],
  providers: [MessageService],
})
export class AppointmentsViewComponent implements OnInit {
  items = [...APPOINTMENTS_DATA];
  submitted = false;
  itemForm!: FormGroup;
  formTitle = 'Add new item';
  itemId: any;
  itemDetials: any;
  departments = departmentList;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private staticDataService: StaticDataService
  ) {}

  ngOnInit(): void {
    this.builditemForm();
    // Get item data id
    this.route.params.subscribe((params: any) => {
      if (params && params.id) {
        this.itemId = params.id;
        this.formTitle = 'Edit item';
        this.getItemDetails(params.id);
      } else {
        this.formTitle = 'Add new item';
      }
    });
  }

  // build the form
  builditemForm() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      date: ['', Validators.required],
      doctorName: ['', Validators.required],
      fees: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.itemForm.controls;
  }

  // On Submit function
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.itemForm.invalid) {
      return;
    }

    if (!this.itemId) {
      // Add new item
      this.staticDataService.setData({
        id: null,
        dataType: 'appointments',
        formData: this.itemForm.value,
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Item added successfully',
      });
    } else {
      // Update item details
      this.staticDataService.setData({
        id: this.itemId,
        dataType: 'appointments',
        formData: this.itemForm.value,
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Item updated sucssefully',
      });
    }
  }

  // Get item details
  getItemDetails(id: any) {
    const objWithIdIndex = this.items.filter((obj) => obj.id == id);
    if (objWithIdIndex[0]) {
      let data = objWithIdIndex[0];
      this.itemForm.patchValue({
        name: data.name,
        age: data.age,
        gender: data.gender,
        department: data.department,
        date: data.date,
        doctorName: data.doctorName,
        fees: data.fees,
      });
    }
  }
}
