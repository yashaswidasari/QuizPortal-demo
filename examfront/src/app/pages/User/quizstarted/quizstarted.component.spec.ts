import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizstartedComponent } from './quizstarted.component';

describe('QuizstartedComponent', () => {
  let component: QuizstartedComponent;
  let fixture: ComponentFixture<QuizstartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizstartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
