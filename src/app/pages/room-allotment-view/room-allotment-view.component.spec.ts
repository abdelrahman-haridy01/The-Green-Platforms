import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAllotmentViewComponent } from './room-allotment-view.component';

describe('RoomAllotmentViewComponent', () => {
  let component: RoomAllotmentViewComponent;
  let fixture: ComponentFixture<RoomAllotmentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [RoomAllotmentViewComponent]
});
    fixture = TestBed.createComponent(RoomAllotmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
