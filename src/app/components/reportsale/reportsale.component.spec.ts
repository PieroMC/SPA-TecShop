import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsaleComponent } from './reportsale.component';

describe('ReportsaleComponent', () => {
  let component: ReportsaleComponent;
  let fixture: ComponentFixture<ReportsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
