import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterViewAllComponent } from './underwriter-view-all.component';

describe('UnderwriterViewAllComponent', () => {
  let component: UnderwriterViewAllComponent;
  let fixture: ComponentFixture<UnderwriterViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderwriterViewAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderwriterViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
