import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesStudentComponent } from './disciplines-student.component';

describe('DisciplinesStudentComponent', () => {
  let component: DisciplinesStudentComponent;
  let fixture: ComponentFixture<DisciplinesStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinesStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
