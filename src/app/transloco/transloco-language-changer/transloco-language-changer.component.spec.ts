import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslocoLanguageChangerComponent } from './transloco-language-changer.component';

describe('TranslocoLanguageChangerComponent', () => {
  let component: TranslocoLanguageChangerComponent;
  let fixture: ComponentFixture<TranslocoLanguageChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TranslocoLanguageChangerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslocoLanguageChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
