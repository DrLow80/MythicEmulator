import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsceneComponent } from './wscene.component';

describe('WsceneComponent', () => {
  let component: WsceneComponent;
  let fixture: ComponentFixture<WsceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
