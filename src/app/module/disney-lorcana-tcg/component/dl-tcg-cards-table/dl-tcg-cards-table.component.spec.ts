import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLTCGCardsTableComponent } from './dl-tcg-cards-table.component';

describe('DLTCGCardsTableComponent', () => {
  let component: DLTCGCardsTableComponent;
  let fixture: ComponentFixture<DLTCGCardsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DLTCGCardsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DLTCGCardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
