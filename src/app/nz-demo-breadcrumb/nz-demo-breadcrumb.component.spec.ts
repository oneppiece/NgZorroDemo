import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoBreadcrumbComponent } from './nz-demo-breadcrumb.component';

describe('NzDemoBreadcrumbComponent', () => {
  let component: NzDemoBreadcrumbComponent;
  let fixture: ComponentFixture<NzDemoBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
