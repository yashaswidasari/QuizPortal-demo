import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsercategoriesComponent } from './view-usercategories.component';

describe('ViewUsercategoriesComponent', () => {
  let component: ViewUsercategoriesComponent;
  let fixture: ComponentFixture<ViewUsercategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsercategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsercategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
