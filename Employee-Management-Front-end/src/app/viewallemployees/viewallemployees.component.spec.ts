import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallemployeesComponent } from './viewallemployees.component';

describe('ViewallemployeesComponent', () => {
  let component: ViewallemployeesComponent;
  let fixture: ComponentFixture<ViewallemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
