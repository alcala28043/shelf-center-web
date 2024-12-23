import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyLorcanaTCGSetComponent } from './disney-lorcana-tcgset.component';

describe('DisneyLorcanaTCGSetComponent', () => {
  let component: DisneyLorcanaTCGSetComponent;
  let fixture: ComponentFixture<DisneyLorcanaTCGSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisneyLorcanaTCGSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisneyLorcanaTCGSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
