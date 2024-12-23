import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyLorcanaTCGComponent } from './disney-lorcana-tcg.component';

describe('DisneyLorcanaTCGComponent', () => {
  let component: DisneyLorcanaTCGComponent;
  let fixture: ComponentFixture<DisneyLorcanaTCGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisneyLorcanaTCGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisneyLorcanaTCGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
