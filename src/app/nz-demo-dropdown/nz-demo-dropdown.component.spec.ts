import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoDropdownComponent } from './nz-demo-dropdown.component';

describe('NzDemoDropdownComponent', () => {
  let component: NzDemoDropdownComponent;
  let fixture: ComponentFixture<NzDemoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
