import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretanswerComponent } from './secretanswer.component';

describe('SecretanswerComponent', () => {
  let component: SecretanswerComponent;
  let fixture: ComponentFixture<SecretanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretanswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
