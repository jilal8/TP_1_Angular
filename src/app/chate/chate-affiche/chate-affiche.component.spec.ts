import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateAfficheComponent } from './chate-affiche.component';

describe('ChateAfficheComponent', () => {
  let component: ChateAfficheComponent;
  let fixture: ComponentFixture<ChateAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChateAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChateAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
