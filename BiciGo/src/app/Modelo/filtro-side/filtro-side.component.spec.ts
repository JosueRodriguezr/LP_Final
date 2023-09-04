import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroSideComponent } from './filtro-side.component';

describe('FiltroSideComponent', () => {
  let component: FiltroSideComponent;
  let fixture: ComponentFixture<FiltroSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroSideComponent]
    });
    fixture = TestBed.createComponent(FiltroSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
