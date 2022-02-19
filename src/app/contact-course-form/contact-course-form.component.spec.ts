import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCourseFormComponent } from './contact-course-form.component';

describe('ContactCourseFormComponent', () => {
  let component: ContactCourseFormComponent;
  let fixture: ComponentFixture<ContactCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
