import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterVehicleInsuranceComponent } from './underwriter-vehicle-insurance.component';

describe('UnderwriterVehicleInsuranceComponent', () => {
  let component: UnderwriterVehicleInsuranceComponent;
  let fixture: ComponentFixture<UnderwriterVehicleInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderwriterVehicleInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderwriterVehicleInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
