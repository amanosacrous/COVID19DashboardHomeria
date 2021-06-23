import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisInfoComponent } from './chuck-norris-info.component';

describe('ChuckNorrisInfoComponent', () => {
  let component: ChuckNorrisInfoComponent;
  let fixture: ComponentFixture<ChuckNorrisInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckNorrisInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
