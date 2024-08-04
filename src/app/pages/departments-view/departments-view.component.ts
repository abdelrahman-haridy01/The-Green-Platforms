import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENT_DATA } from 'src/app/shared/dumy-data';
import { StaticDataService } from 'src/app/shared/services/static-data.service';

@Component({
  selector: 'app-departments-view',
  templateUrl: './departments-view.component.html',
  styleUrls: ['./departments-view.component.scss']
})
export class DepartmentsViewComponent implements OnInit {
  items = [...DEPARTMENT_DATA];
  submitted = false;
  itemForm!: FormGroup;
  formTitle = 'Add new item';
  itemId: any;
  itemDetials: any;
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
      name: ['', Validators.required],
      description: ['', Validators.required]
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
        dataType: 'departments',
        formData: this.itemForm.value
      });
      this.router.navigate(['/departments']);
      this.toastr.success('Item add sucssefully', 'Success');
    } else {
      // Update item details
      this.staticDataService.setData({
        id: this.itemId,
        dataType: 'departments',
        formData: this.itemForm.value
      });
      this.router.navigate(['/departments']);
      this.toastr.success('Item updated sucssefully', 'Success');
    }
  }

  // Get item details
  getItemDetails(id: any) {
    const objWithIdIndex = this.items.filter(obj => obj.id == id);
    if (objWithIdIndex[0]) {
      let data = objWithIdIndex[0];
      this.itemForm.patchValue({
        name: data.name,
        description: data.description
      });
    }
  }
}
