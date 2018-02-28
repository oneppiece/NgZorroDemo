import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoGridFlexComponent } from './nz-demo-grid-flex.component';

describe('NzDemoGridFlexComponent', () => {
  let component: NzDemoGridFlexComponent;
  let fixture: ComponentFixture<NzDemoGridFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoGridFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoGridFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
