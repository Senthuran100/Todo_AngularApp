import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRestComponent } from './call-rest.component';

describe('CallRestComponent', () => {
  let component: CallRestComponent;
  let fixture: ComponentFixture<CallRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
