import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlTcgSetCardComponent } from './dl-tcg-set-card.component';

describe('DlTcgSetCardComponent', () => {
  let component: DlTcgSetCardComponent;
  let fixture: ComponentFixture<DlTcgSetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlTcgSetCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlTcgSetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
