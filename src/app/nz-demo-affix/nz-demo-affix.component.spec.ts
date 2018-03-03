import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoAffixComponent } from './nz-demo-affix.component';

describe('NzDemoAffixComponent', () => {
  let component: NzDemoAffixComponent;
  let fixture: ComponentFixture<NzDemoAffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoAffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoAffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
