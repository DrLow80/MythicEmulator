import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlistsComponent } from './wlists.component';

describe('WlistsComponent', () => {
  let component: WlistsComponent;
  let fixture: ComponentFixture<WlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
