import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlTcgHomeComponent } from './dl-tcg-home.component';

describe('DlTcgHomeComponent', () => {
  let component: DlTcgHomeComponent;
  let fixture: ComponentFixture<DlTcgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlTcgHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlTcgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
