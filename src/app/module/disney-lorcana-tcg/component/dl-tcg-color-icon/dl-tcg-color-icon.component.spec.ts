import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLTCGColorIconComponent } from './dl-tcg-color-icon.component';

describe('DLTCGColorIconComponent', () => {
  let component: DLTCGColorIconComponent;
  let fixture: ComponentFixture<DLTCGColorIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DLTCGColorIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DLTCGColorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
