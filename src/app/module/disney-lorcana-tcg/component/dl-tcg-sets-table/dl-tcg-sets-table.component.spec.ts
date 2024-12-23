import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLTCGSetsTableComponent } from './dl-tcg-sets-table.component';

describe('DLTCGSetsTableComponent', () => {
  let component: DLTCGSetsTableComponent;
  let fixture: ComponentFixture<DLTCGSetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DLTCGSetsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DLTCGSetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
