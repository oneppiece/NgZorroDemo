import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoGridGutterComponent } from './nz-demo-grid-gutter.component';

describe('NzDemoGridGutterComponent', () => {
  let component: NzDemoGridGutterComponent;
  let fixture: ComponentFixture<NzDemoGridGutterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoGridGutterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoGridGutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
