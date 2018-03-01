import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoLayoutComponent } from './nz-demo-layout.component';

describe('NzDemoLayoutComponent', () => {
  let component: NzDemoLayoutComponent;
  let fixture: ComponentFixture<NzDemoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
