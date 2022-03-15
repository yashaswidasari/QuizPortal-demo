import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizbycatComponent } from './view-quizbycat.component';

describe('ViewQuizbycatComponent', () => {
  let component: ViewQuizbycatComponent;
  let fixture: ComponentFixture<ViewQuizbycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuizbycatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuizbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
