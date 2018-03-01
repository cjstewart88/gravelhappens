import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgiaMapComponent } from './georgia-map.component';

describe('GeorgiaMapComponent', () => {
  let component: GeorgiaMapComponent;
  let fixture: ComponentFixture<GeorgiaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeorgiaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeorgiaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
