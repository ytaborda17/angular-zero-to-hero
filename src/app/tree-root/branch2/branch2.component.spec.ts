import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Branch2Component } from './branch2.component';

describe('Branch2Component', () => {
  let component: Branch2Component;
  let fixture: ComponentFixture<Branch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Branch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Branch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
