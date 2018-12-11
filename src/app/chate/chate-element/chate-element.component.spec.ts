import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateElementComponent } from './chate-element.component';

describe('ChateElementComponent', () => {
  let component: ChateElementComponent;
  let fixture: ComponentFixture<ChateElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChateElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
