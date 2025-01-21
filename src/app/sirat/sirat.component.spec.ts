import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiratComponent } from './sirat.component';

describe('SiratComponent', () => {
  let component: SiratComponent;
  let fixture: ComponentFixture<SiratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiratComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
