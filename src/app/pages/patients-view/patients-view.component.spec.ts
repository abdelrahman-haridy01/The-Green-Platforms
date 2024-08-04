import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsViewComponent } from './patients-view.component';

describe('PatientsViewComponent', () => {
  let component: PatientsViewComponent;
  let fixture: ComponentFixture<PatientsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [PatientsViewComponent]
});
    fixture = TestBed.createComponent(PatientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
