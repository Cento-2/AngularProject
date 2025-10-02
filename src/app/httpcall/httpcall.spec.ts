import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpcall } from './httpcall';

describe('Httpcall', () => {
  let component: Httpcall;
  let fixture: ComponentFixture<Httpcall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpcall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpcall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
