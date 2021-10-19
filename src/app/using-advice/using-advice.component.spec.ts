import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAdviceComponent } from './using-advice.component';

describe('UsingAdviceComponent', () => {
  let component: UsingAdviceComponent;
  let fixture: ComponentFixture<UsingAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingAdviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
