import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAllotmentComponent } from './room-allotment.component';

describe('RoomAllotmentComponent', () => {
  let component: RoomAllotmentComponent;
  let fixture: ComponentFixture<RoomAllotmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [RoomAllotmentComponent]
});
    fixture = TestBed.createComponent(RoomAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
