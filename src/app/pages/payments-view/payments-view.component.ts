import { Component, OnInit } from '@angular/core';
import { PAYMENT_DATA, departmentList } from 'src/app/shared/dumy-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StaticDataService } from 'src/app/shared/services/static-data.service';

@Component({
  selector: 'app-payments-view',
  templateUrl: './payments-view.component.html',
  styleUrls: ['./payments-view.component.scss']
})
export class PaymentsViewComponent implements OnInit {
  items = [...PAYMENT_DATA];
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
    private toastr: ToastrService,
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
      parientName: ['', Validators.required],
      doctorName: ['', Validators.required],
      parientEmail: ['', Validators.required],
      charges: ['', Validators.required],
      date: ['', Validators.required],
      tax: ['', Validators.required],
      discount: ['', Validators.required],
      total: ['', Validators.required],
      status: ['Unpaid']
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
        dataType: 'payments',
        formData: this.itemForm.value
      });
      this.router.navigate(['/payments']);
      this.toastr.success('Item add sucssefully', 'Success');
    } else {
      // Update item details
      this.staticDataService.setData({
        id: this.itemId,
        dataType: 'payments',
        formData: this.itemForm.value
      });
      this.router.navigate(['/payments']);
      this.toastr.success('Item updated sucssefully', 'Success');
    }
  }

  // Get item details
  getItemDetails(id: any) {
    const objWithIdIndex = this.items.filter(obj => obj.id == id);
    if (objWithIdIndex[0]) {
      let data = objWithIdIndex[0];
      this.itemForm.patchValue({
        parientName: data.parientName,
        doctorName: data.doctorName,
        parientEmail: data.parientEmail,
        charges: data.charges,
        date: data.date,
        tax: data.tax,
        discount: data.discount,
        total: data.total,
        status: data.status
      });
    }
  }
}
