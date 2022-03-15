import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserquizzesComponent } from './view-userquizzes.component';

describe('ViewUserquizzesComponent', () => {
  let component: ViewUserquizzesComponent;
  let fixture: ComponentFixture<ViewUserquizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserquizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
