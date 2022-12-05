import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTreatmentComponent } from './dialog-treatment.component';

describe('DialogTreatmentComponent', () => {
  let component: DialogTreatmentComponent;
  let fixture: ComponentFixture<DialogTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
