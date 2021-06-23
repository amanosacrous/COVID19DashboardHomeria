import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersCuriousFactComponent } from './numbers-curious-fact.component';

describe('NumbersCuriousFactComponent', () => {
  let component: NumbersCuriousFactComponent;
  let fixture: ComponentFixture<NumbersCuriousFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersCuriousFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersCuriousFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
