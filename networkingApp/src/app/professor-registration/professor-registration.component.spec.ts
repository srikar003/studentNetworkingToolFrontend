import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRegistrationComponent } from './professor-registration.component';

describe('ProfessorRegistrationComponent', () => {
  let component: ProfessorRegistrationComponent;
  let fixture: ComponentFixture<ProfessorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
