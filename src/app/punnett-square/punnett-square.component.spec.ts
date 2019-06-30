import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunnettSquareComponent } from './punnett-square.component';

describe('PunnettSquareComponent', () => {
  let component: PunnettSquareComponent;
  let fixture: ComponentFixture<PunnettSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunnettSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunnettSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
