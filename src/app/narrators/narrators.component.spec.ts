import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarratorsComponent } from './narrators.component';

describe('NarratorsComponent', () => {
  let component: NarratorsComponent;
  let fixture: ComponentFixture<NarratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarratorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
