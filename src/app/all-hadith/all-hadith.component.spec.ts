import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHadithComponent } from './all-hadith.component';

describe('AllHadithComponent', () => {
  let component: AllHadithComponent;
  let fixture: ComponentFixture<AllHadithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllHadithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
