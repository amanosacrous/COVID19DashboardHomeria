import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19InformationComponent } from './covid19-information.component';

describe('Covid19InformationComponent', () => {
  let component: Covid19InformationComponent;
  let fixture: ComponentFixture<Covid19InformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19InformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
