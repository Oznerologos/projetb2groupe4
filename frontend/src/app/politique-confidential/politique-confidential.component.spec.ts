import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueConfidentialComponent } from './politique-confidential.component';

describe('PolitiqueConfidentialComponent', () => {
  let component: PolitiqueConfidentialComponent;
  let fixture: ComponentFixture<PolitiqueConfidentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitiqueConfidentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitiqueConfidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
