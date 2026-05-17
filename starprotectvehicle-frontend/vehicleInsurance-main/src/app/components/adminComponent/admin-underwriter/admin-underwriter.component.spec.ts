import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnderwriterComponent } from './admin-underwriter.component';

describe('AdminUnderwriterComponent', () => {
  let component: AdminUnderwriterComponent;
  let fixture: ComponentFixture<AdminUnderwriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUnderwriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUnderwriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
