import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsViewComponent } from './doctors-view.component';

describe('DoctorsViewComponent', () => {
  let component: DoctorsViewComponent;
  let fixture: ComponentFixture<DoctorsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [DoctorsViewComponent]
});
    fixture = TestBed.createComponent(DoctorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
