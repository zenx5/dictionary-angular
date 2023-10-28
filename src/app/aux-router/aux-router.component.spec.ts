import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxRouterComponent } from './aux-router.component';

describe('AuxRouterComponent', () => {
  let component: AuxRouterComponent;
  let fixture: ComponentFixture<AuxRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxRouterComponent]
    });
    fixture = TestBed.createComponent(AuxRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
