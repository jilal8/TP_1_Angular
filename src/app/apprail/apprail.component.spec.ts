import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprailComponent } from './apprail.component';

describe('ApprailComponent', () => {
  let component: ApprailComponent;
  let fixture: ComponentFixture<ApprailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
