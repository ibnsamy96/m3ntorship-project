import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLifeComponent } from './start-life.component';

describe('StartLifeComponent', () => {
  let component: StartLifeComponent;
  let fixture: ComponentFixture<StartLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
