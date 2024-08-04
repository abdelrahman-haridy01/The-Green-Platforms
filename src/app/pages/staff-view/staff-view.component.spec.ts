import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffViewComponent } from './staff-view.component';

describe('StaffViewComponent', () => {
  let component: StaffViewComponent;
  let fixture: ComponentFixture<StaffViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [StaffViewComponent]
});
    fixture = TestBed.createComponent(StaffViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
