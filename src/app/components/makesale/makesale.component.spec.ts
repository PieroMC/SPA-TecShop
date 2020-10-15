import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesaleComponent } from './makesale.component';

describe('MakesaleComponent', () => {
  let component: MakesaleComponent;
  let fixture: ComponentFixture<MakesaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakesaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
