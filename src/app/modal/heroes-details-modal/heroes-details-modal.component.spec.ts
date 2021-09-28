import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailsModalComponent } from './heroes-details-modal.component';

describe('HeroesDetailsModalComponent', () => {
  let component: HeroesDetailsModalComponent;
  let fixture: ComponentFixture<HeroesDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
