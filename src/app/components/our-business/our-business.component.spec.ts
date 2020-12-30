import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBusinessComponent } from './our-business.component';

describe('OurBusinessComponent', () => {
  let component: OurBusinessComponent;
  let fixture: ComponentFixture<OurBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
