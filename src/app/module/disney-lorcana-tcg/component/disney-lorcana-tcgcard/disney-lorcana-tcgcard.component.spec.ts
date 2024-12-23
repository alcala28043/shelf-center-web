import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyLorcanaTCGCardComponent } from './disney-lorcana-tcgcard.component';

describe('DisneyLorcanaTCGCardComponent', () => {
  let component: DisneyLorcanaTCGCardComponent;
  let fixture: ComponentFixture<DisneyLorcanaTCGCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisneyLorcanaTCGCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisneyLorcanaTCGCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
