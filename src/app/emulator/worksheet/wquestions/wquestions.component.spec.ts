import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WquestionsComponent } from './wquestions.component';

describe('WquestionsComponent', () => {
  let component: WquestionsComponent;
  let fixture: ComponentFixture<WquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
