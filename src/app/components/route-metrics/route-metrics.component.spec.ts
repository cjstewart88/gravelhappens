import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMetricsComponent } from './route-metrics.component';

describe('RouteMetricsComponent', () => {
  let component: RouteMetricsComponent;
  let fixture: ComponentFixture<RouteMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
